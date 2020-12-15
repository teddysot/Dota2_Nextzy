import { Row } from 'antd'
import React, { useState, useEffect } from 'react'
import Filter from './components/Filter';
import HeroesSelection from './components/HeroesSelection';
import axios from 'axios'
import HeroInfo from './components/HeroInfo';

const App = () => {

  const [strHeroes, setStrHeroes] = useState([])
  const [agiHeroes, setAgiHeroes] = useState([])
  const [intHeroes, setIntHeroes] = useState([])
  const [roles, setRoles] = useState([])
  const [attackTypes, setAttackTypes] = useState([])
  const [names, setNames] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showHero, setShowHero] = useState(null)

  const compare = (a, b) => {
    const AName = a.localized_name
    const BName = b.localized_name
    if (AName < BName) {
      return -1;
    }
    if (AName > BName) {
      return 1;
    }
    return 0;
  }

  const showHeroInfo = (hero) => {
    setShowModal(true);
    setShowHero(hero)
  };

  const applyHeroInfo = (heroes) => {
    let newRoles = new Set()
    let newAttackTypes = new Set()
    let newNames = []
    heroes.map((hero) => {
      hero.roles.forEach((role) => {
        newRoles.add(role)
      })
      newAttackTypes.add(hero.attack_type)
      newNames.push(hero.localized_name)
      return null
    })
    newRoles = Array.from(newRoles)
    newAttackTypes = Array.from(newAttackTypes)
    setRoles(newRoles)
    setAttackTypes(newAttackTypes)
    setNames(newNames)

  }

  const filterHeroes = (heroes) => {
    const newStrHeroes = []
    const newAgiHeroes = []
    const newIntHeroes = []

    heroes.forEach((hero) => {
      hero.filtered = false
      switch (hero.primary_attr) {
        case "str":
          newStrHeroes.push(hero)
          break;
        case "agi":
          newAgiHeroes.push(hero)
          break;
        case "int":
          newIntHeroes.push(hero)
          break;
        default:
          return ""
      }
    })

    setStrHeroes(newStrHeroes)
    setAgiHeroes(newAgiHeroes)
    setIntHeroes(newIntHeroes)
  }


  const roleFilter = (value) => {
    let newStrHeroes = [...strHeroes]
    let newAgiHeroes = [...agiHeroes]
    let newIntHeroes = [...intHeroes]
    newStrHeroes = newStrHeroes.map((hero) => {
      if (hero.roles.indexOf(value) > -1) {
        hero.filtered = false
      }
      else {
        hero.filtered = true
      }
      return hero
    })
    newAgiHeroes = newAgiHeroes.map((hero) => {
      if (hero.roles.indexOf(value) > -1) {
        hero.filtered = false
      }
      else {
        hero.filtered = true
      }
      return hero
    })
    newIntHeroes = newIntHeroes.map((hero) => {
      if (hero.roles.indexOf(value) > -1) {
        hero.filtered = false
      }
      else {
        hero.filtered = true
      }
      return hero
    })
    setStrHeroes(newStrHeroes)
    setAgiHeroes(newAgiHeroes)
    setIntHeroes(newIntHeroes)
  }

  const typeFilter = (value) => {
    let newStrHeroes = [...strHeroes]
    let newAgiHeroes = [...agiHeroes]
    let newIntHeroes = [...intHeroes]
    newStrHeroes = newStrHeroes.map((hero) => {
      if (hero.attack_type === value) {
        hero.filtered = false
      }
      else {
        hero.filtered = true
      }
      return hero
    })
    newAgiHeroes = newAgiHeroes.map((hero) => {
      if (hero.attack_type === value) {
        hero.filtered = false
      }
      else {
        hero.filtered = true
      }
      return hero
    })
    newIntHeroes = newIntHeroes.map((hero) => {
      if (hero.attack_type === value) {
        hero.filtered = false
      }
      else {
        hero.filtered = true
      }
      return hero
    })
    setStrHeroes(newStrHeroes)
    setAgiHeroes(newAgiHeroes)
    setIntHeroes(newIntHeroes)
  }

  const nameFilter = (value) => {
    let newStrHeroes = [...strHeroes]
    let newAgiHeroes = [...agiHeroes]
    let newIntHeroes = [...intHeroes]
    console.log(value);
    newStrHeroes = newStrHeroes.map((hero) => {
      if (hero.localized_name === value) {
        hero.filtered = false
      }
      else {
        hero.filtered = true
      }
      return hero
    })
    newAgiHeroes = newAgiHeroes.map((hero) => {
      if (hero.localized_name === value) {
        hero.filtered = false
      }
      else {
        hero.filtered = true
      }
      return hero
    })
    newIntHeroes = newIntHeroes.map((hero) => {
      if (hero.localized_name === value) {
        hero.filtered = false
      }
      else {
        hero.filtered = true
      }
      return hero
    })
    setStrHeroes(newStrHeroes)
    setAgiHeroes(newAgiHeroes)
    setIntHeroes(newIntHeroes)
  }

  const roleTypeFilter = (value) => {
    let newStrHeroes = [...strHeroes]
    let newAgiHeroes = [...agiHeroes]
    let newIntHeroes = [...intHeroes]
    newStrHeroes = newStrHeroes.map((hero) => {
      if (hero.roles.indexOf(value[0]) > -1 && hero.attack_type === value[1]) {
        hero.filtered = false
      }
      else {
        hero.filtered = true
      }
      return hero
    })
    newAgiHeroes = newAgiHeroes.map((hero) => {
      if (hero.roles.indexOf(value[0]) > -1 && hero.attack_type === value[1]) {
        hero.filtered = false
      }
      else {
        hero.filtered = true
      }
      return hero
    })
    newIntHeroes = newIntHeroes.map((hero) => {
      if (hero.roles.indexOf(value[0]) > -1 && hero.attack_type === value[1]) {
        hero.filtered = false
      }
      else {
        hero.filtered = true
      }
      return hero
    })
    setStrHeroes(newStrHeroes)
    setAgiHeroes(newAgiHeroes)
    setIntHeroes(newIntHeroes)
  }

  const onFilter = (type, value) => {
    switch (type) {
      case 'roletype':
        roleTypeFilter(value)
        break;
      case 'role':
        roleFilter(value)
        break;
      case 'type':
        typeFilter(value)
        break;
      case 'name':
        nameFilter(value)
        break;
      case 'clear':
        clearFilter()
        break;
      default:
        clearFilter()
        break
    }
  }

  const clearFilter = () => {
    let newStrHeroes = [...strHeroes]
    let newAgiHeroes = [...agiHeroes]
    let newIntHeroes = [...intHeroes]
    newStrHeroes = newStrHeroes.map((hero) => {
      hero.filtered = false
      return hero
    })
    newAgiHeroes = newAgiHeroes.map((hero) => {
      hero.filtered = false
      return hero
    })
    newIntHeroes = newIntHeroes.map((hero) => {
      hero.filtered = false
      return hero
    })
    setStrHeroes(newStrHeroes)
    setAgiHeroes(newAgiHeroes)
    setIntHeroes(newIntHeroes)
  }

  useEffect(() => {
    axios.get('https://api.opendota.com/api/heroes')
      .then((res) => {
        let newData = [...res.data]

        const sortedHeroes = newData.sort(compare)
        applyHeroInfo(sortedHeroes)
        filterHeroes(sortedHeroes)
      })
      .catch((err) => {
        console.log(err);
      })

  }, [])

  const styledWindow = { backgroundColor: "#1e2229", width: "100vw", height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }

  return (
    <Row style={styledWindow}>
      {showHero ?
        <HeroInfo showHero={showHero} showModal={showModal} setShowModal={setShowModal} />
        : null}
      <Filter roles={roles} attackTypes={attackTypes} names={names} onFilter={onFilter} />
      <HeroesSelection showHeroInfo={showHeroInfo} heroes={strHeroes} primaryAttribute="STRENGTH" />
      <HeroesSelection showHeroInfo={showHeroInfo} heroes={agiHeroes} primaryAttribute="AGILITY" />
      <HeroesSelection showHeroInfo={showHeroInfo} heroes={intHeroes} primaryAttribute="INTELLIGENCE" />
    </Row>
  )
}

export default App


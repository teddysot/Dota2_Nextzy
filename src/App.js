import { Row } from 'antd'
import React, { useState, useEffect } from 'react'
import Filter from './components/Filter';
import HeroesSelection from './components/HeroesSelection';
import axios from 'axios'
import HeroInfo from './components/HeroInfo';
import { clearFilter, nameFilter, roleFilter, roleTypeFilter, filterHeroes, setHeroesInfo, typeFilter } from './store/actions';
import { connect } from 'react-redux'

const App = (props) => {

  const {
    strHeroes,
    agiHeroes,
    intHeroes,
    roles,
    attackTypes,
    names,
    onSetHeroesInfo,
    onRoleFilter,
    onTypeFilter,
    onNameFilter,
    onRoleTypeFilter,
    onClearFilter,
    onFilterHeroes
  } = props

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

  const onFilter = (type, value) => {
    switch (type) {
      case 'roletype':
        onRoleTypeFilter(value)
        break;
      case 'role':
        onRoleFilter(value)
        break;
      case 'type':
        onTypeFilter(value)
        break;
      case 'name':
        onNameFilter(value)
        break;
      case 'clear':
        onClearFilter()
        break;
      default:
        onClearFilter()
        break
    }
  }

  useEffect(() => {
    axios.get('https://api.opendota.com/api/heroes')
      .then((res) => {
        let newData = [...res.data]
        const sortedHeroes = newData.sort(compare)
        /* eslint-disable-next-line */
        onSetHeroesInfo(sortedHeroes)
        onFilterHeroes(sortedHeroes)
        /* eslint-disable-next-line */
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

const mapStateToProps = state => {
  return {
    strHeroes: state.heroesReducer.strHeroes,
    agiHeroes: state.heroesReducer.agiHeroes,
    intHeroes: state.heroesReducer.intHeroes,
    roles: state.heroesReducer.roles,
    attackTypes: state.heroesReducer.attackTypes,
    names: state.heroesReducer.names
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetHeroesInfo: (value) => dispatch(setHeroesInfo(value)),
    onFilterHeroes: (value) => dispatch(filterHeroes(value)),
    onRoleFilter: (value) => dispatch(roleFilter(value)),
    onTypeFilter: (value) => dispatch(typeFilter(value)),
    onNameFilter: (value) => dispatch(nameFilter(value)),
    onRoleTypeFilter: (value) => dispatch(roleTypeFilter(value)),
    onClearFilter: () => dispatch(clearFilter())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)


import { Row } from 'antd'
import React, { useState, useEffect } from 'react'
import Filter from './components/Filter';
import HeroesSelection from './components/HeroesSelection';
import axios from 'axios'
import HeroInfo from './components/HeroInfo';
import { filterHeroes, setHeroesInfo } from './store/actions';
import { connect } from 'react-redux'

const App = (props) => {

  const {
    strHeroes,
    agiHeroes,
    intHeroes,
    onSetHeroesInfo,
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

  useEffect(() => {
    axios.get('https://api.opendota.com/api/heroes')
      .then((res) => {
        let newData = [...res.data]
        const sortedHeroes = newData.sort(compare)
        onSetHeroesInfo(sortedHeroes)
        onFilterHeroes(sortedHeroes)
      })
      .catch((err) => {
        console.log(err);
      })

  }, [onSetHeroesInfo, onFilterHeroes])

  const styledWindow = { backgroundColor: "#1e2229", width: "100vw", height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }

  return (
    <Row style={styledWindow}>
      {showHero ?
        <HeroInfo showHero={showHero} showModal={showModal} setShowModal={setShowModal} />
        : null}
      <Filter />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)


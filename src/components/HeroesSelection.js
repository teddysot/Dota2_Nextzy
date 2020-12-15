import React from 'react'
import { Col } from 'antd'
import Hero from './Hero'

const HeroesSelection = ({ heroes, primaryAttribute, showHeroInfo }) => {

    const styledWindow = { width: '90vw', height: '25vh', marginTop: '2vh' }
    const styledAttributeTitle = { color: '#a3a3a3', fontWeight: '600', fontSize: '2.0em' }
    const styledHeroesWrapper = { display: 'flex', flexWrap: 'wrap' }

    return (
        <Col style={styledWindow}>
            <div style={styledAttributeTitle}>{primaryAttribute}</div>
            <div style={styledHeroesWrapper}>
                {heroes.map((hero, idx) => (
                    <Hero showHeroInfo={showHeroInfo} hero={hero} idx={idx} />
                ))}
            </div>
        </Col>
    )
}

export default HeroesSelection

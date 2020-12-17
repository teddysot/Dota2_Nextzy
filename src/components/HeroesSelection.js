import React from 'react'
import { Col } from 'antd'
import Hero from './Hero'

const HeroesSelection = ({ heroes, primaryAttribute, showHeroInfo }) => {

    const styledWindow = { width: '90vw' }
    const styledAttributeTitle = { color: '#a3a3a3', fontWeight: '600', fontSize: '2.0em' }
    const styledHeroesWrapper = { display: 'flex', flexWrap: 'wrap' }

    return (
        <Col span={23} style={styledWindow}>
            <Col span={24} style={styledAttributeTitle}>{primaryAttribute}</Col>
            <Col span={24} style={styledHeroesWrapper}>
                {heroes.map((hero, idx) => (
                    <Hero showHeroInfo={showHeroInfo} hero={hero} idx={idx} />
                ))}
            </Col>
        </Col>
    )
}

export default HeroesSelection

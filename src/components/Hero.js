import React, { useState } from 'react'
import { Col, Image } from 'antd'

const Hero = ({ hero, idx, showHeroInfo }) => {
    const [hovered, setHovered] = useState(false)
    const heroStyle = {
        width: "68px",
        height: '100px',
        marginRight: '1px',
        marginBottom: '5px',
        transform: hovered ? 'scale(1.5,1.5)' : null,
        cursor: hovered ? 'pointer' : null,
        zIndex: hovered ? '1' : '0'
    }
    const styledAvatar = {
        marginTop: '0px',
        marginBottom: '0px',
        objectFit: 'cover',
        filter: hero.filtered ? null : 'grayscale(100%)'
    }

    const getHeroName = (name) => {

        return name.name.split('hero_')[1]
    }

    return (
        <Col span={1} key={idx} style={heroStyle} onClick={() => { showHeroInfo(hero) }} onMouseOut={() => setHovered(false)} onMouseOver={() => setHovered(true)}>
            <Image preview={false} height="6.0rem" style={styledAvatar}
                src={`http://cdn.dota2.com/apps/dota2/images/heroes/${getHeroName(hero)}_vert.jpg`} alt="" />
        </Col>
    )
}

export default Hero

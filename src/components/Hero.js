import React, { useState } from 'react'

const Hero = ({ hero, idx, showHeroInfo }) => {
    const [hovered, setHovered] = useState(false)
    const heroStyle = { width: "68px", height: '100px', marginRight: '5px', marginBottom: '5px', transform: hovered ? 'scale(1.5,1.5)' : null, cursor: hovered ? 'pointer' : null }

    const getHeroName = (name) => {

        return name.name.split('hero_')[1]
    }

    const styledAvatar = { width: '100%', height: '100%', objectFit: 'cover', filter: hero.filtered ? 'grayscale(100%)' : null }
    return (
        <div key={idx} style={heroStyle} onClick={() => { showHeroInfo(hero) }} onMouseOut={() => setHovered(false)} onMouseOver={() => setHovered(true)}>
            <img style={styledAvatar}
                src={`http://cdn.dota2.com/apps/dota2/images/heroes/${getHeroName(hero)}_vert.jpg`} alt="" />
        </div>
    )
}

export default Hero

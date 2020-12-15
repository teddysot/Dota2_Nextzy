import React from 'react'
import { Modal } from 'antd'

const HeroInfo = ({ showHero, showModal, setShowModal }) => {
    const styledWrapper = { display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }
    const styledHeroName = { color: '#bfbfbf', fontWeight: '500', fontSize: '3.0em' }
    const styledAvatar = { margin: "2.0em 0", objectFit: 'contain', width: '256px', height: '144px' }
    
    return (
        <Modal title={null} mask={false} visible={showModal} footer={null} onCancel={() => { setShowModal(false) }} bodyStyle={{ backgroundColor: '#16191f' }} >
            <div style={styledWrapper}>
                <div style={{ display: 'flex' }}><div style={styledHeroName}>{showHero.localized_name.toUpperCase()}</div></div>
                <img style={styledAvatar} src={`http://cdn.dota2.com/apps/dota2/images/heroes/${showHero.name.split('hero_')[1]}_full.png`} alt={`${showHero.name.split('hero_')[1]}`} />
                <div style={{ color: "#bfbfbf" }}>
                    <strong>{showHero.attack_type}</strong> - {showHero.roles.map((role, idx) => (
                        <span key={idx}>{role}{showHero.roles.length - 1 !== idx ? ' - ' : null}</span>
                    ))}
                </div>
            </div>
        </Modal>
    )
}

export default HeroInfo

import React, { useState } from 'react'
import { Col, Row, Menu, Button } from 'antd'
import styled from 'styled-components'
import FilterDropdown from './FilterDropdown';

const Filter = ({ roles, attackTypes, names, onFilter }) => {
    const DEFAULT_ROLE_FILTER = "BY ROLE"
    const DEFAULT_TYPE_FILTER = "BY ATTACK TYPE"
    const DEFAULT_NAME_FILTER = "HERO NAME"

    const [roleFilter, setRoleFilter] = useState(DEFAULT_ROLE_FILTER)
    const [typeFilter, setTypeFilter] = useState(DEFAULT_TYPE_FILTER)
    const [nameFilter, setNameFilter] = useState(DEFAULT_NAME_FILTER)

    const ButtonContainer = styled.div`
    .ant-btn-primary {
        color: #616161;
        font-weight: 600;
        font-size: 1.3em;
        background-color: #383838;
        border-color: #383838;
        height: 2.0em;
        width: 100%;
        display: flex;
    }`

    const rolesMenu = (
        <Menu style={{ backgroundColor: "#383838" }}>
            {roles.map((role, idx) => (
                <Menu.Item key={idx} style={{ backgroundColor: "#383838" }}>
                    <ButtonContainer>
                        <Button
                            onClick={() => {
                                if (typeFilter !== DEFAULT_TYPE_FILTER) {
                                    onFilter("roletype", [role, typeFilter])
                                }
                                else {
                                    onFilter("role", role)
                                }
                                setRoleFilter(role)
                            }}
                            type="primary">{role}</Button>
                    </ButtonContainer>
                </Menu.Item>
            ))}
        </Menu>
    )
    const attackTypeMenu = (
        <Menu style={{ backgroundColor: "#383838" }}>
            {attackTypes.map((type, idx) => (
                <Menu.Item key={idx} style={{ backgroundColor: "#383838" }}>
                    <ButtonContainer>
                        <Button
                            onClick={() => {
                                if (roleFilter !== DEFAULT_ROLE_FILTER) {
                                    onFilter("roletype", [roleFilter, type])
                                }
                                else {
                                    onFilter("type", type)
                                }
                                setTypeFilter(type)
                            }}
                            type="primary">{type}</Button>
                    </ButtonContainer>
                </Menu.Item>
            ))}
        </Menu>
    )
    const nameMenu = (
        <Menu style={{ backgroundColor: "#383838" }}>
            {names.map((name, idx) => (
                <Menu.Item key={idx} style={{ backgroundColor: "#383838" }}>
                    <ButtonContainer>
                        <Button
                            onClick={() => {
                                onFilter("name", name)
                                setRoleFilter(DEFAULT_ROLE_FILTER)
                                setTypeFilter(DEFAULT_TYPE_FILTER)
                                setNameFilter(name)
                            }}
                            type="primary">{name}</Button>
                    </ButtonContainer>
                </Menu.Item>
            ))}
        </Menu>
    )

    const clearFilter = () => {
        setRoleFilter(DEFAULT_ROLE_FILTER)
        setTypeFilter(DEFAULT_TYPE_FILTER)
        setNameFilter(DEFAULT_NAME_FILTER)
    }

    const styledMenu = { padding: '1.0em 1.0em' }
    const styledWindow = { backgroundColor: "#2b2b2b", width: '60vw', height: '6.5vh', marginTop: '3vh' }
    const styledFilterContainer = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '1.0em 1.0em' }
    const styledFilterWrapper = { padding: "0.25em 0.5em", color: '#616161', fontWeight: '600', fontSize: '1.3em' }

    return (
        <Col style={styledWindow}>
            <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Col span={3} style={styledFilterContainer}>
                    <div style={styledFilterWrapper}>
                        FILTER
            </div>
                </Col>
                <FilterDropdown overlay={rolesMenu} title={roleFilter} />
                <FilterDropdown overlay={attackTypeMenu} title={typeFilter} />
                <FilterDropdown overlay={nameMenu} title={nameFilter} />
                <Col span={3} style={styledMenu}>
                    <ButtonContainer>
                        <Button
                            onClick={() => {
                                onFilter('clear')
                                clearFilter()
                            }}
                            type="primary">Clear Filter</Button>
                    </ButtonContainer>
                </Col>
            </Row>
        </Col>
    )
}

export default Filter

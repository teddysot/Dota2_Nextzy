import React, { useState } from 'react'
import { Col, Row, Menu, Button } from 'antd'
import styled from 'styled-components'
import FilterDropdown from './FilterDropdown';
import { connect } from 'react-redux'
import { clearFilter, nameFilter, roleTypeFilter, typeFilter, roleFilter } from '../store/actions';

const Filter = (props) => {
    const {
        roles,
        attackTypes,
        names,
        onRoleFilter,
        onTypeFilter,
        onRoleTypeFilter,
        onClearFilter,
        onNameFilter
    } = props

    const DEFAULT_ROLE_FILTER = "BY ROLE"
    const DEFAULT_TYPE_FILTER = "BY ATTACK TYPE"
    const DEFAULT_NAME_FILTER = "HERO NAME"

    const [roleFilterText, setRoleFilterText] = useState(DEFAULT_ROLE_FILTER)
    const [typeFilterText, setTypeFilterText] = useState(DEFAULT_TYPE_FILTER)
    const [nameFilterText, setNameFilterText] = useState(DEFAULT_NAME_FILTER)

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
                                if (typeFilterText !== DEFAULT_TYPE_FILTER) {
                                    onRoleTypeFilter([role, typeFilterText])
                                }
                                else {
                                    onRoleFilter(role)
                                }
                                setRoleFilterText(role)
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
                                if (roleFilterText !== DEFAULT_ROLE_FILTER) {
                                    onRoleTypeFilter([roleFilterText, type])
                                }
                                else {
                                    onTypeFilter(type)
                                }
                                setTypeFilterText(type)
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
                                onNameFilter(name)
                                setRoleFilterText(DEFAULT_ROLE_FILTER)
                                setTypeFilterText(DEFAULT_TYPE_FILTER)
                                setNameFilterText(name)
                            }}
                            type="primary">{name}</Button>
                    </ButtonContainer>
                </Menu.Item>
            ))}
        </Menu>
    )

    const clearFilterText = () => {
        setRoleFilterText(DEFAULT_ROLE_FILTER)
        setTypeFilterText(DEFAULT_TYPE_FILTER)
        setNameFilterText(DEFAULT_NAME_FILTER)
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
                <FilterDropdown overlay={rolesMenu} title={roleFilterText} />
                <FilterDropdown overlay={attackTypeMenu} title={typeFilterText} />
                <FilterDropdown overlay={nameMenu} title={nameFilterText} />
                <Col span={3} style={styledMenu}>
                    <ButtonContainer>
                        <Button
                            onClick={() => {
                                onClearFilter()
                                clearFilterText()
                            }}
                            type="primary">Clear Filter</Button>
                    </ButtonContainer>
                </Col>
            </Row>
        </Col>
    )
}

const mapStateToProps = state => {
    return {
        roles: state.heroesReducer.roles,
        attackTypes: state.heroesReducer.attackTypes,
        names: state.heroesReducer.names
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRoleFilter: (value) => dispatch(roleFilter(value)),
        onTypeFilter: (value) => dispatch(typeFilter(value)),
        onNameFilter: (value) => dispatch(nameFilter(value)),
        onRoleTypeFilter: (value) => dispatch(roleTypeFilter(value)),
        onClearFilter: () => dispatch(clearFilter())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

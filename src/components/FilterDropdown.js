import React from 'react'
import { Col, Dropdown, Button } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons';
import styled from 'styled-components'

const FilterDropdown = ({ overlay, title }) => {
    const styledMenu = { padding: '1.0em 1.0em' }
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

    return (
        <Col span={6} style={styledMenu}>
            <Dropdown overlay={overlay} trigger={['click']}>
                <ButtonContainer>
                    <Button type="primary">
                        <Col span={4}>{title}</Col>
                        <Col span={16}></Col>
                        <Col span={4}><CaretDownOutlined /></Col>
                    </Button>
                </ButtonContainer>
            </Dropdown>
        </Col>
    )
}

export default FilterDropdown

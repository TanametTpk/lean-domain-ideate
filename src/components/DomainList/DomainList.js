import React from 'react'
import Domain from './Domain'
import styled from 'styled-components'

const Container = styled.div`

    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(240px, 360px) );
    grid-gap: 24px;
    grid-auto-rows: 50px;
    font-size: 24px;
    padding: 24px;

`

const DomainList = ({domains}) => {
    return (
        <Container>
            {
                domains.map((domain) => <Domain name={domain} />)
            }
        </Container>
    )
}

export default DomainList

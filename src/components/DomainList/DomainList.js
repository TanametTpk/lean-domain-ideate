import React from 'react'
import Domain from './Domain'
import styled from 'styled-components'

const Container = styled.div`

    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(240px, 450px) );
    grid-gap: 24px;
    grid-auto-rows: 50px;
    font-size: 24px;
    padding: 24px;
    justify-content:center;

`

const DomainList = ({domains, searchedWord}) => {
    return (
        <Container>
            {
                domains.map((domain, index) => <Domain name={domain} searchedWord={searchedWord} key={index} />)
            }
        </Container>
    )
}

export default DomainList

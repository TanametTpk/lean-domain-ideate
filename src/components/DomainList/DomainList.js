import React from 'react'
import Domain from './Domain'
import styled from 'styled-components'

const Container = styled.div`



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

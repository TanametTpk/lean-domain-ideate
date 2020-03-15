import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    cursor: pointer;

    &:hover {

        transform: scale(1.07);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

    }

`

const Domain = ({name}) => {
    return (
        <Container>
            {name}
        </Container>
    )
}

export default Domain

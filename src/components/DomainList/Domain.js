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

const Domain = ({name, searchedWord}) => {

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const capitalizeDomain = (result, domain) => {

        let domain_name = result
    
        let splited_domain = domain_name.split(domain.toLowerCase())
    
        let word = splited_domain[0]
        let isfront = true
        if (splited_domain[1]){
            word = splited_domain[1]
            isfront = false
        }
        
        word = capitalize(word)
        if (isfront) word = <div><b>{word}</b>{capitalize(domain)}</div>
        else word = <div>{capitalize(domain)}<b>{word}</b></div>
    
        return word
    
    }

    const goToGoogleDomain = () => {

        window.open(`https://domains.google.com/m/registrar/search?searchTerm=${name}`, "_blank")

    }

    return (
        <Container onClick={goToGoogleDomain}>
            {capitalizeDomain(name, searchedWord)}
        </Container>
    )
}

export default Domain

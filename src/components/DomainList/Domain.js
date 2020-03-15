import React, {useState} from 'react'
import styled from 'styled-components'
import { Tooltip } from 'antd';
import { PlusCircleOutlined, PlusCircleTwoTone  } from '@ant-design/icons';
import { connect } from 'react-redux'
import { add_domain_to_cart, remove_domain_from_cart } from '../../store/actions/cartAction'

const Container = styled.div`

    background-color: white;
    transition: 0.3s ease-in-out;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    cursor: pointer;
    position: relative;
    display: flex;
    jutify-content:center;
    align-items: center;

    &:hover {

        transform: scale(1.07);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

    }

`

const Domain = ({name, searchedWord, ...props}) => {

    let isSelect = props.carts.items.some((domain) => domain === name)

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

    const addToCart = () => {
        props.add_domain_to_cart(name)
    }

    const removeFromCart = () => {
        props.remove_domain_from_cart(name)
    }

    const goToGoogleDomain = () => {

        window.open(`https://domains.google.com/m/registrar/search?searchTerm=${name}`, "_blank")

    }

    return (
        <Container>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100%", width:"100%"}} onClick={goToGoogleDomain}>
                {capitalizeDomain(name, searchedWord)}
            </div>
            <Tooltip title={!isSelect ? "add to cart" : "remove from cart"}>
                {
                    isSelect ?
                        <PlusCircleTwoTone onClick={removeFromCart} style={{position: "absolute", right: "24px"}} />
                    :
                        <PlusCircleOutlined onClick={addToCart} style={{position: "absolute", right: "24px"}} />
                }
            </Tooltip>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    carts: state.carts
})

const mapDispatchToProps = {
    add_domain_to_cart,
    remove_domain_from_cart
}


export default connect(mapStateToProps, mapDispatchToProps)(Domain)

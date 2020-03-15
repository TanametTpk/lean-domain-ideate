import { ADD_CART, REMOVE_CART } from './types'

export const add_domain_to_cart = (domain) => dispatch => {
    //do something
    dispatch({
        type: ADD_CART,
        payload: domain
    })

}

export const remove_domain_from_cart = (domain) => dispatch => {
    //do something
    dispatch({
        type: REMOVE_CART,
        payload: domain
    })

}
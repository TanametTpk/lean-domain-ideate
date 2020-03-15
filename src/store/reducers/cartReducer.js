import { ADD_CART, REMOVE_CART } from '../actions/types'

const initState = {
    items:[],
    count:0
}

export default function(state = initState , action){

    switch (action.type) {
        case ADD_CART:

            let items = state.items
            if (items.indexOf(action.payload) === -1){

                return {
                    ...state,
                    items:[
                        ...state.items,
                        action.payload
                    ],
                    count: state.count + 1
                }

            }

            return state
    
        case REMOVE_CART:
            return {
                ...state,
                items:state.items.filter((item) => item !== action.payload),
                count: state.count - 1
            }

        default:
            return state
    }

}
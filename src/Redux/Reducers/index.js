import {
    GET_ALL_LOCATION,
    GET_ALL_VEHICLES,
    GET_ALL_QUOTES,
    GET_QUOTE,
    CREATE_QUOTE,
    EDIT_QUOTE,
    DELETE_QUOTE
} from '../Actions/types'

const initialState = {
    quotes : [],
    locations : [],
    vehicles : [],
    quotes : [],
    currentQuote : [] 
}

function rootReducer(state = initialState, {type,payload}){
    switch(type){
        case GET_ALL_LOCATION:
            return{
                ...state,
                locations : payload
            }

        case GET_ALL_VEHICLES:
            return{
                ...state,
                vehicles : payload
            }

        case GET_ALL_QUOTES:
            return{
                ...state,
                quotes : payload
            }

        case GET_QUOTE:
            return{
                ...state,
                currentQuote : payload
            }

        case CREATE_QUOTE:
            return state
        
        case EDIT_QUOTE:
            return{
                ...state,
                currentQuote : payload
            }

        case DELETE_QUOTE:
            return state    
            
        default:
            return state
    }
}

export default rootReducer
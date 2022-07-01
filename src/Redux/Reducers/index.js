import {
    GET_ALL_LOCATION,
    GET_ALL_VEHICLES,
    GET_ALL_QUOTATION,
    GET_QUOTATION,
    CREATE_QUOTATION,
    EDIT_QUOTATION,
    DELETE_QUOTATION
} from '../Actions/types'

const initialState = {
    quotations : [],
    locations : [],
    vehicles : [],
    currentQuotation : [] 
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

        case GET_ALL_QUOTATION:
            return{
                ...state,
                quotations : payload
            }

        case GET_QUOTATION:
            return{
                ...state,
                currentQuotation : payload
            }

        case CREATE_QUOTATION:
            return state
        
        case EDIT_QUOTATION:
            return{
                ...state,
                currentQuotation : payload
            }

        case DELETE_QUOTATION:
            return state    
            
        default:
            return state
    }
}

export default rootReducer
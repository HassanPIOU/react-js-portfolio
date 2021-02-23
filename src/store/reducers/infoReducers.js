import {GET_INFORMATIONS} from '../types'

const initialState = {
    info:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_INFORMATIONS:
            return {
                ...state,
                info:action.payload,
                loading:false

            }
        default: return state
    }

}
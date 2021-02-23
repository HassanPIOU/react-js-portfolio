import {GET_ARTICLE} from '../types'

const initialState = {
    article:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_ARTICLE:
            return {
                ...state,
                article:action.payload,
                loading:false

            }
        default: return state
    }

}
import {GET_PROJECT} from '../types'

const initialState = {
    project:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_PROJECT:
            return {
                ...state,
                project:action.payload,
                loading:false

            }
        default: return state
    }

}
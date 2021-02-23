import axios from "axios";
import {API_BEARER_TOKEN, CONTACT_SEND_LINK, SET_LIKE_API_URL} from "./params";


export const SetLikeArticle = async (slug)  => {

    try{
        const res = await axios.get(SET_LIKE_API_URL+slug,{ headers: { Authorization: API_BEARER_TOKEN } })
        console.log(res.data)
        return res.data
    }
    catch(e){
       return e
    }

}

export const SendContact = async (data)  => {

    try{
        const res = await axios.post(CONTACT_SEND_LINK,data,{ headers: {
           'content-type': 'application/json',
            Authorization: API_BEARER_TOKEN
        } })
        console.log(res.data.status)
        return res.data
    }
    catch(e){
        return e
    }

}


import {ARTICLE_ERROR, GET_ARTICLE, GET_INFORMATIONS, GET_PROJECT, INFORMATION_ERROR, PROJECT_ERROR} from '../types'
import axios from 'axios'
import {API_BEARER_TOKEN, BLOG_DETAIL_API_URL, INFO_API_URL, PORTFOLIO_DETAIL_API_URL} from "../../_helpers/params";

export const getInfo = () => async dispatch => {

    try{
        const res = await axios.get(INFO_API_URL,{ headers: { Authorization: API_BEARER_TOKEN } })
        dispatch( {
            type: GET_INFORMATIONS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: INFORMATION_ERROR,
            payload: console.log(e),
        })
    }

}

export const getBlogDetail = (slug) => async dispatch => {

    try{
        const res = await axios.get(BLOG_DETAIL_API_URL+slug,{ headers: { Authorization: API_BEARER_TOKEN } })
        dispatch( {
            type: GET_ARTICLE,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: ARTICLE_ERROR,
            payload: console.log(e),
        })
    }

}

export const getPortfolioDetail = (slug) => async dispatch => {

    try{
        const res = await axios.get(PORTFOLIO_DETAIL_API_URL+slug,{ headers: { Authorization: API_BEARER_TOKEN } })
        dispatch( {
            type: GET_PROJECT,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: PROJECT_ERROR,
            payload: console.log(e),
        })
    }

}



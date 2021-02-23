import React, {useEffect, useState} from 'react'
import Cookies from "universal-cookie";
import {SetLikeArticle} from "../../_helpers/apiFetch";


const  LikeButton = (props) => {

    console.log(props)

    const cookies = new Cookies()
    const [like, setLike] = useState(props.like)

  const  AddLike = () => {
      let newCount = like + 1
       SetLikeArticle(props.slug)
      setLike(newCount)

      cookies.set('like-'+props.slug, true)
  }
        if (!cookies.get('like-'+props.slug)){
            return(
                <div className="likeBlogIcon"  onClick={AddLike}><div className='iconContent'><i className="fa fa-heart"></i></div> {like}</div>
            )
        }
        else{
            return(
                <div className="likeBlogIcon like"><div className='iconContent'><i className="fa fa-heart"></i></div> {like}</div>
            )

        }
    }


export  default LikeButton
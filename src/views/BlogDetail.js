import React, {useEffect} from "react";
import Footer from "../components/Footer";
import '../assets/style.css'
import {Link,useParams,useHistory} from "react-router-dom";
import Logo from "../assets/images/dark-logo.png";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {getBlogDetail} from "../store/actions/infoActions";
import Loading from "../components/Loader";
import {BLOG_IMAGE_URL} from "../_helpers/params";
import moment from "moment";
import ShareButtons from "../_helpers/ShareButtons";



const BlogDetail = (match) => {
  const  slug = useParams().slug

    const dispatch = useDispatch()
    const articleData = useSelector(state => state.article)
    const {loading, error, article} = articleData
    useEffect(() => {
        dispatch(getBlogDetail(slug))
    }, [dispatch])

    let history = useHistory();

    const transitionMotion = {duration : 0.6, ease : [0.6,0.01,-0.05,0.9]}


    const GoBack = () => {
        history.push("/");
    }



    if (loading){
        return(<div>
            <Loading/>
        </div>)
    }
    if (error){
        return(<div>{error.message}</div>)
    }
    if (article.status == "success") {
        const detail = article.information
        const tags = article.tags
        return (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.5}}
            >
                 <button className="arrowbackBtn" onClick={GoBack} ><i className='zmdi zmdi-arrow-back'></i> Retour</button>

                 <ShareButtons slug={detail.slug} title={detail.title}   type="blog" />

                <h1 className="postHeader">POSTS</h1>
                <h3 className="postHeaderSecond">Blog</h3>

                <div className="blog-details-area light-bg section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-10 col-text-center">

                                <div className="single-post">
                                    <div className="row" style={{marginBottom : "30px"}}>
                                        <div className="col-lg-2">
                                            <i className='fa fa-user'></i>  Hassan PIOU
                                        </div>
                                        <div className="col-lg-3">
                                                <i className="fa fa-calendar"></i>  {moment(detail.created_at).format('Do MMMM YYYY')}
                                        </div>
                                        <div className="col-lg-5 tags">
                                            <i className="fa fa-tag"></i>
                                            {tags.map((tag,k) => <span key={k}>{tag.name} , </span>) }

                                        </div>

                                        {/*<div className="col-lg-2"><LikeButton slug={detail.slug} like={detail.like} className="pull-right" /></div>*/}
                                    </div>

                                    <h2 className="font-40 montserrat weight-bold capitalize mb-10">{detail.title}</h2>

                                    <div className="img mb-60">
                                        <motion.img whileHover={{scale : 0.99}} transition={transitionMotion} src={BLOG_IMAGE_URL+detail.image} style={{width : '100%'}} alt=""/>

                                    </div>
                                    <div className="text">
                                        <p >{detail.content}</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </motion.div>
        )
    } else {
       return (
           <motion.div
               initial={{opacity: 0}}
               animate={{opacity: 1}}
               exit={{opacity: 0}}
               transition={{duration: 0.5}}
           >
               <header className="header-style-1 bg-color-1">
                   <div className="top clearfix">
                       <div className="header-top active-sticky ptb-50">
                           <div className="container">
                               <div className="row">
                                   <div className="col-xs-6 col-sm-5">
                                       <div className="left">
                                           <div className="logo">
                                               <Link to="/"><img src={Logo} alt="Mim"/></Link>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="col-xs-6 col-sm-7">
                                       <div className="right">
                                           <div className="expand-menu-open floatright">
                                               <i className="zmdi zmdi-menu mobile"></i>
                                           </div>
                                           <nav className="mainmenu onepage-nev floatright">
                                               <ul className="clearfix">
                                                   <li><Link to="/#home">Home</Link></li>
                                                   <li><Link to="/#about">About</Link></li>
                                                   <li><Link to="/#portfolio">PORTFOLIO</Link></li>
                                                   <li><Link to="/#service">Services</Link></li>
                                                   <li><Link to="/#blog">Blog</Link></li>
                                                   <li><Link to="/#contact">Contact</Link></li>
                                               </ul>
                                           </nav>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="mainmenu-expand bg-color-3">
                           <div className="close-menu">
                               <i className="zmdi zmdi-close-circle-o"></i>
                           </div>
                           <div className="menu-logo">
                               <Link to="/"><img src={Logo} alt="Mim"/></Link>
                           </div>
                           <nav className="mainmenu-box onepage-nev">
                               <ul className="clearfix">
                                   <li><Link to="/#home">Home</Link></li>
                                   <li><Link to="/#about">About</Link></li>
                                   <li><Link to="/#portfolio">PORTFOLIO</Link></li>
                                   <li><Link to="/#service">Services</Link></li>
                                   <li><Link to="/#blog">Blog</Link></li>
                                   <li><Link to="/#contact">Contact</Link></li>
                               </ul>
                           </nav>
                       </div>
                   </div>
               </header>
               <h3 className="blognotexist">{article.message}</h3>

           </motion.div>
       )
    }
}

export default  BlogDetail
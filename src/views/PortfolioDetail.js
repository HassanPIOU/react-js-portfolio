import React, {useEffect} from "react";
import {useParams, useHistory, Link} from "react-router-dom";
import {motion} from "framer-motion";
import ShareButtons from "../_helpers/ShareButtons";
import Loading from "../components/Loader";
import {useDispatch, useSelector} from "react-redux";
import {getPortfolioDetail} from "../store/actions/infoActions";
import {PORTFOLIO_IMAGE_URL} from "../_helpers/params";
const PortfolioDetail = () => {

    const  slug = useParams().slug

    const dispatch = useDispatch()
    const projectData = useSelector(state => state.project)
    const {loading, error, project} = projectData
    useEffect(() => {
        dispatch(getPortfolioDetail(slug))
    }, [dispatch])


    let history = useHistory();

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

    if (project.statut = "success"){
        const detail = project.information
        const techno = project.techno
        return (
            <motion.div
                initial = {{opacity : 0}}
                animate = {{opacity : 1}}
                exit = {{opacity : 0}}
                transition = {{duration : 0.5}}
            >

                <button className="arrowbackBtn" onClick={GoBack} ><i className='zmdi zmdi-arrow-back'></i> Retour</button>

                <ShareButtons slug={detail.slug} title={detail.title}   type="portfolio" />

                <h1 className="postHeader">PROJECT</h1>
                <h3 className="postHeaderSecond">Portfolio</h3>

                <div className="portfolio-details-area light-bg section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-8">
                                <img src={PORTFOLIO_IMAGE_URL+detail.image} className='img-responsive'  alt="" style={{width : "100%",padding : '20px'}}/>

                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <div className="portfolio-sidebar">

                                    <div className="block-title">
                                        <h3>Titre</h3>
                                    </div>

                                    <h5>{detail.titre}</h5>
                                    <br/>
                                    <br/>

                                    <div className="block-title">
                                        <h3>Description</h3>
                                    </div>
                                    <ul className="project-general-info">
                                        <li><p><i className="fa fa-globe"></i>
                                            <Link to={detail.link}  className="text-info" style={{textTransform : 'lowercase',marginLeft : '10px'}} target="_blank">{detail.link}</Link></p></li>
                                        <li><p><i className="fa fa-calendar"></i> 25 december, 2016</p></li>
                                    </ul>

                                    <p className="text-justify">
                                        {detail.description}
                                    </p>
                                    <br/>
                                    <div className="tags-block">
                                        <div className="block-title">
                                            <h3>Technology</h3>
                                        </div>
                                        <div className="tagsList">
                                            {techno.map((item,k) => <span key={k}> {item.designation}</span>)}

                                            <br/>
                                            <br/>
                                        </div>

                                    </div>

                                    <div className="shareBtn">

                                        <div className="block-title">

                                            <h3 style={{paddingTop : '20px'}}>Customer</h3>
                                        </div>
                                        <p><i className="zmdi zmdi-male text-info"></i> <b style={{textTransform : 'uppercase'}}>{detail.name}</b></p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </motion.div>
        )
    }
    else{

    }
}

export default  PortfolioDetail
import React, {useEffect} from "react";
import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import '../assets/style.css'
import {motion} from "framer-motion";
import {getInfo}  from '../store/actions/infoActions'
import {useDispatch,useSelector} from "react-redux";
import Loading from "../components/Loader";
import CookieConsent, {getCookieConsentValue} from "react-cookie-consent";
import Cookies from "universal-cookie/lib";


const Home = () => {
    const dispatch = useDispatch()
    const InfoData = useSelector(state => state.info)
    const {loading, error, info} = InfoData
    useEffect(() => {
        dispatch(getInfo())
    }, [dispatch])

    if (loading){
        return(<div>
            <Loading/>
        </div>)
    }
     if (error){
         return(<div>{error.message}</div>)
     }

     const setDataOnCookie = (info) => {
         const cookies = new Cookies()
         cookies.set('info',JSON.stringify(info))
     }

     if (info.status == "success"){

         console.log(info.information)
         return (
             <motion.div
                 initial = '{{opacity : 0}}'
                 animate = {{opacity : 1}}
                 exit = {{opacity : 0}}
                 transition = {{duration : 0.5}}
             >
                 <Header home = {info.information.about} />
                 <About about = {info.information.about} />
                 <Experience />
                 <Portfolio work={info.information.work} />
                 <Service services={info.information.service} />
                 <Testimonial />
                 <Blog article={info.information.blog} />
                 <Contact contact={info.information.contact} />
                 <Footer />
                 <CookieConsent
                     debug={false}
                     style={{ background: "#232323", color : "#fff" }}
                     buttonStyle={{  background: "#fff", color: "#232323", fontSize: "13px" }}
                     buttonText="Accept & continue"
                     onAccept={() => {
                         setDataOnCookie(info.information)
                     }}
                 >
                     This website uses cookies in order to offer you the most relevant information. Please accept cookies for optimal performance.</CookieConsent>
             </motion.div>
         )
     }
}

export default Home
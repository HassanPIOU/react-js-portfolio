import React from 'react'
import "../assets/loader.css"
import {motion} from "framer-motion";
const Loading = () => {
    const transitionMotion = {duration : 0.6, ease : [0.6,0.01,-0.05,0.9]}

    return (
       <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={transitionMotion}
        >
            <div id="loaderBody" className="LoaderBalls">
                <div className="LoaderBalls__item"></div>
                <div className="LoaderBalls__item"></div>
                <div className="LoaderBalls__item"></div>
            </div>
       </motion.div>
    )
}

export default Loading
import React from "react";
import Home from "./views/Home";
import BlogDetail from './views/BlogDetail'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Error404 from "./views/Error404";
import PortfolioDetail from "./views/PortfolioDetail";
import ScrollToTop from './_helpers/ScrollToTop'
import {AnimatePresence} from "framer-motion";
import 'react-toastify/dist/ReactToastify.css';
import CvReader from "./views/CvReader";


class App extends React.Component{

    render() {
        return (
            <div className="App">
                <Router>
                    <ScrollToTop />
                    <AnimatePresence initial={false}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/blog/:slug" component={BlogDetail} />
                            <Route path="/portfolio/:slug" component={PortfolioDetail} />
                            <Route path="/cv-reader" component={CvReader} />
                            <Route component={Error404} />
                        </Switch>
                    </AnimatePresence>
                </Router>


            </div>
        );
    }

}

export default App;

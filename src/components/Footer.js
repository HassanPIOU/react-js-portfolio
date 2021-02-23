import React from "react";

const Footer = () => {
    return (
        <footer className="footer bg-color-1 ptb-20">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="left floatleft">
                            <p>Copyright &copy; 2017 <a href="https://themeforest.net/user/regaltheme"
                                                        target="_blank">Regaltheme</a>.</p>
                        </div>
                        <div className="right social-link floatright">
                            <ul className="clearfix">
                                <li><a href="http://www.facebook.com/" target="_blank">Facebook</a></li>
                                <li><a href="http://www.twitter.com/" target="_blank">Twitter</a></li>
                                <li><a href="http://www.linkedin.com/" target="_blank">Linkden</a></li>
                                <li><a href="mailto:regaltheme@gmail.com" target="_blank">Email</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
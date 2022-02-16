import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer () {
    return (
        <footer id="footer">
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-info">
                            <h3 className="footer_heading brand">Campaign</h3>
                            <p className="motto">Online campaign.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 footer_links">
                            <h4 className="footer_heading">Quick Links</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="#">Products</Link></li>
                                <li><Link to="#">About Us</Link></li>
                                <li><Link to="#">Enquiry</Link></li>
                                <li><Link to="#">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4 className="footer_heading">Follow Us</h4>
                            <ul>
                                <li>
                                    <Link to="#" className="twitter" target="_blank">
                                        <FontAwesomeIcon icon = {["fab","twitter"]} className="socialIcons"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="facebook" target="_blank">
                                        <FontAwesomeIcon icon = {["fab","facebook-f"]} className="socialIcons"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="instagram" target="_blank">
                                        <FontAwesomeIcon icon = {["fab","instagram"]} className="socialIcons"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="google-plus" target="_blank">
                                        <FontAwesomeIcon icon = {["fab","google-plus-g"]} className="socialIcons"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="linkeddin" target="_blank">
                                        <FontAwesomeIcon icon = {["fab","linkedin-in"]} className="socialIcons"/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer_newsletter">
                            <h4 className="footer_heading">Our Newsletter</h4>
                            <p >Get latest posts, best deals and any other relevant information.</p>
                            <form action="" method="post">
                                <input type="email" name="email" placeholder="your email address" required />
                                <input type="submit" value="Subscribe" className="btn" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <p className="copyright text-muted">Copyright &copy; campaign.com 2021.</p>
        </footer>
    )
}
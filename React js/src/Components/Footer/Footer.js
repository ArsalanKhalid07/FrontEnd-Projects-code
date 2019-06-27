import React, {Component} from 'react';
import '../Footer/FooterStyle.css';
import '../Footer/FooterMediaQuery.css';
import logo from '../images/logo.png';

class Footer extends Component{
    render(){
        return(
            <div>
                <FooterUpper/>
                <FooterCopyRight/>
            </div>
        )
    }
}

export class FooterUpper extends Component {
    render() {
        return(
            <div className="footer_upper">
                 <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12">
                            <div className="footer_colume1">
                                <img src={logo} className="footer_colume1-img img-fluid"  alt="logo"></img>
                                <p className="footer_colume1-p1"><i  className="fa fa-paper-plane"></i>Address : 44 New Design Street,
                                <span>Melbourne 005</span>
                                </p>
                                <p className="footer_colume1-p2"><i className="fa fa-phone"></i>Phone : (01) 800 433 633</p>
                                <p className="footer_colume1-p3"><i  className="fa fa-envelope"></i>Email : info@Example.com</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-12">
                            <div className="footer_colume2">
                                <ul className="useful_links list-unstyled">
                                    <p><span>USEF</span>ULL LINKS</p>
                                    <li>Home</li>
                                    <li>About us</li>
                                    <li>Shop</li>
                                    <li>Blog</li>
                                    <li>Exhibition</li>
                                    <li>Hajj and Omrah</li>
                                    <li>FAQ</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-12" >
                            <div className="footer_colume2">
                                <ul className="useful_links list-unstyled">
                                    <p><span>OUR</span> PRODUCTS</p>
                                    <li>Bee products</li>
                                    <li>Honey products</li>
                                    <li>Herbs (Tea)</li>
                                    <li>Skin and Hair Care</li>
                                    <li>Gift Items</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12">
                            <div className="footer_colume4 ">
                                <ul className="useful_links list-unstyled">
                                    <p><span>Open </span>Opening Hours</p>
                                    <li>Mon — Fri  ........................ 9:00 am - 23:00 pm</li>
                                    <li>Saturday ........................  10:00 am - 22:00 pm</li>
                                    <li>Sunday   .........................   10:00 am - 21:00 pm</li>
                                    <li>Note: Arctica shop is closed on holidays.</li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>          
                 </div>
            </div>
        )
    }
}

export const FooterCopyRight = () => {
    return(
          <div className="copyright_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="copyright_para">Copyrights © 2017  All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
          </div>  
    )
}

export default Footer;
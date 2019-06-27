import React, {Component} from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';
import './HeaderStyle.css';
import './HeaderMediaQuery.css';

 class Header extends Component {
    render() {
        return (
            <div>
                <HeaderUpper/>
                <Navbar/>
                <HeaderCoverImg/>
                
            </div>
        )
    }
}

export class HeaderUpper extends Component {
    render() {
        return(
           <div className="header_upper">
               <div className="header_bar">
                </div>
                 <div className="header_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-8 col-12">
                                <div className="header_email-left">
                                    <div className="header_email-1">
                                        <i className="header_email-icon fa fa-globe"></i>
                                        <p className="header_email-text">Languages:<span >English</span></p>
                                        <i className="header_email-button fa fa-angle-down"></i>
                                    </div>
                                    <div className="header_email-2">
                                        <i className="header_email-icon fa fa-phone"></i>
                                        <p className="header_email-text">Call us:<span > 1.777.777.777</span></p>
                                    </div>
                                    <div className="header_email-3">
                                        <i className="header_email-icon fa fa-envelope"></i>
                                        <p className="header_email-text">hello@thefox.com.vn</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-12">
                                <div className="header_upper-buttons">
                                    <button className="header_upper-register"><Link to="/Register">REGISTER</Link></button>
                                    <button className="header_upper-signIn"><Link to="/SignIn">SignIn</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )

   }
}

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
        collapsed: true,
        };
        }
        toggleNavbar() {
        this.setState({
        collapsed: !this.state.collapsed,
        });
        }
    render(){
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <div className="logo">
                <div className="container">
                    <div className="row">
                         <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5">
                              <img className="logo_img img-fluid" src={logo} alt="logo"></img>  
                         </div>
                         <div className="col-xl-10 col-lg-10 col-md-9 col-sm-8 col-7">
                            <nav className="myNavBar navbar-expand-xl" >
                                <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="fa fa-align-justify" />
                                </button>
                                <div className={`${classOne}`} id="navbarResponsive">
                                    <ul className="list list-unstyled ">
                                        <li><Link to='/'>HOME</Link></li>
                                        <li><Link to='/About'>ABOUT US</Link></li>
                                        <li><Link to='#'></Link>SHOP</li>
                                        <li><Link to='#'></Link>BLOG</li>
                                        <li><Link to='#'></Link>EXHIBITION</li>
                                        <li><Link to='#'></Link>HAJJ AND OMRAH</li>
                                        <li><Link to='#'></Link>FAQ</li>
                                        <li><Link to='#'></Link>CONTACT</li>
                                        <li><i className="fa fa-search"></i></li>
                                        <li><i className="fa fa-shopping-cart"></i></li>
                                    </ul>
                                </div>
                            </nav>
                         </div>
                    </div>
                </div>
            </div>
        )
    }
}

export class HeaderCoverImg extends Component {
    render(){
        return(
            <div className="cover_img">
                <div className="container">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="img_content">
                                <h1 className="img_content-mhead">Honey's Natural Benefits </h1>
                                <h1 className="img_content-shead"> Honey has a multitude of benefits</h1>
                                <button className="img_content-button">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Header;
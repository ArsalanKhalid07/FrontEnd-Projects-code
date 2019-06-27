import React, {Component} from 'react';
import Header from '../Header/Header';
import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import pic4 from '../images/pic4.png';
import pic5 from '../images/pic5.png';
import pic6 from '../images/pic6.png';
import section2 from '../images/section2.png';
import Footer from '../Footer/Footer';
import './HomeStyle.css';
import './HomeMediaQuery.css';


class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Section1/>
                <Section2/>
                <Section3/>
                <Footer/>
            </div>
        )
    }
}

class Section1 extends Component {
    render(){
        return(
                <section className="section-1">
                   <div className="row_1">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-12" >
                                    <div className="products">
                                        <h1 className="product_heading"><span className="product_heading-1">Our Products</span><span className="product_heading-2">Collection</span></h1>
                                        <p className="product_para">Riad Al-Masri Est. for Industry and Trade (Al-Malaki Royal) , is considered among the
                                         most important leader companies in the Arab World which entered beehive products 
                                         such as honey & queen bees food & beeswax & Propolis in the Food & Plastic and 
                                         health industries.</p>
                                        <button className="product_button">View all</button>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="product_1-img">
                                         <img src={pic1} alt="pic1" className="img-fluid"></img>   
                                    </div>   
                                    <div className="product_1-content">
                                        <h4>Chose The </h4>
                                        <h1>Bee Products</h1>
                                     </div>   
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-6 col-12">
                                    <div className="product_1-img">
                                         <img src={pic2} alt="pic1" className="img-fluid"></img>   
                                    </div>
                                    <div className="product_1-content">
                                        <h4>Chose The </h4>
                                        <h1>Bee Products</h1>
                                     </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row_2">
                        <div className="container"> 
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product_1-img">
                                 <img src={pic4} alt="pic1" className="img-fluid"></img>   
                            </div>
                            <div className="product_1-content">
                                <h4>Chose The </h4>
                                <h1>Bee Products</h1>
                            </div>   
                        </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product_1-img">
                                 <img src={pic5} alt="pic1" className="img-fluid"></img>   
                            </div>
                            <div className="product_1-content">
                                <h4>Chose The </h4>
                                <h1>Bee Products</h1>
                            </div>   
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-6 col-12">
                            <div className="product_1-img">
                                 <img src={pic6} alt="pic1" className="img-fluid"></img>   
                            </div>
                            <div className="product_1-content">
                                <h4>Chose The </h4>
                                <h1>Bee Products</h1>
                            </div>   
                        </div>  
                            </div>
                        </div>
                    </div>
                
                </section>
        )
    }
}

export class Section2 extends Component {
    render() {
        return(
            <div className="section-2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div className="section_2-img">
                                <img src={section2} className="img-fluid"></img>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div className="section2_content">
                                 <h2 className="section2_content-h2">Natural Honey</h2>
                                 <h3 className="section2_content-h3">Get To Know About Us</h3>
                                 <p className="section2_content-p1">Riad Al-Masri Est. for Industry and 
                                 Trade (Al-Malaki Royal) , is considered among the most important leader 
                                 companies in the Arab World which entered beehive products 
                                 such as honey & queen bees food & beeswax & Propolis in the 
                                 Food & Plastic and health industries.</p>
                                 <p className="section2_content-p2">Since more than 23 years . The company deals 
                                     with bees and its products , during such period, it achieved great remarkable success .The company is producing its products relying on scientific researches and high
                            qualifications, Riad Al-Masri Est. for
                                    Industry and Trade (Al-Malaki Royal) , is considered ...</p>
                                    <a className="section2_content-link" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export class Section3 extends Component {
    render(){
        return (
            <div className="section-3">
                <div className="container">
                    <div className="row">
                         <div className="col-12 ">
                            <div className="section3_content">
                                <i className="fa fa-quote-left"></i>
                                <p className="section3_para">“ We enjoy sharing the projects and posts we make just
                                 as much as we enjoy creating them.
 consectetur adipiscing elit, sed do eiusmod tempor incididunt Sit back & take a
  moment to browse through some of our recent completed work.”</p>
                                <p className="section3_nam">- Stevan Smith,</p>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        )
    }
}


export default Home;
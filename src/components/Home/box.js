import React, { useState } from 'react'
import './Navbar1.css'
import { Fade, Zoom } from 'react-reveal';
import { Button, Col, Image, Modal } from 'react-bootstrap';
import { NoEncryption } from '@material-ui/icons';



export default function Box() {



    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <div >
            {/* Consulting Services */}
            <div className="consultingcenter">
                <p><b>Consulting Services</b></p>
            </div>
            {/* 3 Box */}
            
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <Fade left>
                            <div >
                                <div id="flip" className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                            <h4>IN PERSON <br /> CONSULATION</h4>
                                            <p>

                                            </p>
                                        </div>

                                        <div className="flip-box-back">
                                            <h2>Back Side</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade >
                    </div>
                    <div className="col-sm-4">
                        <Fade top>
                            <div>
                                <div id="flip" className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                            <h4>ONE-LINE <br /> CONSULATION</h4>
                                        </div>
                                        <div className="flip-box-back">
                                            <h2>Back Side</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade >
                    </div>
                    <div class="col-sm-4">
                        <Fade right>
                            <div >
                                <div id="flip" class="flip-box">
                                    <div class="flip-box-inner">
                                        <div class="flip-box-front">
                                            <h4>DESIGN ROOM</h4>
                                        </div>
                                        <div class="flip-box-back">
                                            <h2>Back Side</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade >
                    </div>
                </div>
            </div>

            {/*COUSTOMIZED SOLUTION  */}
            <br />
            <br />
            
            <div class="flex-container">
                <div class="flex-item-left">
                    <Fade left>
                        <div className="text-center">
                            <br />
                            <br />
                            <h1 >COUSTOMIZED SOLUTION</h1>
                            <br />
                            <p>We understant every customer with their own test and requirment</p>
                            <p>We are here help you understood what works best for you hom <br /> & find design solution as per your need</p>
                            <Button variant="primary" size="lg" active>
                                SHOP NOW
                            </Button>
                        </div>
                    </Fade>
                </div>
                <div class="flex-item-right">
                    <img src="https://i.dell.com/sites/imagecontent/products/PublishingImages/inspiron-15-3000-laptops/laptop-inspiron-15-3000-series-pdp-pol_hero_bk_gy_intel_US_LATAM.jpg"
                        class="img-fluid" alt="Responsive image" />
                </div>
            </div>
          
            {/*COUSTOMIZED SOLUTION  */}
            {/* PAPULAR COLLECTION */}

            <div className="center" >
                <p class="p-3 border"><b>PAPULAR COLLECTION</b></p>
            </div>

            {/* Flip Card 1 2 3 */}

            <div className="row d-flex justify-content-around">
                {/* First Card */}
                <div className="column" >
                    <div className="container card">
                        <img src="https://images.all-free-download.com/images/graphicthumb/ford_mustang_car_215784.jpg" />
                        <div className="overla">
                            <div className="text" id="text">My name is Faiz</div>
                        </div>
                        <div className="overlay">
                            <div className="text">My name is Faiz e Raza</div>
                        </div>
                    </div>
                </div>

                {/* 2nd Card */}
                <div className="column" >
                    <div className="container card">
                        <img src="https://images.all-free-download.com/images/graphicthumb/ford_mustang_car_215784.jpg" />
                        <div className="overla">
                            <div className="text" id="text">My name is Faiz</div>
                        </div>
                        <div className="overlay">
                            <div className="text">My name is Faiz e Raza</div>
                        </div>
                    </div>
                </div>
                {/* 3rd Colum */}
                <div className="column" >
                    <div className="container card">
                        <img src="https://images.all-free-download.com/images/graphicthumb/ford_mustang_car_215784.jpg" />
                        <div className="overla">
                            <div className="text" id="text">My name is Faiz</div>
                        </div>
                        <div className="overlay">
                            <div className="text">My name is Faiz e Raza</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Flip Card 1 2 3 */}

            {/* What CLIENT ARE SAYING.... */}
            <div className="WhatClients" >
                <p className="p-3 "><b>WHAT CLIENTS ARE SAYING....</b></p>
            </div>

            <div>

                {/* 4mainCard */}
                <div className="row">
                    {/* First Card MAin*/}
                    <div class="col-sm-2"></div>
                    <div class="col-sm-4" id="maincard">
                        <Fade left>
                            <div id="cardimg">
                                <img src="https://thumbs.dreamstime.com/b/profile-photo-placeholder-icon-design-vector-illustration-206572730.jpg" id="maincardimg" />
                            </div>
                            <div id="maintext">
                                <p><b>I,m obsessed with the Mineral Bronzer<br />
                                    by Alima pure. This stuff brings out <br />
                                    cheakbones I never Knew I had!<br /><br />
                                    Jessica Smith</b>
                                </p>
                            </div>
                        </Fade>
                    </div>

                    {/* 2nd Card  Main*/}

                    <div class="col-sm-4" id="maincard">
                        <Fade right>
                            <div id="cardimg">
                                <img src="https://thumbs.dreamstime.com/b/profile-photo-placeholder-icon-design-vector-illustration-206572730.jpg" id="maincardimg" />
                            </div>
                            <div id="maintext">
                                <p><b>I,m obsessed with the Mineral Bronzer<br />
                                    by Alima pure. This stuff brings out <br />
                                    cheakbones I never Knew I had!<br /><br />
                                    Jessica Smith</b>
                                </p>
                            </div>
                        </Fade>
                    </div>
                    <div class="col-sm-2"></div>
                </div>

                <div className="row">
                    {/* 3rd Card Main */}
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4" id="maincard">
                        <Fade left>
                            <div id="cardimg">
                                <img src="https://thumbs.dreamstime.com/b/profile-photo-placeholder-icon-design-vector-illustration-206572730.jpg" id="maincardimg" />
                            </div>
                            <div id="maintext">
                                <p><b>I,m obsessed with the Mineral Bronzer<br />
                                    by Alima pure. This stuff brings out <br />
                                    cheakbones I never Knew I had!<br /><br />
                                    Jessica Smith</b>
                                </p>
                            </div>
                        </Fade>
                    </div>

                    {/* 4nd Card Main */}
                    <div className="col-sm-4" id="maincard">
                        <Fade right>
                            <div id="cardimg">
                                <img src="https://thumbs.dreamstime.com/b/profile-photo-placeholder-icon-design-vector-illustration-206572730.jpg" id="maincardimg" />
                            </div>
                            <div id="maintext">
                                <p><b>I,m obsessed with the Mineral Bronzer<br />
                                    by Alima pure. This stuff brings out <br />
                                    cheakbones I never Knew I had!<br /><br />
                                    Jessica Smith</b>
                                </p>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
            {/* 4mainCard */}

            {/* Footer */}

            <div id="footer">

                <footer class="page-footer font-small indigo">

                    <div class="container text-center text-md-left">

                        <div class="row">

                            <div class="col-md-3 mx-auto">

                                <h5 class="font-weight-bold text-uppercase mt-3 mb-4 text-dark" size="lg">Logo</h5>
                            </div>
                            <hr class="clearfix w-100 d-md-none" />
                            <div class="col-md-3 mx-auto">
                                <h5 class="font-weight-bold text-uppercase mt-3 mb-4 text-white" id="foooterliHome">Home</h5>

                                <ul class="list-unstyled">

                                    <li id="foooterliHome"><b>ABOUT US</b></li>
                                    <br />
                                    <li id="foooterliHome"><b>PRODUCTS</b></li>
                                    <br />
                                    <li id="foooterliHome"><b>DRESSING ROOM</b></li>
                                    <br />
                                    <li id="foooterliHome"><b>DIA ZONE</b></li>
                                    <br />
                                    <li id="foooterliHome"><b>CONTACT US</b></li>
                                </ul>
                            </div>
                            <hr class="clearfix w-100 d-md-none" />
                            <div class="col-md-3 mx-auto">
                                {/* <!-- Links --> */}
                                <h5 class="font-weight-bold text-uppercase mt-3 mb-4 text-white" id="footerpolicy">PolicY</h5>

                                <ul class="list-unstyled">
                                    <li id="footerpolicy"><b>Team of Usage</b></li>
                                    <br />
                                    <br />
                                    <li id="footerpolicy"><b>Privacy Policy</b></li>
                                </ul>

                            </div>
                            <hr class="clearfix w-100 d-md-none" />
                            <div class="col-md-3 mx-auto">
                                <h5 class="font-weight-bold text-uppercase mt-3 mb-4 text-white" id="footerfollow">FOllow US ON</h5>

                                <ul class="list-unstyled">
                                    <li id="footerfollow">
                                        <i class="fab fa-facebook-f fa-lg white-text mr-3 fa-2x"> </i>
                                        <i class="fab fa-twitter fa-lg white-text  mr-3 fa-2x"> </i>
                                        <i class="fab fa-instagram fa-lg white-text mr-3 fa-2x"> </i>
                                    </li>

                                    <br />
                                    <li id="footerfollow">
                                        <i class="fab fa-cc-mastercard mr-3 fa-2x text-white"></i>
                                        <i class="fab fa-cc-visa mr-3 fa-2x text-white"></i>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                    <div class="footer-copyright text-center py-3">© Faizeraza2468:
                    </div>
                </footer>

            </div>
            {/* <!-- Footer --> */}

        </div>
    )
}

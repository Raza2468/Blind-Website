import React from 'react'
import './Navbar1.css'
import { Fade, Zoom } from 'react-reveal';
import { Button, Col, Image } from 'react-bootstrap';



export default function Box() {

    function bigImg(x) {
        x.style.height = "64px";
        x.style.width = "64px";
    }

    function normalImg(x) {
        x.style.height = "32px";
        x.style.width = "32px";
    }

    return (
        <div >
            {/* Consulting Services */}
            <div class="consultingcenter">
                <p><b>Consulting Services</b></p>
            </div>
            {/* 3 Box */}
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <Fade left>
                            <div >
                                <div id="flip" class="flip-box">
                                    <div class="flip-box-inner">
                                        <div class="flip-box-front">
                                            <h4>IN PERSON <br /> CONSULATION</h4>
                                            <p>

                                            </p>
                                        </div>

                                        <div class="flip-box-back">
                                            <h2>Back Side</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade >
                    </div>
                    <div class="col-sm-4">
                        <Fade top>
                            <div>
                                <div id="flip" class="flip-box">
                                    <div class="flip-box-inner">
                                        <div class="flip-box-front">
                                            <h4>ONE-LINE <br /> CONSULATION</h4>
                                        </div>
                                        <div class="flip-box-back">
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

            {/* PAPULAR COLLECTION */}

            <div class="center" >
                <p class="p-3 border"><b>PAPULAR COLLECTION</b></p>
            </div>

            <div class="row d-flex justify-content-around">
                {/* First Card */}

                <div class="column" >
                    <div class="container card">
                        <img src="https://images.all-free-download.com/images/graphicthumb/ford_mustang_car_215784.jpg" />
                        <div class="overla">
                            <div class="text" id="text">My name is Faiz</div>
                        </div>
                        <div class="overlay">
                            <div class="text">My name is Faiz e Raza</div>
                        </div>
                    </div>
                </div>

                {/* 2nd Card */}
                <div class="column" >
                    <div class="container card">
                        <img src="https://images.all-free-download.com/images/graphicthumb/ford_mustang_car_215784.jpg" />
                        <div class="overla">
                            <div class="text" id="text">My name is Faiz</div>
                        </div>
                        <div class="overlay">
                            <div class="text">My name is Faiz e Raza</div>
                        </div>
                    </div>
                </div>
                {/* 3rd Colum */}
                <div class="column" >
                    <div class="container card">
                        <img src="https://images.all-free-download.com/images/graphicthumb/ford_mustang_car_215784.jpg" />
                        <div class="overla">
                            <div class="text" id="text">My name is Faiz</div>
                        </div>
                        <div class="overlay">
                            <div class="text">My name is Faiz e Raza</div>
                        </div>
                    </div>
                </div>



            </div>

            {/* What CLIENT ARE SAYING.... */}
            <div class="WhatClients" >
                <p class="p-3 "><b>WHAT CLIENTS ARE SAYING....</b></p>
            </div>

            <div>
                <div class="row">
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

                <div class="row">
                    {/* 3rd Card Main */}
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

                    {/* 4nd Card Main */}

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
            </div>
            {/* Footer */}
            <div>
                {/* <!-- Footer --> */}
                <footer class="page-footer font-small indigo">

                    {/* <!-- Footer Links --> */}
                    <div class="container text-center text-md-left">

                        {/* <!-- Grid row --> */}
                        <div class="row">

                            {/* <!-- Grid column --> */}
                            <div class="col-md-3 mx-auto">

                                {/* <!-- Links --> */}
                                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Logo</h5>

                            </div>
                            {/* <!-- Grid column --> */}

                            <hr class="clearfix w-100 d-md-none" />

                            {/* <!-- Grid column --> */}
                            <div class="col-md-3 mx-auto">

                                {/* <!-- Links --> */}
                                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Home</h5>

                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 4</a>
                                    </li>
                                </ul>

                            </div>
                            {/* <!-- Grid column --> */}

                            <hr class="clearfix w-100 d-md-none" />

                            {/* <!-- Grid column --> */}
                            <div class="col-md-3 mx-auto">

                                {/* <!-- Links --> */}
                                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">PolicY</h5>

                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 4</a>
                                    </li>
                                </ul>

                            </div>
                            {/* <!-- Grid column --> */}

                            <hr class="clearfix w-100 d-md-none" />

                            {/* <!-- Grid column --> */}
                            <div class="col-md-3 mx-auto">

                                {/* <!-- Links --> */}
                                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">FOllow US ON</h5>

                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 4</a>
                                    </li>
                                </ul>

                            </div>
                            {/* <!-- Grid column --> */}

                        </div>
                        {/* <!-- Grid row --> */}

                    </div>
                    {/* <!-- Footer Links -->
                    // https://bbbootstrap.com/snippets/footer-template-social-media-icons-14199861

                                <!-- Copyright --> */}
                    <div class="footer-copyright text-center py-3">© Faizeraza2468:
                        {/* <a href="https://mdbootstrap.com/"> MDBootstrap.com</a> */}
                    </div>
                    {/* <!-- Copyright --> */}

                </footer>
                {/* <!-- Footer --> */}
            </div>

        </div>
    )
}

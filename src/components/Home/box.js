import React from 'react'
import './Navbar1.css'
import Fade from 'react-reveal';
import { Button } from 'react-bootstrap';



export default function Box() {
    const img = {

    }

    return (
        <div >
            <div class="center">
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

            <br />
            <br />
            <div class="flex-container">
                <div class="flex-item-left">
                    {/* <div id="colleft" class="col-6 col-md-5"> */}
                <Fade left>
                    <div className="text-center">
                        <br />
                        <br />
                        <h1 >COUSTOMIZED SOLUTION</h1>
                        <br />
                        <p>We understant every customer with their own test and requirment</p>
                        <p>We are here help you understood what works best for you hom <br/> & find design solution as per your need</p>
                        <Button variant="primary" size="lg" active>
                            SHOP NOW
                        </Button>
                    </div>
                </Fade>
                </div>
                {/* </div> */}

                <div class="flex-item-right">
                <img src="https://i.dell.com/sites/imagecontent/products/PublishingImages/inspiron-15-3000-laptops/laptop-inspiron-15-3000-series-pdp-pol_hero_bk_gy_intel_US_LATAM.jpg"
                 class="img-fluid" alt="Responsive image"/>
                </div>
            </div>

        </div>
    )
}

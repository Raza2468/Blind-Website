import React from 'react'
import { Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './Navbar1.css'


export default function Slide() {



    return (
        <div>

            {/* <!-- Carousel wrapper --> */}
            <div
                id="carouselDarkVariant"
                className="carousel slide carousel-fade carousel-dark"
                data-mdb-ride="carousel"
            >
                {/* <!-- Indicators --> */}
                <div className="carousel-indicators">
                    <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to="1"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to="2"
                        aria-label="Slide 1"
                    ></button>
                </div>

                {/* <!-- Inner --> */}
                <div className="carousel-inner">
                    {/* <!-- Single item --> */}
                    <div className="carousel-item active">

                        <img
                            src="https://customadeblinds.ca/app-assets/images/slider/slider1.png"
                            className="d-block w-100"
                            alt="..."
                            height="600px"
                        />

                        <div className="top-left">
                            <Fade left>
                                <h1>THE <span className="largestRang">LARGEST RANGE</span><br />
                                    <span className="ofBlind"> OF <span className="blind"> BLIND </span></span>
                                </h1>

                                <Button id="slidButton" size="lg" active>
                                    SHOP NOW
                                </Button>
                            </Fade>
                        </div>

                    </div>

                    {/* <!-- Single item --> */}

                    <div className="carousel-item">
                        <img
                            src="https://www.executiveblinds.co.za/wp-content/uploads/2019/07/3-1024x683.jpg"
                            className="d-block w-100"
                            alt="..." height="600px"
                        />
                        <div className="top-left">
                            <Fade left>
                                <h1>THE <span className="largestRang">LARGEST RANGE</span><br />
                                    <span className="ofBlind"> OF <span className="blind"> BLIND </span></span>
                                </h1>
                                <Button id="slidButton" size="lg" active>
                                    SHOP NOW
                                </Button>
                            </Fade>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item">
                        <img
                            src="https://content.fortune.com/wp-content/uploads/2020/05/F500-2020-004-Apple.jpg"
                            className="d-block w-100"
                            alt="..." height="600px"
                        />
                        <div className="top-left">
                            <Fade left>
                                <h1>THE <span className="largestRang">LARGEST RANGE</span><br />
                                    <span className="ofBlind"> OF <span className="blind"> BLIND </span></span>
                                </h1>
                                <Button id="slidButton" size="lg" active>
                                    SHOP NOW
                                </Button>
                            </Fade>
                        </div>
                    </div>
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                {/* <button
                    class="carousel-control-next"
                    type="button"
                    data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button> */}
            </div>
            {/* <!-- Carousel wrapper --> */}
        </div>
    )
}

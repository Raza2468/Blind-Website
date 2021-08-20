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
                class="carousel slide carousel-fade carousel-dark"
                data-mdb-ride="carousel"
            >
                {/* <!-- Indicators --> */}
                <div class="carousel-indicators">
                    <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to="0"
                        class="active"
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
                <div class="carousel-inner">
                    {/* <!-- Single item --> */}
                    <div class="carousel-item active">

                        <img
                            src="https://customadeblinds.ca/app-assets/images/slider/slider1.png"
                            class="d-block w-100"
                            alt="..."
                            height="600px"
                        />

                        <div class="top-left">
                            <Fade left>
                                <h1>THE <span class="largestRang">LARGEST RANGE</span><br />
                                    <span class="ofBlind"> OF <span class="blind"> BLIND </span></span>
                                </h1>

                                <Button variant="primary" size="lg" active>
                                    SHOP NOW
                                </Button>
                            </Fade>
                        </div>

                    </div>

                    {/* <!-- Single item --> */}

                    <div class="carousel-item">
                        <img
                            src="https://media.wired.com/photos/6081f4280c9b5877078878e2/16:9/w_2399,h_1349,c_limit/business_plaintext_apple_1313768378.jpg"
                            class="d-block w-100"
                            alt="..." height="600px"
                        />
                        <div class="top-left">
                            <Fade left>
                                <h1>THE <span class="largestRang">LARGEST RANGE</span><br />
                                    <span class="ofBlind"> OF <span class="blind"> BLIND </span></span>
                                </h1>
                                <Button variant="primary" size="lg" active>
                                    SHOP NOW
                                </Button>
                            </Fade>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div class="carousel-item">
                        <img
                            src="https://content.fortune.com/wp-content/uploads/2020/05/F500-2020-004-Apple.jpg"
                            class="d-block w-100"
                            alt="..." height="600px"
                        />
                        <div class="top-left">
                            <Fade left>
                                <h1>THE <span class="largestRang">LARGEST RANGE</span><br />
                                    <span class="ofBlind"> OF <span class="blind"> BLIND </span></span>
                                </h1>
                                <Button variant="primary" size="lg" active>
                                    SHOP NOW
                                </Button>
                            </Fade>
                        </div>
                    </div>
                </div>

                <button
                    class="carousel-control-prev"
                    type="button"
                    data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
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

import React from 'react'
import './Navbar1.css'
import Fade  from 'react-reveal';
export default function Box() {
    return (
        <div>



            <div class="center">
                <p>Sonsulting. Services</p>
            </div>
            <div>
                <Fade right>
                    <div id="centerBox">

                    {/* <h1>React Reveal</h1> */}
                    <div class="flip-box">
                        <div class="flip-box-inner">
                            <div class="flip-box-front">
                                <h2>Front Side</h2>
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
    )
}

import React from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from '../Asset/Beers/marcos-paulo-prado-quJRa2cd8ew-unsplash.jpg'
import img2 from '../Asset/Beers/bar-209148_1280.jpg'
import img3 from '../Asset/Beers/stella-de-smit-nCxCBnK6UKQ-unsplash.jpg'
import img4 from '../Asset/Beers/mojor-zhu-xVdlIl-Dr30-unsplash.jpg'
import img5 from '../Asset/Beers/marcel-mccarthy-m-O2Bd-8AAg-unsplash.jpg'
import img6 from '../Asset/Beers/jan-kopriva-mkfilKm7XrU-unsplash.jpg'

import './Slide.css'
export default function Slider() {
    const proprietes = {
        duration: 4000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        // pauseOnHover: true,
    }
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={img6} alt="img1" />
                    </div>
                    <p>In Beer We Trust</p>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img5} alt="img2" />
                    </div>
                    <p>In Beer We Trust</p>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img4} alt="img3" />
                    </div>
                    <p>In Beer We Trust</p>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img3" />
                    </div>
                    <p>In Beer We Trust</p>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img1} alt="img3" />
                    </div>
                    <p>In Beer We Trust</p>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                    </div>
                    <p>In Beer We Trust</p>
                </div>
            </Slide>
        </div>
    )
}

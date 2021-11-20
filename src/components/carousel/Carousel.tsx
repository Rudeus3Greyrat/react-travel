import React from "react";
import {Carousel as AntCarousel} from "antd";
import styles from './Carousel.module.css'
import CarouselImg1 from '../../assets/images/carousel_1.jpg'
import CarouselImg2 from '../../assets/images/carousel_2.jpg'
import CarouselImg3 from '../../assets/images/carousel_3.jpg'

export const Carousel:React.FC=(props)=>{
    return (
        <AntCarousel autoplay={true} className={styles.slider}>
            <img src={CarouselImg1} alt=""/>
            <img src={CarouselImg2} alt=""/>
            <img src={CarouselImg3} alt=""/>
        </AntCarousel>
    )
}

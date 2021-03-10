import React from 'react'
import {Carousel, Card, Button} from 'react-bootstrap'
import promotion1 from "../img/promotion1.jpg"
import promotion2 from "../img/promotion2.jpg"
import promotion3 from "../img/promotion3.jpg"

const PromotionalSection = () => {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    src={promotion1}
                    alt="First slide"
                    style={{height:"500px", width:"100%"}}
                />
                <Carousel.Caption>
                <h3>Shop Electronics</h3>
                <p>Explore our electonic products you can trust</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    src={promotion2}
                    alt="Second slide"
                    style={{height:"500px", width:"100%"}}
                />
                <Carousel.Caption>
                    <h3>Shop Computers</h3>
                    <p>Discover our computer products today</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    src={promotion3}
                    alt="Third slide"
                    style={{height:"500px", width:"100%"}}
                />
                <Carousel.Caption>
                    <h3>Shop Home</h3>
                    <p>Discover our home products today</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default PromotionalSection

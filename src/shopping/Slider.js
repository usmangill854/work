import {Carousel} from "react-bootstrap";
import React from "react";

const Slider=()=>{
    return<div  >

        <Carousel style={{
            height: "399px"
        }} >
            <Carousel.Item  >
                <img
                    className="d-block w-1000             "
                    src="https://www.globalbrandsmagazine.com/wp-content/uploads/2020/08/Top-10-Mobile-Brands-in-World-1-1.jpg"
                    alt="First slide"
                    style={{
                        height: "399px"
                    }}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img style={{
                    height: "399px"
                }}
                    className="d-block w-100  "
                    src="https://www.godigit.com/content/dam/godigit/directportal/en/website-images/mobile-phone.jpg"
                    alt="Second slide"

                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  >
                <img style={{
                    height: "399px"
                }}
                    className="d-block w-100  "
                    src="https://techcrunch.com/wp-content/uploads/2020/12/nokia-laptop.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
}
export default Slider;
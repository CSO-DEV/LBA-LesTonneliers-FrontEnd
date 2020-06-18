/*
 * Carrousel Page1 et Page2
 */

import React, { Component } from "react";
import "./styleCarrouselPage1.css";
import { Carousel } from "react-bootstrap";

class CarrouselPage1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="carousel">
        <Carousel interval={null}>
          <Carousel.Item>
            <img
              id="imgCarousel"
              className="d-block w-100 propsImg1"
              alt="picture1"
              src={this.props.propsImg1}
            />
            <Carousel.Caption className="classCaption propsCaption">
              {this.props.propsCaption}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="imgCarousel"
              className="d-block w-100  propsImg2"
              alt="picture2"
              src={this.props.propsImg2}
            />
            <Carousel.Caption className="classCaption propsCaption">
              {this.props.propsCaption}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="imgCarousel"
              className="d-block w-100  propsImg3"
              alt="picture3"
              src={this.props.propsImg3}
            />
            <Carousel.Caption className="classCaption propsCaption">
              {this.props.propsCaption}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarrouselPage1;

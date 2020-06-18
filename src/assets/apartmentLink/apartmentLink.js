/*
 * Affichage des images autres appartemements Page 2
 * A finir : voir à améliorer la récupération des données + affichage des logos du pied de page
 */

import React, { Component } from "react";
import "./apartmentLink.css";
import { Row, Col } from "react-bootstrap";

class apartmentLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAppartement1: { nomApp: "", imgApp: [] },
      dataAppartement2: { nomApp: "", imgApp: [] },
      dataAppartement3: { nomApp: "", imgApp: [] },
      dataAppartement4: { nomApp: "", imgApp: [] },
    };
  }

  // Appel aux données
  componentDidMount() {
    //le 1er affichage de la page
    this.getAppartement();
  }

  getAppartement = () => {
    const options = {
      method: "GET",
      headers: { "Content-type": "application/json" },
      mode: "cors",
    };
    fetch("http://localhost:8080/appartement/autresAppartement", options)
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({ dataAppartement1: data[0] });
          this.setState({ dataAppartement2: data[1] });
          this.setState({ dataAppartement3: data[2] });
          this.setState({ dataAppartement4: data[3] });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <div className="apartmentlink_content">
        <Row className="img_apartment">
          <Col className="img_cortoncharlemagne">
            <a href={"/page2/" + this.state.dataAppartement1._id}>
              <img src={this.state.dataAppartement1.imgApp[0]} alt="image" />
              <h4>{this.state.dataAppartement1.nomApp}</h4>
            </a>
          </Col>
          <Col className="img_montrachet">
            <a href={"/page2/" + this.state.dataAppartement2._id}>
              <img src={this.state.dataAppartement2.imgApp[1]} alt="image" />
              <h4>{this.state.dataAppartement2.nomApp}</h4>
            </a>
          </Col>
          <Col className="img_closdenis">
            <a href={"/page2/" + this.state.dataAppartement3._id}>
              <img src={this.state.dataAppartement3.imgApp[2]} alt="image" />
              <h4>{this.state.dataAppartement3.nomApp}</h4>
            </a>
          </Col>
          <Col className="img_chambertin">
            <a href={"/page2/" + this.state.dataAppartement4._id}>
              <img src={this.state.dataAppartement4.imgApp[0]} alt="image" />
              <h4>{this.state.dataAppartement4.nomApp}</h4>
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default apartmentLink;

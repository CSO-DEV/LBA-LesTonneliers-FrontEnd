/*
 * Descriptif des appartements associé avec les carrousel - Page1
 */

import React, { Component } from "react";
import "./styleDetailPage1.css";
import { Container, Row, Col } from "react-bootstrap";
import BoutonPage1 from "../../assets/boutons/BoutonPage1";

class DetailPage1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Container>
          <Row className="rowNote">
            <Col className="colNote propsNote">{this.props.propsNote}</Col>
          </Row>
          <Row className="rowTitle">
            <Col className="colTitle propsTiltle">{this.props.propsTiltle}</Col>
          </Row>
          <Row className="rowDescription">
            <Col className="colDescription propsDescription">
              {this.props.propsDescription}
            </Col>
          </Row>
          <Row className="rowCharacteristics">
            <Col className="colCharacteristics propsCharacteristics">
              {this.props.propsCharacteristics}
            </Col>
          </Row>
          <Row className="rowMore">
            <Col className="colMore">
              <BoutonPage1
                button="En savoir plus"
                propsIdAppartement={this.props.propsIdAppartement}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DetailPage1;

/*
 * Affichage des équipements - Page2
 * A finir : Faire une boucle d'affichage pour les li
 */

import React, { Component } from "react";
import "./styleEquipment.css";
import { Col } from "react-bootstrap";

class Equipment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="equipment_content">
        <div>
          <Col className="equipment">
            <h3>Les Equipements</h3>
          </Col>
        </div>
        <div className="equipment_details propsEquipement">
          <Col>
            <ul>
              <li>{this.props.propsEquipement[0]}</li>
              <li>{this.props.propsEquipement[1]}</li>
              <li>{this.props.propsEquipement[2]}</li>
              <li>{this.props.propsEquipement[3]}</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>{this.props.propsEquipement[4]}</li>
              <li>{this.props.propsEquipement[5]}</li>
              <li>{this.props.propsEquipement[6]}</li>
              <li>{this.props.propsEquipement[7]}</li>
            </ul>
          </Col>
        </div>
      </div>
    );
  }
}

export default Equipment;

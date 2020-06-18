/*
 * Bouton "Plan acces itinéraire" Page1
 */

import React, { Component } from "react";
import "./styleBoutonMap.css";
import { Button } from "react-bootstrap";

class BoutonPage1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Button variant="danger">{this.props.button}</Button>
      </div>
    );
  }
}

export default BoutonPage1;

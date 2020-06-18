/*
 * Bouton "Réserver" Page2
 */

import React, { Component } from "react";
import "./styleBoutonPage2.css";
import { Button } from "react-bootstrap";

class BoutonPage2 extends Component {
  render() {
    return (
      <div>
        <Button
          className="classBoutonPage2"
          variant="danger"
          onClick={this.props.propsClick}
        >
          Réserver
        </Button>
      </div>
    );
  }
}

export default BoutonPage2;

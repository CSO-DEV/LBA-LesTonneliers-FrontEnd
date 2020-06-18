/*
 * Bouton "En savoir Plus" Page1
 */

import React, { Component } from "react";
import "./styleBoutonPage1.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class BoutonPage1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Link to={"/page2/" + this.props.propsIdAppartement}>
          <Button variant="danger">{this.props.button}</Button>
        </Link>
      </div>
    );
  }
}

export default BoutonPage1;

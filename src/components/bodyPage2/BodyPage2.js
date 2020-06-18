/*
 * Affichage de la partie centrale - Page2
 * Assemblage détail appartement + réservation
 */

import React, { Component } from "react";
import "./styleBodyPage2.css";
import GridPage2 from "../../assets/grids/GridPage2";
import GridDetails from "../../assets/grids/GridDetails";
import ApartmentLink from "../../assets/apartmentLink/apartmentLink";

class BodyPage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="bodyPage2">
          <GridDetails propsIdAppartement={this.props.match.params.id} />
          <GridPage2 propsIdReservation={this.props.match.params.id} />
        </div>
        <div className="apartmentlink">
          <ApartmentLink />
        </div>
      </div>
    );
  }
}

export default BodyPage2;

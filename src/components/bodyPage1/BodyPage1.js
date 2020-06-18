/*
 * Affichage de la partie centrale - Page1
 */

import React, { Component } from "react";
import "./styleBodyPage1.css";
import GridPage1 from "../../assets/grids/GridPage1";
import Contact from "../Contact/Contact";

class BodyPage1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAppartement: [],
    };
  }
  // Appel aux données
  componentDidMount() {
    this.getAppartement();
  }

  //Récupération des données collection Appartement
  getAppartement = () => {
    const options = {
      method: "GET",
      headers: { "Content-type": "application/json" },
      mode: "cors",
    };
    fetch("http://localhost:8080/appartement/", options)
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({ dataAppartement: data });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  //Boucle d'affichage carrousel + descriptif
  afficherGrid = () => {
    return this.state.dataAppartement.map((element, index) => (
      <GridPage1
        propsCaption={element.nomApp}
        propsImg1={element.imgApp[0]}
        propsImg2={element.imgApp[1]}
        propsImg3={element.imgApp[2]}
        propsNote={element.noteApp}
        propsTiltle={element.nomApp}
        propsDescription={element.descPage1App}
        propsCharacteristics={element.caracApp}
        propsIdAppartement={element._id}
      />
    ));
  };

  render() {
    return (
      <div className="bodyPage1">
        <div className="headerPage1"></div>
        <div className="textePage1">
          <h1>Location saisonnière au coeur de Beaune</h1>
          <h4>
            Petits écrins au cœur de Beaune, nos 4 appartements sont décorés
            avec soin et très bien équipés. Ils vous permettront de profiter
            d’un séjour en toute indépendance et sans concession au confort.
          </h4>
          <h3>Nos appartements</h3>
        </div>
        <div className="classBodyPage1">
          <a className="classRetour" href="#navbar">
            <img src="/img/retour.svg" alt="Retour" />
          </a>
          {this.afficherGrid()}
        </div>
        <div className="contact_component">
          <Contact />
        </div>
      </div>
    );
  }
}

export default BodyPage1;

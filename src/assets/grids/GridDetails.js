/*
 * Descriptif détaillé d'un appartement- Page2
 * A finir : voir à mettre dans la collection appartement sous forme de tableau dans "descPage2App"
 */

import React, { Component } from "react";
import "./styleGridDetails.css";
import { Col } from "react-bootstrap";
import CarrouselPage1 from "../caroussel/CarrouselPage1";
import Equipment from "../../components/Equipment/Equipment";

class GridDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDetailAppartement: { imgApp: [], equipApp: [] },
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
    fetch(
      "http://localhost:8080/appartement/detailsappartement?id=" + //envoie du paramètre de recherche dans le chemin
        this.props.propsIdAppartement,
      options
    )
      .then((res) => res.json())
      .then(
        (data) => {
          // console.log(data);
          this.setState({ dataDetailAppartement: data });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <div>
        <div className="grid_details">
          <Col className="caroussel_col1">
            <h3>{this.state.dataDetailAppartement.nomApp}</h3>
            <br />
            <p>
              <span>
                Située au premier étage de notre résidence, la chambre « Le
                Corton Charlemagne » offre un niveau de confort et de romantisme
                au-delà des espérances…
              </span>
              <br />
              <p>
                Univers de 45m² (25m² pour la chambre, 20m² pour la salle de
                bain), parquet de chêne, couleurs tendres, plafond d’époque
                peints à la main, baldaquins de 160cm, literie d’excellente
                qualité.
              </p>
              <br />
              <p>
                La salle de bain adjacente vous offre de beaux volumes avec
                grandes hauteurs sous plafonds moulurés et donne accès à votre
                terrasse privative orientée sud sud-est.
              </p>
              <br />
              <p>
                Cet espace qui vous est exclusivement réservé, vous offre la
                possibilité de déguster un verre en amoureux en profitant du
                salon de jardin, de lézarder au soleil encore de vous relaxer
                dans votre SPA privatif sans vis-à-vis…
              </p>
              <br />
              <p>
                Séjourner dans la chambre « Le Corton Charlemagne », c’est vivre
                une expérience à deux hors du commun avec la garantie de garder
                des souvenirs impérissables.
              </p>
            </p>
          </Col>
          <Col className="caroussel_col2">
            <CarrouselPage1
              propsImg1={this.state.dataDetailAppartement.imgApp[0]}
              propsImg2={this.state.dataDetailAppartement.imgApp[1]}
              propsImg3={this.state.dataDetailAppartement.imgApp[2]}
            />
          </Col>
        </div>
        <div>
          <Equipment
            propsEquipement={this.state.dataDetailAppartement.equipApp}
          />
        </div>
      </div>
    );
  }
}

export default GridDetails;

/*
 * Affichage du pied de page - Page1-2
 */

import React, { Component } from "react";
import "./styleFooter.css";
import { Row, Col } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Row>
          <Col>
            <div id="logo_footer">
              <img src="img/logo_lestonneliers.png" alt="logo" />
            </div>
          </Col>
          <Col>
            <div className="social_network">
              <p>Résidence Les Tonneliers</p>
              <p>7 rue des Tonneliers</p>
              <p>21200 Beaune, FRANCE</p>
              <a href="https://fr-fr.facebook.com/">
                <img src="./img/ico_facebook.svg" alt="ico_facebook" />
              </a>
              <a href="https://www.instagram.com/?hl=fr">
                <img src="./img/ico_instagram.svg" alt="ico_instagram" />
              </a>
              <a href="https://www.google.fr/maps">
                <img src="./img/ico_googlemap.svg" alt="ico_googlemap" />
              </a>
            </div>
          </Col>
          <Col>
            <div id="logo_ville_footer">
              <img src="img/ville_de_beaune_logo.svg" alt="logo_ville" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;

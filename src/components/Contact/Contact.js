/*
 * Affichage du formulaire de contact - Page1
 */

import React, { Component } from "react";
import "./styleContact.css";
import { Col } from "react-bootstrap";
import BoutonMap from "../../assets/boutons/BoutonMap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prenom: "",
      nom: "",
      email: "",
      tel: "",
      message: "",
    };
  }
  // Récupération des informations saisies par l'utilisateur
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Envoi des données du formulaire
  envoiFormulaire = (e) => {
    e.preventDefault(); //Pour empecher de rafraichir la page
    // Créer le body à envoyer
    const body = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      email: this.state.email,
      tel: this.state.tel,
      message: this.state.message,
    };

    //Configuration de la requete
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(body),
    };
    //Envoie de la requete
    fetch("http://localhost:8080/connexion/formulaire", options)
      .then((response) => response.json())
      .then(
        (data) => {
          alert("Votre message a été pris en compte, merci");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <div className="contact" id="form">
        <Col>
          <h2>Nous Contacter</h2>
          <form className="formulaire">
            <label for="prenom">Prénom</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              placeholder="Entrer votre Prénom..."
              onChange={this.handleInput}
            ></input>
            <label for="nom">Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              placeholder="Entrer votre Nom..."
              onChange={this.handleInput}
            ></input>
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Entrer votre Mail..."
              onChange={this.handleInput}
            ></input>
            <label for="tel">Tel</label>
            <input
              type="tel"
              id="tel"
              name="tel"
              placeholder="Entrer votre N° de Télétel..."
              onChange={this.handleInput}
            ></input>
            <label for="nom">Votre Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Entrer votre Message..."
              onChange={this.handleInput}
            ></textarea>
            <a href id="link" onClick={this.envoiFormulaire}>
              Envoyer
            </a>
          </form>
        </Col>
        <Col className="reserve">
          <h2>Réserver votre appartement</h2>
          <br />
          <p>
            Pour réserver un de nos appartements, contactez nous directement par
            Télétel ou via le formulaire
          </p>
          <p>
            Résidence Les Tonneliers
            <br />7 Rue des Tonneliers
            <br />
            21200 Beaune, France
          </p>
          <p>
            <span>Tel :</span> (+33) 07.60.40.65.49 <br />
            <span>Email :</span> contact@lestonneliers.fr
          </p>
          <a
            href="https://www.google.com/maps/place/7+Rue+des+Tonneliers,+21200+Beaune/@47.0243942,4.837084,17z/data=!3m1!4b1!4m5!3m4!1s0x47f2f345f565f3ff:0x899fbdaa48d90ae4!8m2!3d47.0243942!4d4.8392727"
            target="blank"
          >
            <BoutonMap button="Plan d'accès et Itinéraire" />
          </a>
          <img src="img/map_beaune.png" alt="map_beaune" />
        </Col>
      </div>
    );
  }
}

export default Contact;

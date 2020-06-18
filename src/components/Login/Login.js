/*
 * Affichage du modal de connexion - A finir ==> données sécurisées
 */

import React, { Component } from "react";
import "./styleLogin.css";
import { Modal, Button, Nav } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false,
      email: "",
      password: "",
    };
  }
  // Récupération des données saisies
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //Contrôle du login hach
  postLoggin = () => {
    const body = {
      email: this.state.email,
      password: this.state.password,
    };

    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      mode: "cors",
      body: JSON.stringify(body),
    };

    fetch("http://localhost:8080/login", options)
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // ouverture et Fermeture de la fenêtre Modal
  changeclose = () => {
    this.setState({ close: !this.state.close });
  };

  render() {
    return (
      <div className="login">
        <Nav.Link onClick={this.changeclose}>Connexion/Inscription</Nav.Link>
        <Modal onHide={this.changeclose} show={this.state.close}>
          <Modal.Header closeButton>
            <Modal.Title>
              <p>Connexion</p>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form className="form_login">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Entrer votre Mail..."
                onChange={this.handleInput}
              ></input>
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Mot de passe..."
                onChange={this.handleInput}
              ></input>
              <p>
                Mot de passe <a href="">oublié</a>
              </p>
              <p>
                Vous n'avez pas de compte <a href="">Inscription</a>
              </p>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.changeclose} variant="secondary">
              Close
            </Button>
            <Button onClick={this.getLoggin}>Connexion</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Login;

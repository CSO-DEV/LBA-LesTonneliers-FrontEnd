/*
 * Test SignUp et Login
 * A intégrer dans les modals connexion et inscription
 */

import React, { Component } from "react";

class BodyPage3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  // Récupération des informations saisies par l'utilisateur
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //Contrôle du login hach
  postSignup = (e) => {
    // postLogin = (e) => {  ==> pour se connecter
    e.preventDefault(); //Pour empecher de rafraichir la page
    const body = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(body);
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      mode: "cors",
      body: JSON.stringify(body),
    };

    fetch("http://localhost:8080/api/auth/signup", options) // fetch("http://localhost:8080/api/auth/login", options)  ==> pour se connecter
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

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Email</label>
            <input type="text" name="email" onChange={this.handleInput}></input>
          </div>
          <div>
            <label>mot de passe</label>
            <input
              type="text"
              name="password"
              onChange={this.handleInput}
            ></input>
          </div>
          <div>
            <button type="submit" name="bouton" onClick={this.postSignup}>
              {/* onClick={this.postlogin}>  ==> pour se connecter*/}
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default BodyPage3;

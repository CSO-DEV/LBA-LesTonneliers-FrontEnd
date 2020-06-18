/*
 * Affichage de la barre de navigation - Page1-2
 * A finir : - modal Historique / Beaune / concepte
 */

import React, { Component } from "react";
import "./styleMenu.css";
import { Nav, NavDropdown } from "react-bootstrap";
import Login from "../Login/Login";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_login: false,
    };
  }

  // Gestion de l'affichage de la fenêtre modal
  changeShow = () => {
    this.setState({ show_login: true });
  };

  render() {
    return (
      <div id="navbar">
        <Nav
          className="justify-content-end"
          defaultActiveKey="/home"
          onClick={this.changeShow}
        >
          <Nav.Item>
            <Nav.Link href="/" eventKey="home">
              Accueil
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Login />
          </Nav.Item>
          <NavDropdown title="Les Tonneliers" id="nav-dropdown">
            <NavDropdown.Item eventKey="2.1">Historique</NavDropdown.Item>
            <NavDropdown.Item eventKey="2.2">
              Beaune : L'Environnement
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="2.3">
              Concept des locations
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link href="#form" eventKey="link-2">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default Menu;

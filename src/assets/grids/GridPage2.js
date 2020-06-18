/*
 * Affichage et calcul de la réservation - Page2
 * A finir : le calendrier + la modale de recap + faire un controle de date de reservation
 */

import React, { Component } from "react";
import "./styleGridPage2.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import BoutonPage2 from "../../assets/boutons/BoutonPage2";
import Calendar1 from "../../assets/calendar/Calendar1";

class GridPage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initPrix: 0, // Extraction prix collection app
      initMenage: 0, // Extraction prix collection frais
      initService: 0, // Extraction prix collection frais
      initTaxe: 0, // Extraction prix collection frais
      show: false,
      voyageur: 0,
      nuit: 0,
      menage: 0,
      service: 0,
      taxe: 0,
      total: 0,
      totalNuite: 0,
    };
    this.dateArrivee = 0;
    this.dateDepart = 0;
    this.calculDate = 0;
  }

  /*
   *Extraction des données sur les collections.
   */
  componentDidMount() {
    //le 1er affichage de la page
    this.getAppartement();
    this.getFrais();
  }

  // Extraction des données Collection Appartement => prix
  getAppartement = () => {
    const options = {
      method: "GET",
      headers: { "Content-type": "application/json" },
      mode: "cors",
    };
    fetch(
      "http://localhost:8080/reservation?id=" + this.props.propsIdReservation, //envoie du paramètre de recherche dans le chemin
      options
    )
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          this.setState({ initPrix: data.prixNuit });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  //Extraction frais collection tarifs
  getFrais = () => {
    const options = {
      method: "GET",
      headers: { "Content-type": "application/json" },
      mode: "cors",
    };
    fetch("http://localhost:8080/reservation/frais", options)
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          this.setState({ initMenage: data.fraisMenage });
          this.setState({ initService: data.fraisService });
          this.setState({ initTaxe: data.taxeSejour });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  /*
   * Enregistrement des données de confirmation de réservation (a mettre dans le modal)
   */
  envoiFormulaire = (e) => {
    e.preventDefault(); //Pour empecher de rafraichir la page
    // Créer le body à envoyer
    const body = {
      nomApp: this.state.nomApp,
      arrivee: this.dateArrivee,
      depart: this.dateDepart,
      nbVoyageurs: this.state.voyageur,
      totalBrut: this.state.totalNuite,
      fraisMenage: this.state.menage,
      fraisService: this.state.service,
      taxeSejour: this.state.taxe,
      totalResa: this.state.total,
      restantDu: this.state.total,
    };

    //Configuration de la requete
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(body),
    };
    //Envoie de la requete
    fetch(
      "http://localhost:8080/reservation?id=5ea34200d6146ef6df3dcace",
      options
    )
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
          alert("Votre réservation a été prise en compte, merci");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  /*
  /*calculation of the number of nuits
  /*Calcul du nombre de nuit
  */
  /*recovery of data entry - récupération de la saisie de donnée*/
  getnuit = (e) => {
    let nameDate = e.target.name;
    let valDate = e.target.value;
    //formatting the date entry - Formatage de saisie de date
    if (valDate.length == 2) {
      e.target.value = valDate + "/";
    } else if (valDate.length == 5) {
      e.target.value = valDate + "/";
    }
    //dates formatting - Formatage des dates aaaa-mm-dd
    if (valDate.length == 10) {
      let calculJour = valDate.substr(0, 2);
      let calculMois = valDate.substr(3, 2);
      let calculAnnee = valDate.substr(6, 4);
      this.calculDate = calculAnnee + "-" + calculMois + "-" + calculJour;
      if (nameDate == "arrivee") {
        this.dateArrivee = this.calculDate;
      } else if (nameDate == "depart") {
        this.dateDepart = this.calculDate;
      }
      //dates formatting - Formatage des dates
      if (this.dateArrivee != 0 && this.dateDepart != 0) {
        this.calculnuit(e, this.dateArrivee, this.dateDepart);
      }
    }
  };

  /*calculation of the number of nuits - Calcul du nombre de nuits*/
  calculnuit = (e, dateA, dateB) => {
    let date1 = new Date(dateA);
    let date2 = new Date(dateB);
    let diff = this.dateDiff(date1, date2);
    let nnuit = diff.day;
    if (nnuit < 0) {
      alert("Attention, la date de départ est inférieure à la date d'arrivée");
      e.target.value = "";
    } else {
      this.state.nuit = nnuit;
      this.setState({ nuit: nnuit });
      this.coast();
    }
  };
  /*Calcul du nombre de jour entre 2 dates*/
  dateDiff = (date1, date2) => {
    let diff = {}; // Initialisation du retour
    let tmp = date2 - date1;

    tmp = Math.floor(tmp / 1000); // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60; // Extraction du nombre de secondes

    tmp = Math.floor((tmp - diff.sec) / 60); // Nombre de minutes (partie entière)
    diff.min = tmp % 60; // Extraction du nombre de minutes

    tmp = Math.floor((tmp - diff.min) / 60); // Nombre d'heures (entières)
    diff.hour = tmp % 24; // Extraction du nombre d'heures

    tmp = Math.floor((tmp - diff.hour) / 24); // Nombre de jours restants
    diff.day = tmp;

    return diff;
  };
  /*
  /*calculation of the number of voyageurs
  /*calcul du nombre de voyageurs
  */
  nvoyageur = (e) => {
    let n = this.state.voyageur;
    if (e.target.name == "plus" && n < 6) {
      n++;
    } else if (e.target.name == "moins" && n > 1) {
      n--;
    }
    this.state.voyageur = n;
    this.setState({ voyageur: n });
    this.coast();
  };
  /*
  /*calculate total cost overnuit
  /*calcul le cout total nuité 
  */
  coast = () => {
    //Calcul du prix chambre * nombre de nuit
    let cout1 = this.state.initPrix * this.state.nuit;
    this.state.totalNuite = cout1;
    this.setState({ totalNuite: cout1 });
    //Calcul du prix ménage * nombre de nuit
    let cout2 = this.state.initMenage * this.state.nuit;
    this.state.menage = cout2;
    this.setState({ menage: cout2 });
    //Calcul du prix service * nombre de nuit
    let cout3 = this.state.initService * this.state.nuit;
    this.state.service = cout3;
    this.setState({ service: cout3 });
    //Calcul du prix service * nombre de nuit
    let cout4 = this.state.initTaxe * this.state.nuit * this.state.voyageur;
    this.state.taxe = cout4;
    this.setState({ taxe: cout4 });
    //Calcul global
    let cout5 = cout1 + cout2 + cout3 + cout4;
    this.state.total = cout5;
    this.setState({ total: cout5 });
  };
  /*
  /*-
  * Modal de récapitulation :
  */
  render() {
    return (
      <div className="gridPage2">
        <Container className="container1Grid2">
          <Row className="cont1Row0Grid2">
            <Col className="cont1Row0Col1Grid2">
              <span className="spanPrix">{this.state.initPrix}€</span>
              <span>/ nuit</span>
            </Col>
          </Row>
          <Row className="cont1Row1Grid2">
            <Col className="cont1Row1Col1Grid2">
              <label className="labelGrid2" for="arrivee">
                Date d'arrivée :
              </label>

              <input
                className="InputGrid2 dateArrivee"
                type="text"
                name="arrivee"
                placeholder="jj/mm/aaaa"
                maxlength="10"
                onChange={this.getnuit}
              ></input>
            </Col>
            <Col className="cont1Row1Col2Grid2">
              <label className="labelGrid2 " for="depart">
                Date de départ :
              </label>
              <input
                className="InputGrid2"
                type="text"
                name="depart"
                placeholder="jj/mm/aaaa"
                maxlength="10"
                onChange={this.getnuit}
              ></input>
            </Col>
          </Row>
          <Row className="cont1Row2Grid2">
            <Col xs={7} className="cont1Row2Col1Grid2">
              <label className="labelGrid2" for="arrivee">
                Nombre de voyageurs :
              </label>
            </Col>
            <Col className="cont1Row2Col2Grid2">
              <Button
                className="ButtonPlusMoins"
                name="plus"
                onClick={this.nvoyageur}
                variant="light"
              >
                +
              </Button>
              <div className="plusMoins">{this.state.voyageur}</div>
              <Button
                className="ButtonPlusMoins"
                name="moins"
                onClick={this.nvoyageur}
                variant="light"
              >
                -
              </Button>
            </Col>
          </Row>
          <Row className="cont1Row3Grid2">
            <Col xs={6} className="cont1Row3Col1Grid2">
              <span>{this.state.initPrix}€</span>
              <span> x {this.state.nuit} nuit(s) :</span>
            </Col>
            <Col className="cont1Row3Col2Grid2">
              <span>{this.state.totalNuite}€</span>
            </Col>
          </Row>
          <Row className="cont1Row4Grid2">
            <Col xs={8} className="cont1Row4Col1Grid2">
              <span>
                <a href="#">Frais de ménage :</a>
              </span>
            </Col>
            <Col className="cont1Row4Col2Grid2">
              <span>{this.state.menage}€</span>
            </Col>
          </Row>
          <Row className="cont1Row5Grid2">
            <Col xs={8} className="cont1Row5Col1Grid2">
              <span>
                <a href="#">Frais de service :</a>
              </span>
            </Col>
            <Col className="cont1Row5Col2Grid2">
              <span>{this.state.service}€</span>
            </Col>
          </Row>
          <Row className="cont1Row6Grid2">
            <Col xs={8} className="cont1Row6Col1Grid2">
              <span>
                <a href="#">Taxe de séjour et frais :</a>
              </span>
            </Col>
            <Col className="cont1Row6Col2Grid2">
              <span>{this.state.taxe}€</span>
            </Col>
          </Row>
          <Row className="cont1Row7Grid2"></Row>
          <Row className="cont1Row8Grid2">
            <Col xs={8} className="cont1Row8Col1Grid2">
              <span>Total :</span>
            </Col>
            <Col className="cont1Row8Col2Grid2">
              <span>{this.state.total}€</span>
            </Col>
          </Row>
          <Row className="cont1Row9Grid2">
            <Col className="cont1Row9Col1Grid2">
              <BoutonPage2 propsClick={this.envoiFormulaire} />
            </Col>
          </Row>
        </Container>
        <Container className="container2Grid2">
          <Calendar1 />
        </Container>
      </div>
    );
  }
}

export default GridPage2;

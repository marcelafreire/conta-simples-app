import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {


  render() {
    // console.log(this.state.receivePayments, "receivePayments");
    return (
      <div className="payments-home">

      <div><h2>Pagamentos recebidos</h2><Link to="/gestao-de-cobrancas">Ver mais</Link></div>
      <div><h2>Rendimentos</h2><h3>Em breve</h3></div>
      <div><h2>cartão de crédito</h2><Link to="/cartao-de-credito">Ver mais</Link></div>

      </div>
    );
  }
}

export default HomePage;

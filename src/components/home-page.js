import React, { Component } from "react";

class HomePage extends Component {


  render() {
    // console.log(this.state.receivePayments, "receivePayments");
    return (
      <div className="payments-home">

      <div><h2>Pagamentos recebidos</h2></div>
      <div><h2>pagamentos efetuados</h2></div>
      <div><h2>cartão de crédito</h2></div>

      </div>
    );
  }
}

export default HomePage;

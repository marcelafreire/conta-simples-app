import React, { Component } from "react";

class CreditCard extends Component {

  // componentWillUnmount() {
  //   this.props.getCreditCardPayments();
  // }


  render() {
    // const count = this.props.toDoPayments.map((item => item.valor))
    // const sumAll = [...count]
    // console.log(sumAll, "receivePayments");
    return (
      <div className="received-payments">
      <h1>Cartão de crédito</h1>
      <div className="received-payments-box">
    <table> 
       <thead>
          <tr>
            <th><h3>Data</h3></th>
            <th><h3>Empresa</h3></th>
            <th><h3>Tipo</h3></th>
            <th><h3>Valor</h3></th>
          </tr>
          </thead>
          <tbody>
      {this.props.toDoPayments.map((item) => (
          
          <tr key={item.id}>
            <td><h4>{item.data}</h4></td>
            <td><h4>{item.empresa}</h4></td>
            <td><h4>{item.tipo}</h4></td>
            <td><h4><b>R${item.valor},00</b></h4></td>
           </tr>
       
        ))}
      
        </tbody>
      </table>
      </div>
    </div>
    );
  }
}

export default CreditCard;

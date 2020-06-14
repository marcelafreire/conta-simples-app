import React, { Component } from "react";

class ReceivedPayments extends Component {
  componentWillUnmount() {
    this.props.getReceivedPayments();
  }

  render() {
    // console.log(this.props.receivePayments, "receivePayments");
    return (
      <div className="received-payments">
        <h1>Gestão de Cobranças</h1>
        <div className="received-payments-box">
          <table>
            <thead>
              <tr>
                <th>
                  <h3>Cliente</h3>
                </th>
                <th>
                  <h3>Serviço</h3>
                </th>
                <th>
                  <h3>Vencimento</h3>
                </th>
                <th>
                  <h3>Valor</h3>
                </th>
              </tr>
            </thead>
            {this.props.receivePayments.map((item) => (
              <tbody>
                <tr key={item.id}>
                  <td>
                    <h4>
                      <p>Cliente</p>
                      {item.Cliente}
                    </h4>
                    <p>Vencimento:{item.Vencimento}</p>
                  </td>
                  <td>
                    <h4>
                      <p>Serviço</p>
                      {item.Servico}
                    </h4>
                  </td>
                  <td>
                    <h4>{item.Vencimento}</h4>
                  </td>
                  <td>
                    <h4>
                      <b>R${item.Valor},00</b>
                    </h4>
                    <h4
                      className={
                        item.Status === "Pago"
                          ? "btn status-pago"
                          : item.Status === "Atrasado"
                          ? "btn status-atrasado"
                          : "btn status-areceber"
                      }
                    >
                      {item.Status}
                    </h4>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default ReceivedPayments;

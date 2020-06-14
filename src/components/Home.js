import React, { Component } from "react";
import axios from "axios";
import Navbar from "./navbar-side";
import NavbarTop from "./navbar-top";
import ReceivedPayments from "./received-payments";
import { Route, Switch } from "react-router-dom";
import CreditCard from "./credit-card";
import HomePage from "./home-page";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receivePayments: [],
      toDoPayments: [],
    };
    this.getReceivedPayments = this.getReceivedPayments.bind(this);
    this.getCreditCardPayments = this.getCreditCardPayments.bind(this);
  }

  getReceivedPayments() {
    axios
      .get(`http://localhost:4000/recebimentos`)
      .then((response) => {
        // console.log(response, "response");
        this.setState({
          receivePayments: response.data,
        });
      })
      .catch((error) => console.log(error, "chamada deu erro"));
  }

  getCreditCardPayments() {
    axios
      .get(`http://localhost:4000/pagamentos`)
      .then((response) => {
        // console.log(response, "response");
        this.setState({
          toDoPayments: response.data,
        });
      })
      .catch((error) => console.log(error, "chamada deu erro"));
  }

  componentWillMount() {
    this.getReceivedPayments();
    this.getCreditCardPayments();
  }

  render() {
    // console.log(this.state.receivePayments, "receivePayments");
    return (
      <div className="responsive">
        <NavbarTop />
        <Navbar />

        <div className="content-home">
          <div className="empty-space"></div>
          <div className="payments-content-home">
            <Switch>

            <Route
                exact
                path="/"
                render={(props) => (
                  <HomePage
                    getReceivedPayments={this.getReceivedPayments}
                    receivePayments={this.state.receivePayments}
                    {...props}
                  />
                )}
              />
              
              <Route
                exact
                path="/gestao-de-cobrancas"
                render={(props) => (
                  <ReceivedPayments
                    getReceivedPayments={this.getReceivedPayments}
                    receivePayments={this.state.receivePayments}
                    {...props}
                  />
                )}
              />

              <Route
                exact
                path="/cartao-de-credito"
                render={(props) => (
                  <CreditCard
                    getReceivedPayments={this.getCreditCardPayments}
                    toDoPayments={this.state.toDoPayments}
                    {...props}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

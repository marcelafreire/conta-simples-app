import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {
  render() {
    return (
          <nav className="nav-side">
            <img src="media/logo.svg" alt="logo" />
            <ul>
              <li>
             <Link to={`/`}><span><FontAwesomeIcon icon={['fas', 'home']} /></span><h3>Home</h3></Link>
              </li>
              <li>
              <Link to={`/gestao-de-cobrancas`}><span><FontAwesomeIcon icon={['fas', 'barcode']} /></span><h3>Gestão de Cobranças</h3></Link>
              </li>
              <li>
              <Link to={`/cartao-de-credito`}><span><FontAwesomeIcon icon={['fas', 'credit-card']} /></span><h3>Cartão de crédito</h3></Link>
              </li>
              <li>
              <Link to={`/`}><span><FontAwesomeIcon icon={['fas', 'money-check-alt']} /></span><h3>Pagamentos</h3></Link>
              </li>
              <li>
                <Link to={`/`}><span><FontAwesomeIcon icon={['fas', 'chart-bar']} /></span><h3>Rendimentos</h3></Link>
              </li>
            </ul>
          </nav>
    );
  }
}

export default Navbar;

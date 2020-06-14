import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavbarTop extends Component {
  render() {
    return (
      <header class="welcome">
        <img className="logo" src="media/logo.svg" alt="logo" />
        <ul>
          <div>
            <img className="profile" src="/media/profile.png" alt="profile" />
            <li>Bem vindo Usuário</li>
          </div>
          <div>
            <li>
              <span>
                <FontAwesomeIcon icon={["fas", "bell"]} />
              </span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={["fas", "user-cog"]} />
              </span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={["fas", "sign-out-alt"]} />
              </span>
            </li>
          </div>
        </ul>
      </header>
    );
  }
}

export default NavbarTop;

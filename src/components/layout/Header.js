import "../../styles/components/layout/Header.css";
import React from "react";
const Header = (props) => {
  return (
    <header>
      <div className="grid-container">
        <div className="grid-title">
          <h1>Aurelia Elena Roldan</h1>
        </div>
        <div className="grid-session">
          <img src="front/icons/icons-user.png" alt="user icon"></img>
          <p>Invitado</p>
        </div>
      </div>
    </header>
  );
};
export default Header;

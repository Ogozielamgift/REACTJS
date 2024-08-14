import React from "react";
import "./Clients.css";
import logo from "../../assets/Images/colorlib-logo.png";
import html5 from "../../assets/Images/html5-logo.png";
import jslogo from "../../assets/Images/js-logo.png";
import less from "../../assets/Images/less-logo.png";
import sass from "../../assets/Images/sass-logo.png";
import css from "../../assets/Images/css-logo.png";
import boots from "../../assets/Images/bootstrap-logo.jpg";
import facebook from "../../assets/Images/facebook-logo.png";
const Clients = () => {
  return (
    <div>
      <div className="client">
        <h1>Our Main Client</h1>
        <div className="logo">
          <div>
            <img src={logo} />
          </div>
          <div>
            <img src={html5} />
          </div>
          <div>
            <img src={jslogo} />
          </div>
          <div>
            <img src={less} />
          </div>
          <div>
            <img src={sass} />
          </div>
          <div>
            <img src={css} />
          </div>
          <div>
            <img src={boots} />
          </div>
          <div>
            <img src={facebook} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;

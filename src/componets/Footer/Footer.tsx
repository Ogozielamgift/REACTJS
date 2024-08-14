import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="foot">
        <h3 className="fot">
          Theme by <span>CHIGOZIE</span> Powered by
          <span>WordPress</span>
        </h3>
        <div className="a">
          <div>
            <span>
              <i className="fa-brands fa-facebook"></i>
            </span>
          </div>
          <div>
            <span>
              <i className="fa-brands fa-twitter"></i>
            </span>
          </div>
          <div>
            <span>
              <i className="fa-brands fa-linkedin"></i>
            </span>
          </div>
          <div>
            <span>
              <i className="fa-brands fa-square-youtube"></i>
            </span>
          </div>
          <div>
            <span>
              <i className="fa-brands fa-instagram"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

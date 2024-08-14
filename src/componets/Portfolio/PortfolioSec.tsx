import React from "react";
import "./Portfolio.css";
import image from "../../assets/Images/photowork3.png";
const PortfolioSec = () => {
  return (
    <div>
      <div className="port-div">
        <div className="portt">
          <div className="friends">
            <h1 className="fris">Portifolio Section</h1>
            <p className="p-tag">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              velit fuga unde assumenda veritatis nemo natus minima, ullam,
              officia mollitia ipsum enim nisi eaque iste reiciendis illo
              suscipit. Eveniet, nisi Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Quasi velit fuga unde assumenda veritatis nemo
              natus minima, ullam, officia mollitia ipsum enim nisi eaque iste
              reiciendis illo suscipit. Eveniet, nisi
            </p>
            <div className="read-button1">SEE IT IN ACTION</div>
          </div>
          <div className="img4">
            <img src={image} className="img5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSec;

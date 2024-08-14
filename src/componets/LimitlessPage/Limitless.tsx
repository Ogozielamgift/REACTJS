import React from "react";
import "./Limitless.css";
import image from "../../assets/Images/photowork5.jpg";
const Limitless = () => {
  return (
    <div>
      <div className="EE">
        <div className="limitless">
          <h1>Limitless Options</h1>
          <p className="pX">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            alias ipsam aliquid facilis iste optio nihil quidem in tenetur
            voluptatibus eaque esse dolor, similique, consequuntur aliquam, enim
            id provident voluptate!
          </p>
          <div className="download">DOWNLOAD NOW</div>
          <div className="photo">
            <img src={image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Limitless;

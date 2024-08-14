import React from "react";
import "./Project.css";
import image from "../../assets/Images/photowork6.jpg";
import images from "../../assets/Images/photowork7.jpg";
import photo from "../../assets/Images/photowork8.jpg";
import canada from "../../assets/Images/photowork9.jpg";
import thai from "../../assets/Images/photowork10.jpg";
import usa from "../../assets/Images/photowork11.jpg";
import mexico from "../../assets/Images/photowork13.jpg";
import italy from "../../assets/Images/photowork12.jpg";
import france from "../../assets/Images/photowork15.jpg";
import malta from "../../assets/Images/photowork14.jpg";
const Project = () => {
  return (
    <div>
      <div className="projects">
        <h2>Our Latest Projects</h2>
        <p>Here is our latest Projects. You'll love them!</p>
        <div className="phot-div">
          <div>
            <img src={image} />
            <p className="sydney">Sydney</p>
          </div>
          <div>
            <img src={images} />
            <p className="Austria">Austria</p>
          </div>
          <div>
            <img src={photo} />
            <p className="southafrica">Soweto</p>
          </div>
          <div>
            <img src={canada} />
            <p className="canada">Ontario</p>
          </div>
          <div>
            <img src={thai} />
            <p className="thai">Thailand</p>
          </div>
          <div>
            <img src={usa} />
            <p className="usa">Dakota</p>
          </div>
          <div>
            <img src={mexico} />
            <p className="Mexico">Mexico</p>
          </div>
          <div>
            <img src={italy} />
            <p className="italy">ITaly</p>
          </div>
          <div>
            <img src={france} />
            <p className="france">Bodeux</p>
          </div>
          <div>
            <img src={malta} />
            <p className="Malta">Malta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

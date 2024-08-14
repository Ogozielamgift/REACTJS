import React from "react";
import "./SeoFriendly.css";
import image from "../../assets/Images/photowork2.png";
const SeoFriendly = () => {
  return (
    <div>
      <div className="seo-div">
        <div className="seo">
          <div className="img3">
            <img src={image} />
          </div>
          <div className="friendly">
            <h1 className="fri">SEO Friendly</h1>
            <p className="ptag">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              velit fuga unde assumenda veritatis nemo natus minima, ullam,
              officia mollitia ipsum enim nisi eaque iste reiciendis illo
              suscipit. Eveniet, nisi Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Quasi velit fuga unde assumenda veritatis nemo
              natus minima, ullam, officia mollitia ipsum enim nisi eaque iste
              reiciendis illo suscipit. Eveniet, nisi
            </p>
            <div className="read-button">READ MORE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoFriendly;

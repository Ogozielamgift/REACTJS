import React, { useState } from "react";
import { userData } from "../../data/data";
import Cartitems from "./Cartitems";
import Shipping from "./Shipping";

const Product = () => {
  const [displayUsers, setDisplayUsers] = useState(userData);
  return (
    <div>
      <Cartitems daddy={displayUsers} />
      <Shipping nelson={displayUsers} />
      {/* {displayUsers.map((items: any) => (
        <div>
          {items.id}
          {items.FirstName}
          {items.LastName}
          {items.age}
          {items.isAdmin}
        </div>
      ))} */}
    </div>
  );
};

export default Product;

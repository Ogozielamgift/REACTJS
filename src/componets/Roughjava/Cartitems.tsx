import React from "react";

interface info {
  daddy: any[];
}
const Cartitems: React.FC<info> = ({ daddy }) => {
  return (
    <div>
      {daddy.map((items: any) => (
        <>
          <div>{items.FirstName}</div>
          <div>{items.lastname}</div>
        </>
      ))}
    </div>
  );
};

export default Cartitems;

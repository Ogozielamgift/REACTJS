import React from "react";
interface brown {
  nelson: any[];
}
const Shipping: React.FC<brown> = ({ nelson }) => {
  return (
    <div>
      {nelson.map((daddygo: any) => (
        <>
          <div>{daddygo.FirstName}</div>
          <div>{daddygo.lastname}</div>
        </>
      ))}
    </div>
  );
};

export default Shipping;

import React, { useState } from "react";
import Leave from "./Leave";

const Rough = () => {
  const [display, setDisplay] = useState(false);
  const download = () => {
    setDisplay(true);
  };
  return (
    <div>
      <button onClick={download}>Click Me</button>
      {display ? (
        <>
          <div>Welcome</div>
        </>
      ) : (
        <div>
          <Leave />
        </div>
      )}
    </div>
  );
};

export default Rough;

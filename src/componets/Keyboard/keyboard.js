//React imports
import React, { useState } from "react";
//Created Imports
import { Key } from "./../Buttons/key";

export const Keyboard = () => {
  const [cosas, setCosas] = useState();
  const getValue = (text) => {
    setCosas(text);
  };
  return (
    <div className="keyboard">
      <div className="result_container">
        <div className="result_contanier__value">{cosas}</div>
      </div>

      <div className="keyboard_contanier">
        {Key(getValue)}
        <div>
          <h2>Keyboard</h2>
        </div>
      </div>
      <div></div>
    </div>
  );
};

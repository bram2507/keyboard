//React imports
import React, { useState } from "react";
//Created Imports
import { Key } from "./../Buttons/key";

export const Keyboard = () => {
  const [inputText, updateInputText] = useState("");
  const getInputText = (text) => {
    let result = inputText;
    result += text;
    updateInputText(result);
  };

  return (
    <div className="keyboard">
      <div className="result_container">
        <div className="result_contanier__value">{inputText}</div>
        <div>
          <h1>Result</h1>
        </div>
      </div>

      <div className="keyboard_contanier">
        {Key(getInputText)}
        <div>
          <h1>Keyboard</h1>
        </div>
      </div>
      <div></div>
    </div>
  );
};

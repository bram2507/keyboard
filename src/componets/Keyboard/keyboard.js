//React imports
import React from "react";
import { useState } from "react";
//Created Imports
import { Key } from "./../Buttons/key";
const result = (inputText) => {
  return (
    <div className="result_container">
      <div className="result_contanier__value">{inputText}</div>
      <h1>Result</h1>
    </div>
  );
};

const keyboard = (getInputText) => {
  return (
    <div className="keyboard_contanier">
      {Key(getInputText)}
      <h1>Keyboard</h1>
    </div>
  );
};
export const Keyboard = () => {
  // let pressResult = "";
  const [inputText, updateInputText] = useState("");

  const getInputText = (text) => {
    let result = inputText;
    result += text;
    updateInputText(result);
  };

  return (
    <div className="keyboard">
      {result(inputText)}
      {keyboard(getInputText)}
    </div>
  );
};

//React imports
import React from "react";
import { useState } from "react";
import keyboardCSS from "./KeyboardCSS.module.css";
//Created Imports
import { Key } from "./../Buttons/key";
const result = (inputText) => {
  return (
    <div className={keyboardCSS.result_container}>
      <div className={keyboardCSS.result_contanier__value}>{inputText}</div>
      <h1>Resultado</h1>
    </div>
  );
};

const keyboard = (getInputText) => {
  return (
    <div className={keyboardCSS.keyboard_contanier}>
      {Key(getInputText)}
      <h1>Teclado</h1>
    </div>
  );
};

//Component
export const Keyboard = () => {
  // let pressResult = "";
  const [inputText, updateInputText] = useState("");

  const getInputText = (text) => {
    if (text === "backspace") {
      let result = inputText;
      const text = result.substring(0, result.length - 1);
      updateInputText(text);
    } else {
      let result = inputText;
      result += text;
      updateInputText(result);
    }
  };

  return (
    <div className={keyboardCSS.main_content}>
      <div className={keyboardCSS.title}>
        <h1>Haz click en las teclas para escribir</h1>
      </div>
      <div className={keyboardCSS.keyboard}>
        {result(inputText)}
        {keyboard(getInputText)}
      </div>
    </div>
  );
};

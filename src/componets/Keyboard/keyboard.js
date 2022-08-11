//React imports
import React from "react";
import { useState } from "react";
//Created Imports
import { Key } from "./../Buttons/key";

export const Keyboard = () => {
  // let pressResult = "";
  const [inputText, updateInputText] = useState("");
  // useEffect(() => {
  //   document.addEventListener("keypress", keyPress, true);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const keyPress = (e) => {
  //   pressResult += e.key;
  //   updateInputText(pressResult);
  // };

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

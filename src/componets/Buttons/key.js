import { React, useState } from "react";

const firstRowLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

const secondRowLetters = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"];
const thirdRowLetters = ["z", "x", "c", "v", "b", "n", "m"];

export const Key = (getInputText) => {
  const [classKey, setClass] = useState("keyboard_container__item-value");
  return (
    <div className="keyboard_contanier">
      <div className="keyboard_container__item">
        {firstRowLetters.map((e) => {
          return (
            <div
              onClick={() => {
                getInputText(e);
                setClass("item-value--focus");
              }}
              className={classKey}
              key={e}
            >
              {e}
            </div>
          );
        })}
      </div>
      <div className="keyboard_container__item">
        {secondRowLetters.map((e) => {
          return (
            <div
              onClick={() => {
                getInputText(e);
              }}
              className={classKey}
              key={e}
            >
              {e}
            </div>
          );
        })}
      </div>
      <div className="keyboard_container__item">
        {thirdRowLetters.map((e) => {
          return (
            <div
              onClick={() => {
                getInputText(e);
              }}
              className={classKey}
              key={e}
            >
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
};

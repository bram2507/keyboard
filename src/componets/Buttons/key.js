import { React, useState } from "react";

const firstRowLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const secondRowLetters = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"];
const thirdRowLetters = ["z", "x", "c", "v", "b", "n", "m"];

let firstRowClass = [
  "item-value",
  "item-value",
  "item-value",
  "item-value",
  "item-value",
  "item-value",
  "item-value",
  "item-value",
  "item-value",
  "item-value",
];
let secondRowClass = [
  "item-value",
  "item-value",
  "item-value",
  "item-value",
  "item-value",
  "item-value",
  "item-value",
  "item-value",
  "item-value",
  "item-value",
];
let thirdRowClass = [
  "item-value",
  "item-value",
  "item-value",
  "item-value",
  "item-value",
  "item-value",
  "item-value",
];

//Functions
const activeClass = (setClass, classKey, index) => {
  setClass(
    classKey.map((e, i) => {
      if (i === index) {
        e = "item-value--focus";
      }
      return e;
    })
  );
};

const inactiveClass = (setClass, classKey, index) => {
  setClass(
    classKey.map((e, i) => {
      if (i === index) {
        e = "item-value";
      }
      return e;
    })
  );
};

const firstRowPrint = (setClass, classKey, getInputText) => {
  return (
    <div className="keyboard_container__item">
      {firstRowLetters.map((e, index) => {
        return (
          <div
            onClick={() => {
              getInputText(e);
              activeClass(setClass, classKey, index);
              setTimeout(() => {
                inactiveClass(setClass, classKey, index);
              }, 100);
            }}
            className={classKey[index]}
            key={e}
          >
            {e}
          </div>
        );
      })}
    </div>
  );
};

const secondRowPrint = (setClass2, classKey2, getInputText) => {
  return (
    <div className="keyboard_container__item">
      {secondRowLetters.map((e, index) => {
        return (
          <div
            onClick={() => {
              getInputText(e);
              activeClass(setClass2, classKey2, index);
              setTimeout(() => {
                inactiveClass(setClass2, classKey2, index);
              }, 100);
            }}
            className={classKey2[index]}
            key={e}
          >
            {e}
          </div>
        );
      })}
    </div>
  );
};

const thirdRowPrint = (setClass3, classKey3, getInputText) => {
  return (
    <div className="keyboard_container__item">
      {thirdRowLetters.map((e, index) => {
        return (
          <div
            onClick={() => {
              getInputText(e);
              activeClass(setClass3, classKey3, index);
              setTimeout(() => {
                inactiveClass(setClass3, classKey3, index);
              }, 100);
            }}
            className={classKey3[index]}
            key={e}
          >
            {e}
          </div>
        );
      })}
    </div>
  );
};

export const Key = (getInputText) => {
  //States
  const [classKey, setClass] = useState(firstRowClass);
  const [classKey2, setClass2] = useState(secondRowClass);
  const [classKey3, setClass3] = useState(thirdRowClass);

  return (
    <div className="keyboard_contanier">
      {firstRowPrint(setClass, classKey, getInputText)}
      {secondRowPrint(setClass2, classKey2, getInputText)}
      {thirdRowPrint(setClass3, classKey3, getInputText)}
    </div>
  );
};

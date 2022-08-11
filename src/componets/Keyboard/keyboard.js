import { key } from "./../Buttons/key";
import { result } from "./../Result/result";

export const keyboard = () => {
  let firstRowLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  let secondRowLetters = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"];
  let thirdRowLetters = ["z", "x", "c", "v", "b", "n", "m"];
  //   let keyboardLetters = {
  //     firstRowLetters,
  //     secondRowLetters,
  //     thirdRowLetters,
  //   };
  // return (
  //   <div class="keyboard">
  //     <div class="result_container">
  //       <div class="result_contanier__value"></div>
  //       <div>{result()}</div>
  //     </div>

  //     <div class="keyboard_contanier">
  //       <div class="keyboard_container__item">
  //         {firstRowLetters.map((e) => {
  //           return (
  //             <div class="keyboard_container__item-value">
  //               {key({ item: e })}
  //             </div>
  //           );
  //         })}
  //       </div>
  //       <div class="keyboard_container__item">
  //         {firstRowLetters.map((e) => {
  //           return (
  //             <div class="keyboard_container__item-value">
  //               {key({ item: e })}
  //             </div>
  //           );
  //         })}
  //       </div>
  //       <div class="keyboard_container__item">
  //         {secondRowLetters.map((e) => {
  //           return (
  //             <div class="keyboard_container__item-value">
  //               {key({ item: e })}
  //             </div>
  //           );
  //         })}
  //       </div>
  //       <div class="keyboard_container__item">
  //         {thirdRowLetters.map((e) => {
  //           return (
  //             <div class="keyboard_container__item-value">
  //               {key({ item: e })}
  //             </div>
  //           );
  //         })}
  //       </div>
  //       <div>
  //         <h2>Keyboard</h2>
  //       </div>
  //     </div>
  //     <div></div>
  //   </div>
  // );
};

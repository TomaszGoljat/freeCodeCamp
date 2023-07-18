/*

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
rot13("SERR YBIR?") should decode to the string FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/


function rot13(str) {
  // Create an array filled with upper case letters:
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  // Create an array from the string:
  let strArr = str.split('');
  let result = [];

  /*
  console.log(alphabet);
  console.log(strArr);
  */
  
  // check the index of each letter:
  for (let i = 0; i < strArr.length; i++) {
    // Find index of a letter:
    let letterInd = alphabet.findIndex((element) => element == strArr[i]);
    // Check if index exists:
    if (letterInd > -1) {
     // console.log(letterInd);
      // if letterInd is lower than or equal 13, then:
        if (letterInd < 13) {
          console.log(`Letter: ${strArr[i]} has letter index of: ${letterInd}`)
          result.push(alphabet[letterInd+13]);
        } else {
          console.log(`Letter: ${strArr[i]} has letter index of: ${letterInd}`)
          result.push(alphabet[letterInd-13]);
        }
    } else {
      // if there's no index, just add the character to the result
      result.push(strArr[i]);
    }
  }
    //console.log(str);
    return result.join('');
  }
  
   console.log(rot13("ABCD EFO"));
   console.log(rot13("SERR PBQR PNZC"));
   rot13("SERR CVMMN!");
   rot13("SERR YBIR?");
   rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")

  /*
  letterInd - 
  */
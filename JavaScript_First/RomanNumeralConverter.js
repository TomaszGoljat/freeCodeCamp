

function convertToRoman(num) {
  // Create object to store data:
  let obj = {
    "M": 1000, 
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
  }
  // initialize result variable
  let result = "";
  // iterate through object
  for (const [key, value] of Object.entries(obj)) {
    // as long as num is higher or equal current object value: 
    while (num >= value) {
        // add Roman Numeral stored as a key in the object (obj) to current result
        result += key;
        // decrease num by current value
        num -= value;
        /* 
        Print out every taken step to create my result:
        console.log(`Current number ${num}, current result: ${result}, current key ${key}`);
        */
    }
  }
// return result
return result;
}

/*
M 	1000
CM 	900
D 	500
CD 	400
C 	100
XC 	90
L 	50
XL 	40
X 	10
IX 	9
V 	5
IV 	4
I 	1
*/
console.log(convertToRoman(2433));
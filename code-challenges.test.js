// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { match } = require("assert")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe ('coder', () => {
    it ('takes in a string and returns it coded', () => {
        expect (coder(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect (coder(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect (coder(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// FAIL  ./code-challenges.test.js
// coder
//   ✕ takes in a string and returns it coded

// ● coder › takes in a string and returns it coded

//   ReferenceError: coder is not defined

// b) Create the function that makes the test pass.

// PSEUDOCODE
// create fxn called coder that takes in a string and returns it coded
// input : string
// output : string with a as 4, e as 3, i as 1, and o as 0
// loop through string using for loop
// if i === e or E, i = 3

const coder = (str) => {
    string = str.split('')
    for (i=0; i < string.length; i++) {
        if (string[i] === 'e' || string[i] === 'E') {
            string.splice(i,1,'3')
        } else if (string[i] === 'a' || string[i] === 'A') {
            string.splice(i,1,'4')
        } else if (string[i] === 'i' || string[i] === 'I') {
            string.splice(i,1,'1')
        } else if (string[i] === 'o' || string[i] === 'O') {
            string.splice(i,1,'0')
        }
    }
    return string.join('')
}

// PASS  ./code-challenges.test.js
// coder
//   ✓ takes in a string and returns it coded (1 ms)

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe ('containsLetter', () => {
    it ('takes in an array of words and a single letter and returns an array of all the words containing that letter', () => {
        expect (containsLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect (containsLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// FAIL  ./code-challenges.test.js

// ● containsLetter › takes in an array of words and a single letter and returns an array of all the words containing that letter

//   ReferenceError: containsLetter is not defined

// b) Create the function that makes the test pass.

// PSEUDOCODE
// create fxn called containsLetter
// input: array and single letter
// output: array filtered with words that contain that single letter
// use filter method to get an output of array of only words containing a specific letter

const containsLetter = (arr, str) => {
    return arr.filter(value => value.toLowerCase().includes(str))
}

// PASS  ./code-challenges.test.js
// containsLetter
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that letter

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

describe ('fullHouse', () => {
    it ('takes in array of 5 numbers and determines whether it makes a full house or not', () => {
        expect (fullHouse(hand1)).toEqual(true)
        expect (fullHouse(hand2)).toEqual(false)
        expect (fullHouse(hand3)).toEqual(false)
        expect (fullHouse(hand4)).toEqual(true)
    })
})

// FAIL  ./code-challenges.test.js
// ● fullHouse › takes in array of 5 numbers and determines whether it makes a full house or not

//   ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.

// PSEUDOCODE
// create fxn called fullHouse
// input: array of 5 numbers
// output: true or false
// iterate through using for loop
// compare each index to the other indexes
// assign match1 to first index of array
// if current index = match1, push to empty arr1; if not, push to empty arr2
// use separate for loop for arr2
// assign match2 to first index of arr2
// if current index = match2, push to empty arr 3; if not, push to empty arr4
// if arr1 length is 2 and arr3 length is 3, true
// if arr1 length is 3 and arr3 length is 2, true
// otherwise, false

// const fullHouse = (arr) => {
//     let match1 = arr[0]
//     let arr1 = []
//     let arr2 = []
//     for (i=0; i < arr.length; i++) {
//         if (arr[i] === match1) {
//             arr1.push(arr[i])
//         } else {
//             arr2.push(arr[i])
//         }
//     }
//     let match2 = arr2[0]
//     let arr3 = []
//     let arr4 = []
//     for (j=0; j < arr2.length; j++) {
//         if (arr2[j] === match2) {
//             arr3.push(arr2[j])
//         } else {
//             arr4.push(arr2[j])
//         }
//     }
//     return (arr1.length === 2 && arr3.length === 3) || (arr1.length === 3 && arr3.length === 2) ? true : false
// }

// console.log(fullHouse([9, 8, 8, 8, 9]));

// let exarr = [1, 2, 3, 4, 5]
// let shifted = exarr.shift()
// console.log(shifted);

// PASS  ./code-challenges.test.js
// fullHouse
//   ✓ takes in array of 5 numbers and determines whether it makes a full house or not (3 ms)

// REFACTOR

// PSEUDOCODE
// create function fullHouse
// input: array of 5 numbers
// output: true if full house, false if not
// use .filter to get array of numbers matching index 0
// use .find to find the first occurrence of a number that does not match index 0
// use .filter again to get a separate array of number matching the output of .find
// if the first .filter array is a pair and the second .filter array is a three of a kind, return true
// if the first .filter array is a three of a kind and the second .filter array is a pair, return true
// else, return false

const fullHouse = (arr) => {
    let matchOne = arr.filter(value => value === arr[0])
    let secondMatch = arr.find(value => value !== arr[0])
    let matchTwo = arr.filter(value => value === secondMatch)
    return (matchOne.length === 2 && matchTwo.length === 3) || (matchOne.length === 3 && matchTwo.length === 2) ? true : false
}

// PASS  ./code-challenges.test.js
// fullHouse
//   ✓ takes in array of 5 numbers and determines whether it makes a full house or not
 //==================================================================
"use strict";

const str = "    test    secret   very secret    ";
console.log(str);

console.log("charAt");
const firstLetter = str.charAt(5);
console.log(firstLetter);
//=============
console.log("charCodeAt");
const firstLetterUniCode = str.charCodeAt(9);
console.log(firstLetterUniCode);
//=============
console.log("includes");
const hasLetter = str.includes("secr");
console.log(hasLetter);
//=============
console.log("trim");
const trimmed = str.trim();
console.log(trimmed);
//=============
console.log("makeStringCaps");
function makeStringCaps(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i].toUpperCase();
  }
  return result;
}
console.log(makeStringCaps(str));
//=============
console.log("toRandomCase");
function toRandomCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    Math.random() > 0.5
      ? (result += str[i].toUpperCase())
      : (result += str[i].toLowerCase());
  }
  return result;
}
console.log(toRandomCase(str));
//=============
const str2 = "Nikolay Petrovich Ovechkin";

console.log("replace");
const newStr = str.replace("secret", "null");
console.log(newStr);
//=============
console.log("split");
const strArr = str2.split("");
console.log(strArr);
//=============
console.log("join");
const str2Twin = strArr.join("");
console.log(str2Twin);
//=============

const str3 = "test secret very secret";

console.log("toJardenCase");
//1 вариант
function toJardenCase(str) {
  const words = str.split(" ");
  const wordsWithUpper = words.map((word) => {
    const firstLetter = word[0].toUpperCase();
    return firstLetter + word.slice(1);
  });
  const result = wordsWithUpper.join(" ");
  return result;
}

//2вариант
function toJardenCaseTwo(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(toJardenCase(str3));
console.log(toJardenCaseTwo(str3));
//=============

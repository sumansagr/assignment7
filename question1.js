console.log('----Join method----');

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(" and ");
console.log(text);


console.log('----filter method----');

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);


console.log('----map method----');

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newArr);


console.log('----reduce method----');

const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => {
previousValue + currentValue;
}
console.log(array1.reduce(reducer));  //1+2+3+4=10
console.log(array1.reduce(reducer, 5)); //5+1+2+3+4 =15

console.log('=================================================');

// function geoFindMe() {

//     if (!navigator.geolocation){
//      console.log("Geolocation is not supported by your browser");
//       return;
//     }
//     function success(position) {
//       var latitude  = position.coords.latitude;
//       var longitude = position.coords.longitude;
//       reverseGeocodingWithGoogle(longitude, latitude)
//     }
//     function error() {
//       console.log("Unable to retrieve your location");
//     }
//     navigator.geolocation.getCurrentPosition(success, error);
//   }

//   geoFindMe();

  console.log('===================================================');

  //length method
  let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;
console.log(length);  //26

//slice method
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
console.log(part);  //banana

//substring method
let str1 = "Apple, Banana, Kiwi";
let part1 = str1.substring(7, 13);
console.log(part1); //banana

//substr
let str2 = "Apple, Banana, Kiwi";
let part2 = str2.substr(7, 6);
console.log(part2); //banana

//replace method
let text1 = "Please visit Microsoft!";
let newText = text1.replace("Microsoft", "google");
console.log(newText);


// tio uppercase
let text3 = "Hello World!";
let text2 = text3.toUpperCase();
console.log(text2);

//to lower case

let text4 = "Hello World!";       // String
let text5 = text4.toLowerCase();
console.log(text5);

//concat
let first = "Hello";
let second = "World";
let res = first.concat(" ", second);
console.log(res);

//trim
let beforetrim = "      Hello World!      ";
let afterTrim = beforetrim.trim();
console.log(afterTrim);


//charat
let textword = "HELLO WORLD";
let char = textword.charAt(0);
console.log(char);

//charcodeat
let textcode = "HELLO WORLD";
let charcode = textcode.charCodeAt(0);
console.log(charcode);  //72

//split method
let textsplit = "HELLO WORLD";

console.log(textsplit.split(" ") ); 
console.log(textsplit.split(",") );
console.log('----------example for map method ');
const cars =[
    {
        carName : 'indica',
        price : 200000,
        companyName : 'tata'
    },
    {
        carName : 'phunto',
        price : 700000,
        companyName : 'fiat'
    },
    {
        carName : 'polo',
        price : 800000,
        companyName : 'volkswagan'
    }
]
const priceWithGst = cars.map((car)=>{
    const carCopy ={...car}
    carCopy.price =carCopy.price*0.02 + carCopy.price
    return carCopy
})
console.log(priceWithGst);
console.log(cars);
console.log('-----------------------example for filter method --------------');
const cars01 =[
    {
        carName : 'indica',
        price : 200000,
        companyName : 'tata'
    },
    {
        carName : 'phunto',
        price : 700000,
        companyName : 'fiat'
    },
    {
        carName : 'polo',
        price : 800000,
        companyName : 'volkswagan'
    }
]
const priceFilter = cars01.filter(cars01 => cars01.price <  700000)
console.log(cars01);
console.log(priceFilter);
console.log('----------------example for join---------------------------------');
const animals = ['cat','dog','sheep','cow']
const animalsJoin = animals.join('__')
console.log('animalsJoin', animalsJoin);
console.log('-----------------------String Methods --------------------------------');
console.log('--------touppercase----------');
 let str = 'hello'
 let str1 = str.toUpperCase('hello')
 console.log(str1);
 console.log('--------tolowercase----------');
 let lowerstr = 'Hello'
 let str2 = lowerstr.toLowerCase('Hello')
 console.log(str2);
 
 console.log('--------charAt----------');
 let lowerstr1 = 'Hello'
 let lowerstr2 = lowerstr1.charAt(2)
 console.log(lowerstr2);
 console.log('--------indexof----------');
 console.log(lowerstr2.indexOf('l',1));
 // concat 
 let ress =str.concat('',lowerstr,'everyone')
 console.log(ress);
 //includes
let ress2 =str.includes('every')
console.log(ress2);
//repalce
let string ='hi every one good night'
let stringreplace =string.replace('night','morning')
console.log(stringreplace);
//substr
let substr = string.substr(1,5)
console.log(substr);
//substring 
let substring = string.substring(1,4)
console.log(substring);
//trim 
let name ='                           vinaykuppana                '
let nametrim = name.trim()
console.log(nametrim);
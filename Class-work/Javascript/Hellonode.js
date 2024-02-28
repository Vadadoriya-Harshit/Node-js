console.log("Hello node js");
// in javascript array is a start from by default number index which is start from 0 
//and in the object we can use the customise index to declare object 
// so this is the main difference between array and object

 var myarr =['c++',"nodejs","react-js","php"];


 for (const key in myarr) {
//   console.log(key);
//   console.log(myarr[key]);
 };

//  myarr.forEach((el)=>{
//     console.log(el);
//  })

const map = myarr.map((el)=>{
  return el.length;
});

console.log(map);

const Search = myarr.filter((el)=>{
   return el!=="nodejs"
});
const findEl = myarr.find((el)=>{
   return el==="nodejs"
});

console.log(Search);
console.log(findEl);


 //every
 const number = [20, 30, 40, 50, 60, 70, 80, 90];

 const result = number.every(value => value >= 20);

 // console.log(result);

 //node js is only provide enviroment and if we need to make a  server we can use a framework named express js within node js

 //some

 const result2 = number.some(value => value > 80);

 console.log(result2);



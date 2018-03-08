const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach(num =>{
  double.push(num * 2);
})

console.log('forEach', double);

//map, filter, reduce

//MAP - use map over forEach
// const mapArray = array.map(num => {
//   return num * 2;
// })


//shorthand for the above function
const mapArray = array.map(num => num * 2);
console.log('map', mapArray);

//filter - returns true or false
// const filterArray = array.filter(num => {
//   return num > 5;
// })
//shorthand
const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);

//reduce - can combines filter and mapping
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);
console.log('reduce', reduceArray);

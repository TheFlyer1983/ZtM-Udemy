.padStart(targetLength, padString);
.padEnd(maxLength, padString);
// can accept upto 2 parameters. .padStart(targetLength,padString) - where padString is what character you want to use. Target length is the length of the final string.

const fun (a,b,c,d,) => {
  console.log(a);
}
fun(1,2,4,5,)

Object.values
Object.entries

let obj = {
  username0: 'Santa',
  username1: 'Rudolph',
  username2: 'Mr. Grinch'
}

Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
})

Object.values(obj).forEach(value=> {
  console.log(value);
})
Object.entries(obj).forEach(value=> {
  console.log(value);
})

Object.entries(obj).map(value=>{
  return value[1] + value[0].replace('username', '');
})

Async Await

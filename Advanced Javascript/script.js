const first = () => {
  const greet = 'Hi';
  const second = () => {
    alert(greet);
  }
  return second;
}

const newFunc = first();
newFunc();

//Closures a function ran. The function executed. It's never going to run again
// BUT it's going to remember that there are references to those variables
//so the chile scope always has access to the parent scope.

//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(3);

//Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);
// When calling compose, first brackets are the first parameter functions. The second brackets is the parameters of the sub function.
// In this example, a = 5, then when g is called you get 5+1, which then gets passed to f as 6, which then runs the sum function again and adds 1 to the number.

//Avoiding side effects, functional purity. Detrministic

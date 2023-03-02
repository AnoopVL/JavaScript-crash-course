/*--------------------------- Closure ---------------------------*/
// let a = 10
// function outer() {
//   let b = 20
//   function inner() {
//     let c = 30
//     console.log(a, b, c)
//   }
//   inner()
// }
// outer()
//o/p => 10 20 30

function outer() {
  let counter = 0
  function inner() {
    counter++
    console.log(counter)
  }
  inner()
}
outer()
outer()
//o/p => 1
//       1

function outer() {
  let counter = 0
  function inner() {
    counter++
    console.log(counter)
  }
  return inner
}
const fn = outer()
fn()
fn()
//o/p => 1
//       2

/*--------------------------- Function Currying ---------------------------*/
function sum(a, b, c) {
  return a + b + c
}
console.log(sum(2, 4, 5))
function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c)
      }
    }
  }
}

const curriedSum = curry(sum)
console.log(curriedSum(2)(9)(7))
//it can also be done as
const add2 = curriedSum(2)
const add3 = add2(9)
const add5 = add3(7)
//console.log(add5()) // o/p => NaN
console.log(add5) // o/p => 18

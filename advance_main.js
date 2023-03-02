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

function sayMyName(name) {
  console.log("My name is " + name)
}
sayMyName("Zeno")

const person = {
  name: "Kallappa",
  sayMyName: function () {
    console.log("My name is " + this.name)
  },
}
//person.sayMyName()

function sayMyName() {
  console.log("My name is " + this.name)
}
sayMyName.call(person)

function Person(name) {
  this.name = name
}
const p1 = new Person("Anoop")
const p2 = new Person("Zeno")

//console.log(p1.name, p2.name) //o/p => undefined undefined

/*--------------------------- Prototype ---------------------------*/
function Person(fname, lname) {
  this.firstName = fname
  this.LastName = lname
}

const person1 = new Person("Anoop", "Lanjekar")
const person2 = new Person("Zeno", "Lanjekar")

person1.getFullName = function () {
  return this.firstName + " " + this.LastName
}
console.log(person1.getFullName())
// o/p => Anoop Lanjekar

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.LastName
}
console.log(person1.getFullName())
console.log(person2.getFullName())
// o/p => Anoop Lanjekar
//        Zeno Lanjekar

/*--------------------------- Prototype inheritance ---------------------------*/
function isTheBest(fname, lname) {
  Person.call(this, fname, lname)
  this.isTheBest = true
}
isTheBest.prototype.isSuccessfull = function () {
  console.log("Is very successfull !!")
}
isTheBest.prototype = Object.create(Person.prototype)

const Anoop = new isTheBest("Anoop", "Lanjekar")
console.log(Anoop.getFullName())

/*--------------------------- class ---------------------------*/

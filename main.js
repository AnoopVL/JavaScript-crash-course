console.log("We are in main.js rn")

/*--------------------------- varibles ---------------------------*/

let age = 20
console.log("age = " + age)
age = 21
console.log("new age = " + age)

const value = 10
//value  = 40; -----------this is not allowed
console.log(value)

/*--------------------------- Date Types ---------------------------*/
//strings
const name = "Anoop"
const name1 = "Zeno"
//int and float
const int = 21
const float = 6.9
//boolean
const statement = true
//undefined
let result
console.log(result)
//null
const something = null
//complex data types
const person = {
  fname: "Anoop",
  lname: "Lanjekar",
  age: 20,
}
console.log(person.fname)
const rnumbers = [21, 34, 56, 90, 09]
console.log(rnumbers.length - 1)
console.log(rnumbers[rnumbers.length - 1])

/*--------------------------- Operators ---------------------------*/
let i = 5
const isEven = i % 2 == 0 ? i + " is even" : i + " is odd"
console.log(isEven)

/*--------------------------- type conversion ---------------------------*/
console.log(2 + "3")
console.log(true + "69")
console.log(false + 9) // o/p => 9
console.log(true + 9) // o/p => 10
console.log(Number("21")) // o/p => 21
console.log(Number(20)) // o/p => 20
console.log(parseInt("32")) // o/p => 32
console.log(String(true))
console.log(String(2))
console.log(String("Zeno"))
console.log((89).toString()) // o/p => 89
console.log(toString(2)) // o/p => [object Undefined]
let f = 2
console.log(f.toString()) // o/p => 2
console.log(Boolean(null)) // o/p => false
console.log(Boolean(something)) // o/p => false
console.log(Boolean(10)) // o/p => true
console.log(Boolean("10")) // o/p => true
console.log(Boolean("something")) // o/p => true

/*--------------------------- Equality ---------------------------*/
const var1 = 9
const var2 = "9"
console.log(var1 == var2)
console.log(var1 === var2)
const var3 = null
const var4 = undefined
console.log(var3 == var4)
console.log(var3 === var4)

/*--------------------------- Conditional Statements ---------------------------*/
const cnum = 9
if (cnum > 0) {
  console.log("The numbers is positive")
} else if (cnum < 0) {
  console.log("The number is negative")
} else {
  console.log("The number is zero")
}

const color = "yellow"
switch (color) {
  case "yellow":
    console.log("The color is yellow")
    break
  case "red":
    console.log("The color is red")
    break
  default:
    console.log("Not a valid color")
}

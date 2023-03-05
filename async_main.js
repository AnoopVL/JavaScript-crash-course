/*--------------------------- timeouts and intervals ---------------------------*/
// function greet() {
//   console.log("hello after 5 seconds")
// }
// setTimeout(greet, 5000)

// function greet1(name) {
//   console.log("hello " + name)
// }
// setTimeout(greet1, 4000, "Anoop")

// function greet2(name) {
//   console.log("Hello " + name)
// }
// setInterval(greet2, 2000, "Anoop")
// const intervalId = setInterval(greet2, 2000, "Anoop")
// clearInterval(intervalId)

/*--------------------------- callback function ---------------------------*/
function greet(name) {
  console.log("Hello " + name)
}
function greetAnoop(greetfn) {
  const name = "Anoop"
  greetfn(name)
}
greetAnoop(greet)

function greet(name) {
  console.log("Hello " + name)
}
function higherOrderFunction(callback) {
  const name = "Zeno"
  callback(name)
}
higherOrderFunction(greet)

/*--------------------------- Promises ---------------------------*/
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Bring Chapati !!")
  }, 3000)
  //})
  //const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Make chapati on your own !!")
  }, 3000)
})
const onfulfillment = () => {
  console.log(resolve)
  console.log("Set up the table !!")
}
const onRejection = () => {
  console.log(reject)
  console.log("Start making your own food !")
}
promise.then(onfulfillment)
promise.catch(onRejection)

// const onfulfillment = () => {
//   console.log(result)
//   console.log("Set up the table !!")
// }
// const onRejection = () => {
//   console.log(error)
//   console.log("Start making your own food !")
// }

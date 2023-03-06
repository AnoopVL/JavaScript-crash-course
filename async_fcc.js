let stocks = {
  Fruits: ["Mango", "watermelon", "chikkoo"],
  liquid: ["water", "milk"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
}
/*-------------------------------------- Promise --------------------------------------  */
let isShopOpen = true
//let isShopOpen = false

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work())
      }, time)
    } else {
      reject(console.log("Sorry, we are closed rn !!"))
    }
  })
}
order(2000, () => console.log(`${stocks.Fruits[2]} was selected !! `))
  .then(() => {
    return order(0000, () => console.log("Production has been started !!"))
  })
  .then(() => {
    return order(2000, () => console.log("Fruits are chopped !!"))
  })
  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were addded `)
    )
  })
  .then(() => {
    return order(1000, () => console.log("The machine was started !!"))
  })
  .then(() => {
    return order(2000, () => {
      console.log(`${stocks.holder[0]} was selected !!`)
    })
  })
  .then(() => {
    return order(3000, () => {
      console.log(
        `${stocks.toppings[0]} and ${stocks.toppings[1]} were added !!`
      )
    })
  })
  .then(() => {
    return order(1000, () => console.log("Your icecream is ready !!"))
  })

  .catch(() => {
    console.log("Customer left !")
  })
  .finally(() => {
    console.log("Day concluded !!")
  })

/*-------------------------------------- Callbacks --------------------------------------  */
// let order = (Fruit_name, call_production) => {
//   setTimeout(() => {
//     console.log(stocks.Fruits[Fruit_name] + " is selected")
//     call_production()
//   }, 2000)
// }
// let production = () => {
//   setTimeout(() => {
//     console.log("Production has started !!")
//     setTimeout(() => {
//       console.log("The fruits are being chopped !!")
//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added !!`)
//         setTimeout(() => {
//           console.log("The machine was started  !!")
//           setTimeout(() => {
//             console.log("The container is selected !!")
//             setTimeout(() => {
//               console.log(
//                 `${stocks.toppings[0]} and ${stocks.toppings[1]} were added  `
//               )
//               setTimeout(() => {
//                 console.log("Your icecream is ready !!")
//               }, 1000)
//             }, 3000)
//           }, 2000)
//         }, 1000)
//       }, 1000)
//     }, 2000)
//   }, 0000)
// }
// order(0, production)

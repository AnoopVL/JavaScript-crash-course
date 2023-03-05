let stocks = {
  Fruits: ["Mango", "watermelon", "chikkoo"],
  liquid: ["water", "milk"],
  toppings: ["chocolate", "peanuts"],
}
let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(stocks.Fruits[Fruit_name] + " is selected")
    call_production()
  }, 2000)
}
let production = () => {
  setTimeout(() => {
    console.log("Production has started !!")
    setTimeout(() => {
      console.log("The fruits are being chopped !!")
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added !!`)
        setTimeout(() => {
          console.log("The machine was started  !!")
          setTimeout(() => {
            console.log("The container is selected !!")
            setTimeout(() => {
              console.log(
                `${stocks.toppings[0]} and ${stocks.toppings[1]} were added  `
              )
              setTimeout(() => {
                console.log("Your icecream is ready !!")
              }, 1000)
            }, 3000)
          }, 2000)
        }, 1000)
      }, 1000)
    }, 2000)
  }, 0000)
}
order(0, production)

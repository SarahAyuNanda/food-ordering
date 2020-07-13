let order = ["Rice", "Fried Chicken", "Grilled Chicken", "Fried Duck", "Grilled Duck"]

console.log("            ORDER MENU            ")
console.log("----------------------------------")
getTotal(order)

function getTotal(order) {
    let total = 0
    for (let i = 0; i < order.length; i++) {
        food = order[i]
        price = getFood(food)
        total += price
    }
    console.log("----------------------------------")
    console.log(`Total\t\t\tRp.${total}`)
}

function getFood(food) {
    let price
    switch (food) {
        case "Rice":
            price = 5000
            console.log(`${food}\t\t\tRp.${price}`)
            return price
        case "Fried Chicken":
            price = 15000
            console.log(`${food}\t\tRp.${price}`)
            return price
        case "Grilled Chicken":
            price = 18000
            console.log(`${food}\t\tRp.${price}`)
            return price
        case "Fried Duck":
            price = 25000
            console.log(`${food}\t\tRp.${price}`)
            return price
        case "Grilled Duck":
            price = 30000
            console.log(`${food}\t\tRp.${price}`)
            return price
        default:
            price = 0
            return price
    }
}

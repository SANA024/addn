const currentInventory = [
    { name: "HTC", stock: 25 },
    { name: "Nokia", stock: 1000 },
    { name: "Samsung", stock: 50 },
    { name: "Sony", stock: 10 },
    { name: "Apple", stock: 15 },
    { name: "LG", stock: 5 }
]

const totalCount=currentInventory.reduce(functin(prevValue,currentValue){
    prevValue += currentValue.stock
    return prevValue
},0)
console.log(totalCount)

let car = {
    name : "mustange",
    model : 1969,
    color : "black"
}

let jsonstring = JSON.stringify(car)

let jsonPerse = JSON.parse(jsonstring)

console.log(jsonPerse);

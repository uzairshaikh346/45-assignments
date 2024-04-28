function addToArry(num : number[]){
    return num.reduce((curr , total) => curr + total)
}

let add = [2,3,4,5]
console.log(addToArry(add));
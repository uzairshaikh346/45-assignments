function makeAdd(valueToAdd : number):(num:number) => number {
    return function(num:number):number {
        return num + valueToAdd;
    }
}

let addNine = makeAdd(9)

console.log(addNine(5))
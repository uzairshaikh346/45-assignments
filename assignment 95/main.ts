function greater10 (num : number[]){
    return num.filter(num => num > 10)
}

let numbers : number[] = [6,3,1,14,2,35,8,13]

console.log(greater10(numbers));

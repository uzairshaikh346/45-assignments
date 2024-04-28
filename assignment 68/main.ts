function roundNum(num1 : number, num2 : number){
    return Math.round((num1 * num2) *100) / 100;
}

console.log(roundNum(0.2 , 0.3))

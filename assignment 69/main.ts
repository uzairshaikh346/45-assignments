function dividedAndRemainder(divident:number , dividore:number){

    let quotient = Math.floor(divident / dividore);
    let remainder = divident % dividore;
    
    let remAndDiv = {quotient , remainder}

    return remAndDiv
}


let calculate = dividedAndRemainder(7,2)

console.log(calculate);

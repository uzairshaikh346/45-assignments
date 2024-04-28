function calculateArea(height:number,width:number){
    return height * width
}

// reflect function into arrow function

let CalculateArea = (height : number , width : number) => height * width

// using the arrow function
console.log(CalculateArea(2,3))
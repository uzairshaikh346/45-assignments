const arrfunct = (...numbers : number[]) => 
    numbers.reduce((total,current) => total + current)


console.log(arrfunct(3,4,5,6));

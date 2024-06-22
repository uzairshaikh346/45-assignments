function executecallback(
    callback : (arg1 : number , arg2 : number) => void,
    arg1 : number,
    arg2 : number,
): void {
    callback(arg1, arg2);
}

const add = (a:number, b:number) => {
    console.log(a + b)
}

executecallback(add, 2 , 5)
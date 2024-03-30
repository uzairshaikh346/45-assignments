type car = {
    manufacture:string,
    model:string
    [key:string]:any;
}
function createcar(manufacture:string, model:string, optional:Record<string,any>){
    return{
        manufacture,
        model,
        ...optional
}
}
const mycar = createcar ("honda","civic",{color: "black", year: 2023})
console.log(mycar);

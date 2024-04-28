function objectwithdynamickey(key:string,value:string){
    let dynamicObject : any = {};

    dynamicObject[key] = value;
    return dynamicObject
}
let userPreference = objectwithdynamickey("sun" , "moon")
console.log(userPreference);

// exercise 24
let name1 = "ABDUL SATTAR EHDI";
let name2 = "Abdul sattar ehdi";
let name3 = "abdul sattar ehdi";

if(name1 == name2){
    console.log("names are equal");
    
} else {
    console.log("names are not equal");
    
}

// part 3
if(name1 != name3){
    console.log("names are not equal");
    
}else {
    console.log("names are equalu");
}

// part 3

let num1 = 5
let num2 = 10
let num3 = 15

if(num1 > num2){
console.log(`${num1} is greater than ${num2}`);

}else if (num1 == num2){
    console.log(`${num1} is equal to ${num2}`);
    
}else if(num1 < num2){
    console.log(`${num2} is greater than ${num2}`);
    
}else if(num1 != num2) {
    console.log(`${num1} is not equal to ${num2}`);
    
}
// part 4
if(num1 != num2 && num2 != num3){
    console.log("pakistan zindabad");
    
}
else if (num1 == num2 || num2 <= num3){
    console.log("govt sindh zindabad");
    
}
// part 5
let pakistan = ["karachi","lahore","peshawar","multan"];

if(pakistan.includes("karachi")){
    console.log("karachi is in the pakistan");
    
}else {
    console.log("karachi isn't in tha pakistan")
    
}

// part 6
if(pakistan.includes("Paris")){
    console.log("Paris is in the pakistan")
}else{console.log("paris is not is the pakistan")}
let mehmaan :string[] = ["ayaaz","daniyal","aamir","huraira"];

let canNotAttend:string = "daniyal";
// console.log(`${canNotAttend} ko kuch nahi aata`);



let nayamehmaan : string = "muzammil";
mehmaan [mehmaan.indexOf(canNotAttend)] = nayamehmaan;
// console.log(mehmaan);

// mehmaan.forEach(dost => {
//     console.log(`asalamoalaikum ${dost} apko aj meri taraf se BarBQ ki dawat hai.`)
// });
 
// from here exercise 16 started;

// mehmaan.forEach(dost => {
//     console.log(`${dost} bhai party thori bari hogai hai mujhe ek bari table mili hai.`)
// })
// adding a new person is start
mehmaan.unshift("anas");
// adding a new person in middle
mehmaan.splice(2, 0, "farhan");
// adding a new person in last
mehmaan.push("farooq");
// console.log(mehmaan);
// printing a new msg

// mehmaan.forEach(dost => {
//     console.log(`${dost} bhai party me kaafi accha khana hai.`);
    
// })

// exercise no 17 started

console.log("sorry bhaiyo sirf 2 log hi aasakty hen.");

while ( mehmaan.length > 2){
    const remove_guest = mehmaan.pop();
    if (remove_guest){
        console.log(`sorry mere piyaary bhai ${remove_guest} me apko bula nahi saka.`);
        
    }
}
console.log("final mehmaano ki list :", mehmaan);
 
// print message to the people who still in the list,
mehmaan.forEach(dost => {
    console.log(`${dost} ap ko dawat hai`)
})
 
while ( mehmaan.length > 0){
    const remove_guest = mehmaan.pop()
    if (mehmaan.length = 0){
        console.log(mehmaan);
        
    }
    
}

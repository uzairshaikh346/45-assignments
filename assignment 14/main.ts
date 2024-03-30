let mehmaan :string[] = ["ayaaz","daniyal","aamir","huraira"];

let canNotAttend:string = "daniyal";
// console.log(`${canNotAttend} ko kuch nahi aata`);



let nayamehmaan : string = "muzammil";
mehmaan [mehmaan.indexOf(canNotAttend)] = nayamehmaan;
// console.log(mehmaan);

mehmaan.forEach(dost => {
    console.log(`asalamoalaikum ${dost} apko aj meri taraf se BarBQ ki dawat hai.`)
});
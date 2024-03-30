var mehmaan = ["ayaaz", "daniyal", "aamir", "huraira"];
var canNotAttend = "daniyal";
// console.log(`${canNotAttend} ko kuch nahi aata`);
var nayamehmaan = "muzammil";
mehmaan[mehmaan.indexOf(canNotAttend)] = nayamehmaan;
// console.log(mehmaan);
// mehmaan.forEach(dost => {
//     console.log(`asalamoalaikum ${dost} apko aj meri taraf se BarBQ ki dawat hai.`)
// });
// from here exercise 16 started;
mehmaan.forEach(function (dost) {
    console.log("".concat(dost, " bhai party thori bari hogai hai mujhe ek bari table mili hai."));
});
// adding a new person is start
mehmaan.unshift("anas");
// adding a new person in middle
mehmaan.splice(2, 0, "farhan");
// adding a new person in last
mehmaan.push("farooq");
console.log(mehmaan);
// printing a new msg
mehmaan.forEach(function (dost) {
    console.log("".concat(dost, " bhai party me kaafi accha khana hai."));
});

var mehmaan = ["ayaaz", "daniyal", "aamir", "huraira"];
var canNotAttend = "daniyal";
// console.log(`${canNotAttend} ko kuch nahi aata`);
var nayamehmaan = "muzammil";
mehmaan[mehmaan.indexOf(canNotAttend)] = nayamehmaan;
// console.log(mehmaan);
mehmaan.forEach(function (dost) {
    console.log("asalamoalaikum ".concat(dost, " apko aj meri taraf se BarBQ ki dawat hai."));
});

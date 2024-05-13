"use strict";
function logUntilVowel(str) {
    const vowels = "AIOUaiou";
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log(`First vowel found ${char}`);
            break;
        }
        console.log(char);
    }
}
logUntilVowel("hsdgaki");

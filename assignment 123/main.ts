function logUntilVowel(str : string){
    const vowels = "AIOUaiou";
    for(const char of str){
        if(vowels.includes(char)){
            console.log(`First vowel found ${char}`);
            break;
            
        }
    console.log(char);
    }
}

logUntilVowel("hsdgaki")
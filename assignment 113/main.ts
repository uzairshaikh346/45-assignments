const countries = new Map<string, string>();
countries.set("USA", "Washington, D.C."); 
countries.set("France", "Paris"); 
countries.set("Japan", "Tokyo"); 
countries.set("canada","canada")

// console.log(countries);

function logCapitalOfCanada(countries : Map<string,string>){
    if(countries.has("canada")){
        console.log(`The capital of canada is ${countries.get("canada")}`);
        
    }else{
        console.log(`Canada is not in the map`);
        
    }
}

logCapitalOfCanada(countries);

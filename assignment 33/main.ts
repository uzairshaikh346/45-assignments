let numbrs = [1,2,3,4,5,6,7,8,9]
for(let i = 0; i < numbrs.length ; i++){
    if(numbrs[i] === 1){
        console.log(`${numbrs[i]}st`);
        
    }
    else if(numbrs[i] === 2){
        console.log(`${numbrs[i]}nd`);
        
    }
    else if(numbrs[i] === 3){
        console.log(`${numbrs[i]}rd`);
    }
    else{
        console.log(`${numbrs[i]}th`);
        
    }
    
}
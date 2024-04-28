{
    let blocklet = 'visible only in blockscope';
    let blockconst = "also only in blockscope";
    console.log(blocklet);
    console.log(blockconst);
    
}

try {
    console.log(blocklet);
    
} catch(error) {
    console.log(`"blocklet" is not accessible outside the blockscope`);
    
}

try {
    console.log(blockconst);
    
} catch(error) {
    console.log(`"blockconst" is not accessible outside the blockscope`);
    
}


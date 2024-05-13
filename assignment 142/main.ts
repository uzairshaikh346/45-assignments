const hellopromise = new Promise<string>((resolve) =>{
    
    setTimeout(() => { resolve("Hello, World!"); }, 50000); 
})

hellopromise.then((message) => console.log(message));

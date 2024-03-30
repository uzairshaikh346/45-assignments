let userNames : string[] = ["admin","ayaz","amir","muzammil"]
for(let username of userNames){
    if(username === "admin"){
     console.log("hello admin, how are u feeling today?");
     
    }else {
        console.log(`hello ${username} hope u complete the work?`);
        
    }
}
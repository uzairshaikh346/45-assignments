function make_great(magician:string[]){
    magician.forEach(magician => {
        console.log(`The great ${magician}`);
        
    })
}
function show_magicians(array:string[]){
    for(let i = 0 ; i < array.length ; i++){
        console.log(array[i]);
        
    }
}

let magicians : string[] = ["junaid bangali","asim siraiki","abulala","pandit raamdev"]


show_magicians(magicians)
make_great(magicians)
function show_magicians(array:string[]){
    array.forEach(a => {
        console.log(a);
        
    })
}
let magicians : string[] = ["junaid bangali","asim siraiki","abulala","pandit raamdev"]
// show_magicians(magicians)

// exercise 42
function make_great(magician:string[]){
    magician.forEach(magician => {
        console.log(`The great ${magician}`);
        
    })
}
 
make_great(magicians)

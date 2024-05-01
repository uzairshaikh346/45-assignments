const students = new Map<string,string>();
students.set("1","uzair");
students.set("2","Ayaz");
students.set("3","Amir");


students.forEach((name , id)=> {
    console.log(`student id : ${id} , Student name : ${name}`);
    
})



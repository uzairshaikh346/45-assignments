function getCurrentDate():string{
    let now = new Date
    let month = String(now.getDate()).padStart(2,"0")
    let year = String(now.getFullYear())
    let day = String(now.getDate()).padStart(2,'0')

    return `${day}-${month}-${year}`;
    
}

console.log(getCurrentDate());
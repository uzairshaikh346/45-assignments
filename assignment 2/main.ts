let personename:string = "Muhammad uzair"

let personenameinuppercase = personename.toUpperCase()
let personenameinlowercase = personename.toLowerCase()
let titlecase = personename.replace(/\b\w/g, c => c.toUpperCase())
console.log("ToUpperCase",personenameinuppercase)
console.log("ToLowerCase",personenameinlowercase)
console.log("ToTitleCase",titlecase)
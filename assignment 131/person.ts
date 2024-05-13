export class person {
    Name: string

    constructor(Name:string){
        this.Name = Name
    }
    greet(){
        console.log(`hello my name is ${this.Name}`);
        
    }
}
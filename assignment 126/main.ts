let obj = {
    name : "uzair",
    getName : function(){
        console.log(this.name);

        const getname = () => {
            console.log(this.name);
            
        }
        getname()
    }
}

obj.getName()



class Parent {

    constructor(){
        this.fatherame= "schwerzngger";
    }
}
class Child extends Parent{

    constructor(name){
        super();
        this.name=name;
    }
    getFullName(){
        return this.name +" "+this.fatherame;
    }
}


const baby = new Child("Yana");
const baby2= new Child("Tom");

console.log(baby.getFullName());
console.log(baby2) 
class student {
    constructor(sId, sName ){

        this.id = sId;
        this.name = sName;
        this.school= "National Ideal";

    }

}

const student1 = new student(12, "shuvo");
const student2 = new student(10, "mahiya");
const student3 = new student (29 ,"Bappi");


console.log( student1, student2, student3);
console.log( student1.id, student2.id, student3.name);



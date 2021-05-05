class Student{
    constructor(sID, sName) {
        this.id = sID;
        this.name = sName;
        this.school = "kader Molla high School";
    }
}
const student1 = new Student(18, "Kolim Uddin");
const student2 = new Student(22, "Kuddus Boyati");
console.log(student1, student2);

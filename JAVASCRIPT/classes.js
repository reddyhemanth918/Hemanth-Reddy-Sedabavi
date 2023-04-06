class Student{
    constructor(sno,name){
        this.sno=sno
        this.name=name
    }

    display(){
        console.log(this.sno,this.name)
    }
}

a=new Student(1,'Hemanth')
b=new Student(2,'Reddy')
a.display()
b.display()
function Student(sno,name){
    this.sno = sno
    this.name = name

    console.log(this)
    //console.log(name)
}
/*
Student.prototype.display = function() {
    console.log("Sno: "+this.sno + "Name:"+this.name)
}
*/
a=new Student(1,'Hemanth')
b=new Student(2,'Reddy')
//a.display()
//b.display()
//Hemanth Reddy
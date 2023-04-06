class Info{
    constructor(data){
        this.data = data
    }

    display(){
        console.log(this.data,"is the data")
    }

    changeIt(){
       /* giveNewData(function(value){
            this.data=value
        }.bind(this)) */

        giveNewData((value)=> this.data=value)
    }
}

function giveNewData(logic){
    let x=["India","Earth","Asia","Soccer","Chess","Prime"]

    logic(x[Math.floor(Math.random()*6)])
}

obj = new Info("Cricket")
obj.display()
obj.changeIt()
obj.display()
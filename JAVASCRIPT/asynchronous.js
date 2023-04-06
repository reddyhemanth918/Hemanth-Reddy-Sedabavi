
function giveData(){


    setTimeout(()=>{
        console.log("PROCESSING")
        return "INDIA" ;
    }, 3000)
}

info=giveData()

console.log("SOMETHINGELSE")

console.log(info)
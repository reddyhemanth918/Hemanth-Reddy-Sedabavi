function giveData(){
    return new Promise(
        function(resolve,reject){
            setTimeout(()=>{
                console.log("PROCESSING")
                resolve("INDIA") ;
            }, 3000)
        }
    )


    
}
result = giveData()

result.then(
    (success) => console.log("DATA IS", success),
    (error)=> console.log(error)
)
console.log("SOMETHING ELSE")
//console.log(result)
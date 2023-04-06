function filterThis(arrayFilter, array){
    result=[]
    for (let x of array)
      if (arrayFilter(x))
         result.push(x)
    return result
}

candidates = [
    {sno:1,name:"Hemanth",skills:['c++','pyhton','javascript']},
    {sno:2,name:"Reddy",skills:['c++','pyhton','javascript','C#']},
    {sno:3,name:"Sedabavi",skills:['c++','pyhton','javascript','Angular','React']},
    {sno:4,name:"Harthick",skills:['c++','pyhton','javascript','Android','IOS','Angular']},
    {sno:5,name:"Ekanth",skills:['c++','pyhton','javascript','Android','IOS','mongoDB']}
]
//using filterThis Function write a callback such that it filters candidates
//who has either C# or angular as skills regardless of case [data need to be compared regardless of case] 

// Method 1

/*
function hasSkill(skill) {
    return function(candidate) {
      return candidate.skills.includes(skill);
    }
  }
  
  const filteredCandidates = filterThis(hasSkill('Angular'), candidates);
  console.log(filteredCandidates);
  
*/

result = filterThis(
    function(candidate){
        for (let x of candidate.skills)
            if(x.toUpperCase()=="ANGULAR" || x.toUpperCase()=="C#")
                return true
        return false
    }, candidates
)
console.log(result)


/*
fresult = filterThis(function(x){
    return x%2==0? false: true
}, [23,736,377,288,33,31,]

 console.log(fresult)

 */
                
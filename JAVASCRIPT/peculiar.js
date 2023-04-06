a=[34,34,"Hemanth",{sno:1,name:"Reddy",city:"Kuppam"}]

console.log(typeof(a[3]))

console.log(a.length)
a[-90]="Harthick"

console.log(a.length)

/*
for(let x in a)
console.log(x)  */

for(let x of a)
console.log(x)
// Array: Javasript an arrayis collection of Objects

// creacting a array
a=[34,34,31,56,76,45,56,45,2,45.6,true,"Hemanth Reddy"]

console.log(a)
// no slicing in javascript
// rather than we use indexing
console.log(a[2])

//finding the length
console.log(a.length)

//we not get  error if index is out of range
console.log(a[12])//Result ids undefined

// it adds the new element even if it is out of index
a[105]=9090

console.log(a)
console.log(a.length)
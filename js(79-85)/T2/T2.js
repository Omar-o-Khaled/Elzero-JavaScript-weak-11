// 1
let objMethodOne={
    property:1,
}
console.log(objMethodOne.property); // "Method One"

// 2
let objMethodTwo=new Object();
objMethodTwo.property=2;
console.log(objMethodTwo.property); // "Method Two"

// 3
let objMethodThree=Object.create(objMethodOne)
objMethodThree.property=3;
console.log(objMethodThree.property); // "Method Three"

// 4
let objMethodFour=Object.assign({},{property:4})
console.log(objMethodFour.property); // "Method Four"
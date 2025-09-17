let n1 = 10;
let n2 = 5;
let res = n1 + n2;
console.log("the result is : " + res);


let age = 20;
if (age < 18) {
    console.log("You are a minor");
} else if (age === 18) {
    console.log("You have just reached adulthood");
} else {
    console.log("You are an adult");
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    console.log(i);
}

function addition(a,b) {
    return a + b
}
function subtraction(a,b) {
    return a - b
}
let res2 = addition(4,7);
let res3 = subtraction(9,3);
console.log("the addition is: " + res2);
console.log("the subtraction is: " + res3);
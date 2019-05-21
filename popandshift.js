var array=[1,2,3,4,5,6];
var array1=[1,2,3,4,5,6];
var array2=[1,2,3,4,5,6];
var array3=[5,4,3,2,1];

console.log(array);
console.log(array1);
console.log(array2);
console.log(array3);

console.log("lets manipulate this shit");

array.shift();
array1.pop();
array2.unshift("admin");
array3.push(12,13);

console.log("shift  " + array);
console.log("pop  " + array1);
console.log("unshift  " + array2);
console.log("push  " + array3);

const prompt=require('prompt-sync')();
const a=prompt("enter a num:  ");
 let b=a.toString().split('')
 let m=b.reverse().join(' ');
console.log(m);
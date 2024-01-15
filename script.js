const prompt=require('prompt-sync')();
var b= prompt("Array Size:  ")
var a=[];
for(let i=0;i<b;i++)
{
    a[i]=prompt("add elements: ")
}
var c=prompt("Rotation: ")
var mo=[];
function Rotate(a,c){
    const n=a.length;
    c=c-1;
    c=c%n;
    for(let i=0;i<n;i++)
    {
      mo[(i+c)%n]=a[i];
    }
    for(let i=0;i<n;i++)
    {
        a[i]=mo[i];
    }
    return a;
}
console.log(Rotate(a,c));
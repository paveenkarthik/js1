const prompt=require('prompt-sync')()
var a=prompt('Enter:   ')
var b=[];
for(let i=0;i<a.length;i++)
{
    for(let j=i+1;j<=a.length;j++)
    {
        b.push(a.slice(i,j))
    }
}
console.log(b);
const prompt=require('prompt-sync')()
const a=prompt("length: ")
const b=[]
for(let i=0;i<a;i++)
{
    b[i]=prompt();
}
let c=[];
   for(let i=0;i<a;i++){
    const k=b[i].length;
    if(k%2==0)
    c.push(b[i]);
   }
   console.log(c.join(' '));
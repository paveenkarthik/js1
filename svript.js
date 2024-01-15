function anagram(a,b){
    a=a.split('').sort().join('')
    b=b.split('').sort().join('')
    return a===b;
}
const prompt=require('prompt-sync')();
var a=prompt("1stString")
var b=prompt("2ndString")
if(anagram(a,b)==true)
{
    console.log("anagram");
}
else
{
    console.log("not anagram");

}
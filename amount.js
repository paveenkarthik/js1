const prompt=require('prompt-sync')();
let a=prompt("coin: ")
let b=[25,10,5,2,1];
console.log(amount(a,b));
function amount(a,b){
    
    const k=[];
            while(a!=0){
            if( a>=25){
                a=a-25;
                k.push(25);
            }
            else if(a>=10)
            {
                a=a-10;
                k.push(10);
            }
            else if(a>=5)
            {
                k.push(5);
                a=a-5;
            }
            else if(a>=2){
                a=a-2;
                k.push(2);
            }
            else{
                a=a-1;
                k.push(1);
            }
        }
}

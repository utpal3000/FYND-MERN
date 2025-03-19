function hello(n, display){
    console.log(n)
    display()
}

let x = 100
const display=()=>{console.log('This is display')}

hello(x,display);
a=20
b=30;
console.log(((a,b)=>a+b)(a,b));
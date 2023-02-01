const print = name =>{
    return `hi ${name}`;
}
console.log(print('charitarth'));

const print1 = name => `i play ${name}`;
console.log(print1('football'));

var name1 ="T Charitarth";
console.log("My name is : " +name1);
name1="Ashish Preetham";
console.log(`he is :${name1}`);

function sum(a,b)
{
    console.log(arguments);
    let res=0;
    for(let i in arguments)
    {
        res+=arguments[i];
    }
    return res;
}
console.log(sum(10,20,30,40));
console.log(sum("cvr",10,20,30,40));
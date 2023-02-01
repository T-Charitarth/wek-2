function sum(name , ...args)
{
    console.log("Name is : ", name)
    let res=0;
    for(let i in args)
    {
        res+=args[i];
      
    }
    return res;
}
console.log(sum("CVR",10,20,30));
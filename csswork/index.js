const promise=new Promise((resolve,reject)=>{
    let a=12
if (a>10){
    resolve({Name:"Rahul", branch:"AIMLCSE"})
}
else{
   reject("rejected")
}
});

promise.then((msg)=>console.log(msg.Name)).catch(error=>{console.log(error)});
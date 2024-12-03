console.log("Hello Fetch");
function fetchData(){
    const response=fetch("https://dummyjson.com/recipes");
response.then(data=>{
    console.log(data)
    data.json().then((res)=>{
        let output=`${res.recipes[0].id+ " " +res.recipes[0].name+ " "+res.recipes[0].ingredients}`
        id1.innerText=(res.recipes[0].id)
        name1.innerText=(res.recipes[0].name)
        ingredients1.innerText=(res.recipes[0].ingredients)
        id2.innerText=(res.recipes[1].id)
        name2.innerText=(res.recipes[1].name)
        ingredients2.innerText=(res.recipes[1].ingredients)
        text.innerText=(output);
        console.log(res.recipes[20].name);
        console.log(res.recipes)
    })
})
.catch(error=>console.log(error))
.finally(()=>console.log("HI,finally closed all resources"))

}
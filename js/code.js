fetch("../data/data.json")
.then((res)=>{
    return res.json();
})
//Explains the data I'm returning
.then((data)=> {
    let laptop = data.laptop;
    console.table(laptop);
})



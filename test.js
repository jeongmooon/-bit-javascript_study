const a = 1;
let b;
console.log("a의 값은",a);
console.log("b의 값은",b);

//a = 2;

b ="문자";
console.log("변화된 b의 값은",b);


fn_axios(async(B_no)=>{
    const status = "true";
    await axios.get('/board').then((res)=>{
        console.log(res.data);
    }).catch((e)=>{
        console.log(e)
    })
    console.log("")
})
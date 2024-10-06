const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');

app.use(cors());
app.use(bodyparser());

let users = []
let stats = []

app.get('/',(req,res)=>{
    
    res.send("Active server");
});





const questions = [['Print numbers from A to B'
    ,'print sum of numbers from A to B'
    ,'print Evens from A to B'
    ,'print sum of evens from A to B'],

    ['print factorial of a Number'
    ,'print factors of a number',
    'print sum of factors of a number'],
    
    ['print count of factors',
    'prime check', 
    'prime check optimization (N/2)',
    'print check optimization II (Sqrt(N)) ...Understand why it works',
    'print prime numbers from A to B'] , 
    
    ['print number of digits in a Number','print sum of digits in a Number','print sum of even digits in a Number','print count of odd digits in a Number'],
    ['print "Toxic" if Number has any prime digit in it.','print reverse of a Number']];


app.post("/getname",(req,res)=>{

    console.log("get name ",req.body);
    console.log("get name users currently",users);
    

    const name = users.filter((item)=>{
        return item.username==req.body.user;
    })

    console.log(name);

    res.json({name:name[0]})
})


app.post("/login",(req,res)=>{

    console.log("logging in ",req.body);

    const profile = users.filter((item)=>{
        return item.username==req.body.username && item.password == req.body.password;
    })

    console.log(profile);
    res.json({profile});

});


app.post("/activeday",(req,res)=>{

    console.log("72",req.body.user);
    const username = req.body.user;

    let day = 0;
    for(let i = 0;i<users.length;i++)
    {
        if(users[i].username==username)
        {
            console.log("79",users[i].active_day);
            day = users[i].active_day;
                }
    }
    
    res.json({active_day:day});

})


app.post("/getquestions",(req,res)=>{

    console.log("Welcome ",req.body)
        let active_day = req.body.active_day;
        console.log(active_day,"94");
        
        const que = questions[active_day];
        console.log({questions:que});
        
        res.json({questions:que,ok:true});
})

app.post('/register',(req,res)=>{
    console.log(req.body);
    const {name,username,password}  = req.body;
    users.push({name,username,password,rank:"Awaken Beast",date:'10/4/2024',active_day:0});
    console.log(users);
    res.json({name,username,password,rank:"Awaken Beast",date:'10/4/2024',active_day:0})
})

app.post("/increment",(req,res)=>{
    console.log("Incrementing")
    const username = req.body.username;
    console.log(username+" is this");
    
    for(let i = 0;i<users.length;i++)
    {
        if(users[i].username == username)
        {
            users[i].active_day+=1;
            break;
        }
    }
    console.log(users);
})

app.listen(3001,()=>{
    console.log("Server wokring");
    
})
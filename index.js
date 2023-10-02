const express=require('express');
const app=express();
const port=8080;
const jwt=require('jsonwebtoken');

app.get('/',(req,res)=>{
    res.json({
      " message":'<h1>happy journey 3....</h1>'
    })
   // res.send('<h1>happy journey 3.....git ..</h1>')
});
app.post('/tokengenerate',(req,res)=>{
    const user={
        id:1211,
        username:'jan2023',
        email:'yadav1519abhishek@gmail.com',

    }
    jwt.sign( user , 'secret', function(err, token) {
        if(err){
            res.statusCode(403);
        }
        else{
            token

        }
      });

})



app.listen(port,function(err){
    if(err){
        console.log('error',err);
        return;
    }
    console.log("server is running up ?");
    
});
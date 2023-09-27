const express=require('express');
const app=express();
const port=8080;

app.get('/',(req,res)=>{
    res.json({
      " message":'<h1>happy journey 3....</h1>'
    })
   // res.send('<h1>happy journey 3.....git ..</h1>')
});



app.listen(port,function(err){
    if(err){
        console.log('error',err);
        return;
    }
    console.log("server is running up88 ?");
    
});
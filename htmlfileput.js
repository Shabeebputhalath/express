const express=require('express');
const app=express();
const path=require('path');

app.use(function(req,res,next){  // Middleware function to log the request URL for every incoming request to the server this will be executed for every request to the server this  use for logging the request URL for debugging purposes or to track the incoming requests to the server
    console.log(' start Request URL:', req.originalUrl);
    next();
});

app.get('/signup',(req,res,next)=>{
    res.sendFile(path.join(__dirname, '/signup.html'));
    console.log('middleware for /signup route');
    next();
});
app.use(function(req,res){  
    console.log('end of the middleware stack');
    
});
app.post('/signup',(req,res)=>{
    res.send('Signup successful!');
});

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
    //console.log(__dirname); print the current directory path
    //console.log(__filename); print the current file path
});
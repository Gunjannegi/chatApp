const express = require('express');
const login = express();
const bodyParser = require('body-parser');
login.use(bodyParser.urlencoded({ extended: true }));
login.get('/login',(req,res,next)=>{
    res.send("<form action='/login' method='POST' onsubmit=localStorage.setItem('username',document.getElementById('username').value)><input id='username' type='text' name='title'/><button type='submit'>Login</button></form>")
    
})
login.post('/login',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})
module.exports = login;
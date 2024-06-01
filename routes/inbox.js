const express = require('express');
const inbox = express();
const bodyParser = require("body-parser");
const fs = require('fs');
inbox.use(bodyParser.urlencoded({extended:false}));

inbox.get('/',(req,res,next)=>{
    fs.readFile('username.txt',(err,data)=>{
        if(err){
            data = 'No chats Exists'
        }
        res.send(`
        ${data}<form action='/' method='POST' onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
            <input id='message' name='message' placeholder='message'/>
        <input type='hidden' name='username' id='username'/>
        <button type='submit'>Send</button></form>`)
    })
   
})
inbox.post('/',(req,res,next)=>{
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("username.txt",`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>
    err?console.log(err):res.redirect('/'))
})

module.exports = inbox;
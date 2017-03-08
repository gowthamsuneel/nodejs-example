var app=require('express');

app.get('/', function(req,res) {
res.send("hello world 1234!!!!!");	
})

app.listen(3000);
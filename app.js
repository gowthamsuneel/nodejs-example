var app=require('express');

app.get('/', function(req,res) {
res.send("hello world 123!!!!!");	
})

app.listen(3000);
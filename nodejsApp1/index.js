/*var fs = require('fs');
//fs read write remove 
//I want to read data and print the data on the console
fs.readFile('file1.txt',function(err,data){
  console.log(data.toString())
}
)
console.log(fs)*/
var application=e();//express js
var http=require('http');

var server = http.createServer((req,res)=>{
  if(req.url=='/')
    res.write('Welcome to the home  page')
  else if(req.url=='/aboutus')
    res.write('WELCOME TO THE ABOUT US')
  else
    res.write('Invalid error')
  res.end();
  console.log(req)
});
console.log(server);



server.listen(3333,()=>console.log("Server is working...."))
//console.log(http);
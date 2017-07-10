
var http = require("http");

function onRequest(request,response){
  response.writeHead(200,{"Content-Type":"text/plain"})
  response.write("hello world")
  response.send()
}

http.createServer(onRequest).listen(3333)


console.log("localhost:3333")
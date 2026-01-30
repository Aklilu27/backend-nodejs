// 
const http=require('http');
// creating a server
// listening to server

let server=http.createServer(function(request,response){
    if(request.url=="/"){
        response.write("<h1> This is HomePage</h1>");
        response.write("<h2> Welcome to HomePage</h2>");
        response.write("<p> Enjoy your stay</p>");
    }else if(request.url=="/about")
        {
        response.write("AboutPage");
    }else if(request.url=="/contact"){
        response.write("ContactPage");
    }
    else{
        response.write("404 Page Not Found");
    }

    response.end();
});
server.on("connection",function(socket){
    console.log('New connection established');
});

server.listen(3000,function(){
    console.log('Server is listening on port 3000');
}   );

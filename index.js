/*Servidor con node puro
const http=require("http");
const server = http.createServer(function(request,response){
    response.status=200;
    response.setHeader("content-type","text/plain");
    response.end("HOLA MUNDO");
});
server.listen(3000,function(){
    console.log("Servidor en puerto 3000");
});*/

/*servidor con express*/
const express = require("express");
const app = express();
app.use(express.json());
app.get("/user",function(req,res){
    res.json({
        username:"cameron",
        lastname:"lopez"
    });
;});
app.post("/user/:id",function(req,res){
   console.log(req.body);
   console.log(req.params);
   res.send("peticion post recibida");
});
app.put("/contact",function(req,res){
    res.send("actualizacion request");
 });
 app.delete("/user/:id",function(req,res){
       res.send("el usuaeio "+req.params.id+"fue eliminado");
    
 });
app.listen(5000,function(){
    console.log("hola mundo con express");
});
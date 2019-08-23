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

/**rutass */
const express = require("express");
const morgan = require("morgan");
const app = express();
/*middleware*/
function logger(req,res,next){
    console.log("ruta recibida"+req.protocol+" "+req.get("host")+req.originalUrl);
    next();

}

app.use(express.json());
app.use(logger);
app.use(morgan("dev"));
/**rutass */
/*app.all("/user",function(req,res,next){
    console.log("por aqui paso");
    next();
    
});*/
app.get("/",function(req,res){
    res.send("hola");
;});
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
app.put("/user/:id",function(req,res){
    res.send("el usuaeio "+req.params.id+"fue actualizado");
    console.log(req.body);
 });
 app.delete("/user/:id",function(req,res){
       res.send("el usuaeio "+req.params.id+"fue eliminado");
    
 });
app.listen(5000,function(){
    console.log("hola mundo con express");
});
/***************** */
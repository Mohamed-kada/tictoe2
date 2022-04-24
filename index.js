const express= require('express') /* des variables de la biblio*/
const app= express()     /* des variables de la biblio express*/
const port = process.env.PORT || 3001           //port de connection serveur dans le reseau local 
app.use(express.static(__dirname +"/public"))
//create instance of http server
const server= require('http').createServer(app) /*creation lien http*/

app.get("/zeineb", (req,res)=>{           // "/zeineb" est le reste de l'adresse http://localhost:3001(port)/zeineb(adresse)
   res.sendFile(__dirname + "/public/index.html")  //home.html est le code html de l'application
   //res.send("hello zeineb") 
 })

app.get("/mohamed", (req,res)=>{           // "/zeineb" est le reste de l'adresse http://localhost:3001(port)/zeineb(adresse)
   res.sendFile(__dirname + "/public/mohamed.html")  //home.html est le code html de l'application
   //res.send("hello zeineb") 
 })

 server.listen(port,()=>{
    console.log("server running ")
})

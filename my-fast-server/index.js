const express = require("express");
const app = express();
const cors = require("cors")
const port = process.env.PURT || 5000;
//middleware
app.use(cors())
app.use(express.json())


const users = [
  { id: 1, name: "Rahim", email: "rahim@gmail.com", age: 22 },
  { id: 2, name: "Karim", email: "karim@gmail.com", age: 25 },
  { id: 3, name: "Salma", email: "salma@gmail.com", age: 21 },
  { id: 4, name: "Ayesha", email: "ayesha@gmail.com", age: 23 },
  { id: 5, name: "Hasan", email: "hasan@gmail.com", age: 26 },
  { id: 6, name: "Nusrat", email: "nusrat@gmail.com", age: 24 },
  { id: 7, name: "Imran", email: "imran@gmail.com", age: 27 },
  { id: 8, name: "Farhana", email: "farhana@gmail.com", age: 20 },

];

app.get("/",(req,res)=>{

    res.send("Hello from my fast server");
})


app.get ("/users", (req,res)=>{


    res.send(users)
})


app.post("/users",(req,res)=>{

console.log("fast ");
console.log(req.body);
const user = req.body;
user.id = users.length +1;
users.push(user)
res.send(user);



})


app.listen(port,()=>{

    console.log(`My fast server is running on port: ${port}`);
})
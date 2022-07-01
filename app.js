const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const date = require(__dirname+"/date.js");
console.log(date);
// let newitem="";
let workitems=[];
let items = ["Welcome to my TodoList App!","<- Click to check if its done","Add new item to list"];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/",(req, res)=>{  
    
    res.render("list",{listTitle: date.getDate(),listitem: items});
})
app.get("/work",(req, res)=>{
    res.render("list",{listTitle: "Work List",listitem: workitems});
});
app.get("/about",(req,res)=>{
    res.render("about");
})
app.post("/",(req, res)=>{
    var newitem = req.body.item;
    if(req.body.button === "Work"){
        workitems.push( newitem);
        res.redirect("/work");
    }
    else{
        items.push(newitem);
        res.redirect("/");
    }
});

app.post("/work",(req, res)=>{
    
    var newitem = req.body.item;
    items.push(newitem);
    res.redirect("/work");
});
app.listen(process.env.PORT || 3000, () => {
    console.log("server is running on port 3000")
  });

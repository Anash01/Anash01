var express = require("express");

var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = [ "tony" , "john" , "yogesh", "adhitya" , "karthik"];

app.get("/", function(req,res)
{
    res.render("home");
});

app.get("/friends", function(req,res)
{  
    res.render("friends", {friends:friends});
});


app.post("/addfriend", function(req,res)
{

    var newfriend = req.body.newfriend;
    friends.push(newfriend);
    res.redirect("/friends");
});
// app.get("/fallinlovewith/:thing", function(req, res)
// {
//     var thing = req.params.thing;
//     // res.send("you fell in love with: " + thing);
//     res.render("love.ejs", {thingVar: thing});
// });

// app.get("/posts", function(req,res)
// {
//     var posts = [
//         {title:"master", author: "cobol"},
//          {title:"james", author: "colt"}
//         ];
//          res.render("posts.ejs", {posts:posts});
// });


app.listen(3000, function(req,res)
{
    console.log("server  has started");
});
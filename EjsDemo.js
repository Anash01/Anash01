var express = require("express");

var app = express();

app.use(express.static("public"));

app.get("/", function(req,res)
{
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res)
{
    var thing = req.params.thing;
    // res.send("you fell in love with: " + thing);
    res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req,res)
{
    var posts = [
        {title:"master", author: "cobol"},
         {title:"james", author: "colt"}
        ];
         res.render("posts.ejs", {posts:posts});
});


app.listen(3000, function(req,res)
{
    console.log("server  has started");
})
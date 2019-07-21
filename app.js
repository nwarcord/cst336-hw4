const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
const jsonfile = require("jsonfile");
const dataPath = "./public/json/";

app.get("/", function(req, res) {
    var data = jsonfile.readFileSync(dataPath + "index_data.json");
    res.render("index.html", {data: data});
});

app.get("/prototyping", function(req, res) {
    var data = jsonfile.readFileSync(dataPath + "prototyping_data.json");
    res.render("prototyping.html", {data: data});
});

app.get("/design_patterns", function(req, res) {
    var data = jsonfile.readFileSync(dataPath + "design_patterns_data.json");
    res.render("design_patterns.html", {data: data});
});

app.get("/dev_tools", function(req, res) {
    var data = jsonfile.readFileSync(dataPath + "dev_tools_data.json");
    res.render("dev_tools.html", {data: data});
});

app.get("/game_ai", function(req, res) {
    var data = jsonfile.readFileSync(dataPath + "game_ai_data.json");
    res.render("game_ai.html", {data: data});
});

app.get("/sources", function(req, res) {
    var data = jsonfile.readFileSync(dataPath + "sources_data.json");
    res.render("sources.html", {data: data});
});

// app.listen("8081", "127.0.0.1", function() {
//     console.log("Express server is running...");
// });

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Running Express Server...");
});
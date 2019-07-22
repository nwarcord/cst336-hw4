const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
const jsonfile = require("jsonfile");
const dataPath = "./public/json/";
const faker = require("faker");

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

app.get("/testimonials", function(req, res) {
    var data = jsonfile.readFileSync(dataPath + "testimonial_data.json");
    var fourthColor = faker.commerce.color()
    fourthColor = fourthColor.charAt(0).toUpperCase() + fourthColor.substring(1);
    var fourthInitials = faker.name.firstName().charAt(0) + ". " + faker.name.firstName().charAt(0) + "."
    res.render("testimonials.html", {
        data: data,
        first: {
            "area": faker.commerce.department(),
            "name": faker.fake("{{name.firstName}} {{name.lastName}}, {{name.jobDescriptor}} of {{company.companyName}}")
        },
        second: {
            "adj": faker.company.catchPhraseAdjective().toLowerCase(),
            "name": faker.fake("{{name.firstName}} {{name.lastName}}, Star of \"The {{random.word}}\"")
        },

        third: {
            "buzz-one": faker.company.bsAdjective(),
            "buzz-two": faker.company.bsAdjective(),
            "buzz-three": faker.company.bsAdjective(),
            "name": faker.internet.userName()
        },

        fourth: {
            "noun-one": faker.company.catchPhraseDescriptor(),
            "noun-two": faker.company.catchPhraseDescriptor(),
            "name": fourthInitials + " " + faker.name.lastName(),
            "book": "The " + fourthColor + faker.fake(" {{commerce.product}} of {{address.country}}")
        }
    });
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
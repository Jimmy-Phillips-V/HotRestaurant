// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

////////////////
var availableTables = [
    {
    routeName: "availableTables",
    name: "Yoda",
    phone: "555-555-5555",
    ID: 'phone'
    }
]; 
////////////////////////////////

var waitingList = [
    {
        routeName: "waitingList",
        name: "Darth Maul",
        phone: "555-555-5556",
        ID: 'phone'
    }
]; 
//////////////////////////////////



//name of waiting person, UID, phone, date of res, email
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
app.get("/viewTables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
app.get("/makeRes", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  app.get("/api/:table", function(req, res) {
    var chosen = req.params.table;
  
    console.log(chosen);
  if(chosen == "availableTables")
   { 
        for (var i = 0; i < availableTables.length; i++) {
             return res.json(availableTables[i]);
                }
        return res.json(false);
    }
    else  if(chosen == "waitingList")
    {
        for (var i = 0; i < waitingList.length; i++) {
             return res.json(waitingList[i]);
               }
        return res.json(false);
    }
    return res.json(false);
    
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
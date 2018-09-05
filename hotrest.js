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
var availableTables = [{
    routeName: "availableTables",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
}]; //name of waiting person, UID, phone, date of res, email
var waitingList = [
    {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
}
]; 




//name of waiting person, UID, phone, date of res, email
app.get("/viewTables", function(req, res) {
    res.sendFile(path.join(__dirname, "XXXXX.html"));
  });
app.get("/makeRes", function(req, res) {
    res.sendFile(path.join(__dirname, "XXXXX.html"));
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
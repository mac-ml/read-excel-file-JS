// Import special library
const path = require("path")
const express = require("express")
const excelFile = require("xlsx")
const app = express();

// Read excel file
const workbook = excelFile.readFile("data/SampleData.xlsx");
const sheetList = workbook.SheetNames;
const jsonData = excelFile.utils.sheet_to_json(workbook.Sheets[sheetList[0]]);
console.log(jsonData[0]);


// set and use engine/static etc.
app.use("/public", express.static("public"));
app.set("view engine", "ejs");

// get a html response
app.get("/", (req, res)=>{
    res.render("index", {data: jsonData});
});

// listen port
app.listen(3000);

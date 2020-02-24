// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// The following HTML routes should be created:
// GET /notes - Should return the notes.html file.
// GET * - Should return the index.html file
app.use(express.static('public'));

// the code above does same as the code below:
// app.get("/notes", function (req, res) {
    //     res.sendFile(path.join(__dirname, "./public/notes.html"));
    // });
    // app.get("*", function (req, res) {
        //     res.sendFile(path.join(__dirname, "./public/index.html"));
        // });

app.use(require('./routes'));

app.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT)
})





















// FOR JS INTERVIEW

// for (var i = 0; i < 100; i++) {
//     // if i is a multiple of 5 console.log "fizz"
//     // if i is a multiple of 10 console.log "buzz"
//     // if i is a multiple of 15 console.log "fizzbuzz"
//     // otherwise console.log i

//     // 3 / 2 === 1 r:1, 3 % 2 === 1
//     // 11 / 3 === 3 r:2, 11 % 3 === 2
//     if (i % 15 === 0) {
//         console.log("fizzbuzz")
//     }
//     else if (i % 10 === 0) {
//         console.log("buzz")
//     }
//     else if (i % 5 === 0) {
//         console.log("fizz")
//     }
//     else {
//         console.log(i)
//     }
// }
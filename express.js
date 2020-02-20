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

app.use(express.static('public'))

// The following HTML routes should be created:
// GET /notes - Should return the notes.html file.
// GET * - Should return the index.html file

// /api/notes => POST
app.use(require('./routes'))


// app.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/notes.html"));
// });
// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/index.html"));
// });


//   The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.








// The following API routes should be created:

// GET /api/notes - Should read the db.json file and return all saved notes as JSON.

// POST /api/notes - Should recieve a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

// DELETE /api/notes/:id - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
app.listen(PORT, function () {
    console.log("Listening on PORT: ", PORT)
})


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
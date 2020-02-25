const router = require('express').Router();
const path = require('path');
const fs = require('fs');
let filePath = path.join(__dirname, "../../db/db.json")
console.log('filePath:', filePath)
// console.log('__dirname:', __dirname)

// var db = require('../../db/db.json')
// GET /api/notes - Should read the db.json file and return all saved notes as JSON.

router.get('/', function (req, res) {
  fs.readFile(filePath, 'utf8', function (err, db) {
    if (err) throw err;
    db = JSON.parse(db)
    res.json(db)
  })
});

// POST /api/notes - Should recieve a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

router.post('/', function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  const newNote = req.body;
  // This works because of our body parsing middleware
  console.log(newNote)
  fs.readFile(filePath, 'utf8', function (err, db) {
    if (err) throw err;
    db = JSON.parse(db)

    // ['dog', 'cat', 'iguana']
    // length: 3
    // db[2] === 'iguana
    // db.length - 1 === 2
    // db[db.length - 1] === 'iguana'
    // db.push('dragon')
    // length: 4
    // db[3] === 'dragon'
    // db.length -1 === 3
    // db[db.length -1] === 'dragon'
    newNote.id = db[db.length - 1].id + 1

    db.push(newNote)

    fs.writeFile(filePath, JSON.stringify(db),
      err => {
        if (err) {
          res.json(err);
        } else {
          res.json(db);
        }
      })
  })
});

// DELETE /api/notes/:id - Should recieve a query paramter containing the id of a note to delete. 
// This means you'll need to find a way to give each note a unique id when it's saved. 
// In order to delete a note, you'll need to read all notes from the db.json file, 
// remove the note with the given id property, and then rewrite the notes to the db.json file.

router.delete('/:id', function (req, res) {
  fs.readFile(filePath, 'utf8', function (err, db) {
    if (err) throw err;
    db = JSON.parse(db)

    db = db.filter(post => post.id !== parseInt(req.params.id))
  
    fs.writeFile(filePath, JSON.stringify(db),
      err => {
        if (err) {
          res.json(err);
        } else {
          res.json(db);
        }
      })
  })

});

module.exports = router
const router = require('express').Router();
const path = require('path');
const fs = require('fs');
let filePath = require('../../db/db.json');
// console.log('filePath:', filePath)
// console.log('__dirname:', __dirname)

// POST /api/notes - Should recieve a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

router.post('/', function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  const newNote = req.body;
  // This works because of our body parsing middleware
  // console.log(newNote)
  filePath.push(newNote)
  // console.log(filePath)
  fs.writeFile(path.join(__dirname, "../../db/db.json"),
    JSON.stringify(filePath),
    err => {
      if (err) {
        res.json(err);
      } else {
        res.json(filePath);
      }
    }
  )
});

// GET /api/notes - Should read the db.json file and return all saved notes as JSON.

router.get('/', function (req, res) {
  fs.readFile(path.join(__dirname, "../../db/db.json"), 'utf8', function (err, db) {
    if (err) throw err;
    db = JSON.parse(db)
    console.log(db)
    res.json(db)
  })
});

// DELETE /api/notes/:id - Should recieve a query paramter containing the id of a note to delete. 
// This means you'll need to find a way to give each note a unique id when it's saved. 
// In order to delete a note, you'll need to read all notes from the db.json file, 
// remove the note with the given id property, and then rewrite the notes to the db.json file.

router.delete('/:id', function (req, res) {
  console.log(req.body);
	console.log(filePath);
	filePath = filePath.filter(element => {
		return element.id != req.body.id;
	});
  console.log(filePath);
  fs.writeFile(path.join(__dirname, "../../db/db.json"),
  JSON.stringify(filePath),
  err => {
    if (err) {
      res.json(err);
    } else {
      res.json(filePath);
    }
  }
)
})

module.exports = router
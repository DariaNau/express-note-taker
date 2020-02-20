const router = require('express').Router()
const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, '../../db/db.json')

router.get('/', function (req, res) {
    fs.readFile(filePath, 'utf8', function (err, db) {
        if (err) throw err;
        db = JSON.parse(db)
        console.log(db)
        res.json(db)
    })
})
router.post('/', function (req, res) {

})
router.delete('/:id', function (req, res) {

})

module.exports = router
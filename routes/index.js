const router = require('express').Router()
const htmlRoutes = require('./htmlRoutes')
const apiRoutes = require('./apiRoutes')


// Sets up the Express app to handle data parsing
router.use('/api', apiRoutes)
router.use(htmlRoutes)

module.exports = router

// so basically does this:

// function handleHTTP(req, res) {
//     // req.url = '/api/notes'
//     // req.method = 'POST'

//     switch (req.method) {
//         case 'GET':
//             switch (req.url) {
//                 case '/api/notes':
//                     // run get method function for /api/notes
//                     break;
//             }
//             break;
//         case 'POST':
//             switch (req.url) {
//                 case '/api/notes':
//                     // run POST method function for /api/notes
//                     break;
//             }
//             break;

//     }
// }
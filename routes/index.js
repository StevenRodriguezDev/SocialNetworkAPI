const router = require('express').Router();
// all of the API routes from /api/index.js 
const apiRoutes = require('./api');
//all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);
router.use((req, res) => res.send('Wrong route!'));
module.exports = router;

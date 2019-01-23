const express = require('express');
const router = express.Router();
const { getSearchResults, addData, deleteData, editData } = require('./controller.js');

// router.route('/nav/:metro')
//     .get(getCities)

router.route('/search/:searched')
    .get(getSearchResults)

router.route('/delete/:cuisine')
    .delete(deleteData);

router.route('/post')
    .post(addData);

router.route('/put/:cuisine/:newName')
    .put(editData);


module.exports = router;
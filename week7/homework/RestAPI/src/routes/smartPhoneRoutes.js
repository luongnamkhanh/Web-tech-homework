const express = require("express");
const router = express.Router();
var cors = require('cors')
const smartPhoneController = require('../controllers/smartPhoneControllers');

router.options('*', cors())
// 
router.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});
router.all('/:id', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});
// 


router.get('/', smartPhoneController.getAllSmartPhones);
router.post('/', smartPhoneController.createSmartPhone);
router.put('/:id', smartPhoneController.updateSmartPhoneById);
router.delete('/:id', smartPhoneController.deleteSmartPhoneById);



module.exports = router;

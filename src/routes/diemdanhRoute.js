const express = require('express');
const { diemdanh, getDanhSachDiemDanh } = require('../controllers/diemdanhController');
const router = express.Router();


// init route
router.route('/postData').post(diemdanh);

router.route('/getData').get(getDanhSachDiemDanh);


module.exports = router;
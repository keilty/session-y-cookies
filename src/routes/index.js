const express = require('express');
const router = express.Router();
const { index, processIndex, user } = require('../controllers/indexController');
const validator = require('../middlewares/validator')


router.get('/', index);
router.post('/', validator, processIndex);

router.get('/user', user);

// router.get('/acceso', acceso)



module.exports = router;

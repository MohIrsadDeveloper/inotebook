const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const noteController = require("../controllers/noteController");

router.post("/register", userController.Register);
router.post('/login', userController.Login);
router.post('/add', noteController.add);
router.delete('/remove/:id', noteController.remove);
router.patch('/update/:id', noteController.update);


module.exports = router;
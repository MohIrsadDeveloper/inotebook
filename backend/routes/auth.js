const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    obj = {
        a : "thois",
        number : 33
    }
    res.json(obj)
})

module.exports = router;
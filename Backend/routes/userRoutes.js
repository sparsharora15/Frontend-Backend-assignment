const express = require('express')
const router = express.Router()
const { getaAll, deleteUser, editUser, likeDetails } = require('../controllers/userControllers')


router.get("/getaAll", getaAll)
router.put("/deleteUser", deleteUser)
router.post("/editUser", editUser)
router.post("/likeDetails", likeDetails)


module.exports = router;    
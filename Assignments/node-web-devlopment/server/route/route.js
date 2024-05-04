const express = require('express');
const router = express.Router();
router.use(express.json());
const userController = require('../controller/usercontroller');

router.get("/GETDATA",userController.GETDATA);
router.post("/ADDDATA",userController.ADDDATA);
router.delete("/DELETEDATA",userController.DELETEDATA);
router.get('/EMPDTBYID/:id', userController.EMPDTBYID);
router.post('/EMPDTUPD/:id', userController.EMPDTUPD);


module.exports = router;
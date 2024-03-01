
//api/v1/jobs GET
//api/v1/jobs/ POST

const express = require("express");

const router = express.Router();;
const controller = require('../controller/jobs');
// app.use(express.json())

router.get("", controller.getJobs);

router.post("", controller.createJobs);

router.patch("", controller.updateJobs);

router.put("", controller.updateOneJobs);

module.exports = router;
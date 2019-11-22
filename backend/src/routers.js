const express = require('express');
const routes = express.Router();

const MemberController = require("./controllers/MemberController")

routes.get("/members", MemberController.index)



module.exports = routes
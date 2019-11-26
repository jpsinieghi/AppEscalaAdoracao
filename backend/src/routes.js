const express = require('express');
const routes = express.Router();

const MemberController = require("./controllers/MemberController")
const DataController = require("./controllers/DataController")
const LogController = require("./controllers/LogController")


routes.get("/members", MemberController.index)


routes.get("/data/:dataEscolhida", DataController.index)
routes.post("/data", DataController.store)
routes.put("/data/:id", DataController.update)
//routes.delete("/data/:id", DataController.destroy) 

routes.post("/log", LogController.store)



module.exports = routes

const express = require("express")
const { WinesController } = require("../controllers/Wines.controller")
const router = express.Router()

router.get("/", WinesController.getAll)
router.get("/:id", WinesController.getById)
router.post("/", WinesController.add)
router.delete("/:id", WinesController.delete)
router.put("/:id", WinesController.edit)

module.exports = router 

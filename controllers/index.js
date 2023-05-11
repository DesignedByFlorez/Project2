const router = require("express").Router()
const apiRoutes = require("./api")
const frontendRoutes = require("./frontendRoutes")

router.use("/api", apiRoutes)
router.use("/", frontendRoutes)

module.exports = router
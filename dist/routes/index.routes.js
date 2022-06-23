const { Router } = require("express");
const router = Router();

const {
  rederIndex,
  rederAbout,
  prueba,
  renderFeatures
} = require("../controllers/index.controller");

router.get("/", rederIndex);

router.get("/About", rederAbout);

router.get("/notes", prueba);

router.get("/features", renderFeatures);

module.exports = router;
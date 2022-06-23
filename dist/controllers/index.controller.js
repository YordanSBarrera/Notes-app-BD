const indexCtrl = {};

indexCtrl.rederIndex = (req, res) => {
  console.log("vamos para el Index");
  res.render("index");
};

indexCtrl.rederAbout = (req, res) => {
  console.log("vamos para el about");
  res.render("about");
};

indexCtrl.prueba = (req, res) => {
  console.log("nueva nota");
  res.render("notes/new-note");
};

indexCtrl.renderFeatures = (req, res) => {
  console.log("let's go to features");
  res.render("features");
};
module.exports = indexCtrl;
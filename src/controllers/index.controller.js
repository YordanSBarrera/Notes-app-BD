const indexCtrl = {};

indexCtrl.rederIndex = (req, res) => {
  console.log("vamos par Index");
  res.render("index");
};

indexCtrl.rederAbout = (req, res) => {
  console.log("vamos para el about");
  res.render("about");
};

indexCtrl.prueba = (req, res) => {
  res.render("notes/new-note");
};

module.exports = indexCtrl;

const indexCtrl ={};

indexCtrl.rederIndex = (req,res)=>{
    res.render('index')
}

indexCtrl.rederAbout = (req,res)=>{
    res.render('about')
}

indexCtrl.prueba = (req,res)=>{
    res.render('notes/new-note')
}

module.exports = indexCtrl;
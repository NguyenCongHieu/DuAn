
exports.homeRoutes = (req,res) => {
    res.render('index.ejs');
}

exports.add_subject = (req,res) => {
    res.render('add_subject');
}

exports.update_subject = (req,res) => {
    res.render('update_subject');
}
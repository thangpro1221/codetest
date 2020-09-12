
class NewsController{
    
    //[get] news
    index(req, res){
        res.render('news');
    }

    show(req, res){
        res.send('i Love you');
    }

    showone(req, res){
        res.send('i miss you');
    }
}

module.exports = new NewsController;



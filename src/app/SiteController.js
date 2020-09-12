
class SiteController{
    
    //[get] news
    home(req, res){
        res.render('home');
    }

}

module.exports = new SiteController;



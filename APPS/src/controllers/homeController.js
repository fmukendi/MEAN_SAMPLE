(function (homeController) {
    
    
    homeController.init = function (app) {
        
        //1a--- displaying data
        app.get('/', function (req, res) {
            //res.send("<html><body><h1>" + "Express" + "</h1></body></html>");//---> bad way to set up a view 
            res.render('index', { title: 'MukeApps' });
            
        });
        
        
        app.get('/main', function (req, res) { 
            res.render('main', { title: 'MukeApps' });
            
        });

        app.get('/editEmail', function (req, res) { 
            res.render('editEmail', { title: 'MukeApps' });
            
        });
        

    };
})(module.exports);
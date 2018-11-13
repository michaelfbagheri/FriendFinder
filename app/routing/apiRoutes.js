var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/data/friends",function(req,res){
         var recentUser = friends.length
         recentUser = parseInt(recentUser)
         recentUser--
         var currentLogin = JSON.stringify(friends[recentUser])
         currentLogin = JSON.parse(currentLogin)
         console.log(currentLogin.name)
         var comparison = [];
         var talley = 0;

         for (var i in friends){
            for (var j in friends[i].scores){
                // console.log(talley)
                talley += Math.abs(friends[i].scores[j]) - Math.abs(currentLogin.scores[j])
                
            }
            comparison.push(talley) 
             
         }
         console.log(comparison)
         var bestMatch = Math.min.apply(null,comparison)
         var bestMatch = comparison.indexOf(bestMatch)
           
        
        
        res.json(friends[bestMatch].name)
        // console.log(friends)
    });

    app.post("/data/friends",function(req,res){
        friends.push(req.body)
        console.log(req.body)
        //some functionality needs to be implemented here
    });

};

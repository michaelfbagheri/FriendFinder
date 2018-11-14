var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/data/friends",function(req,res){
        console.log(friends)
        //  var recentUser = friends.length
        //  recentUser = parseInt(recentUser)
        //  recentUser--
        //  var currentLogin = JSON.stringify(friends[recentUser])
        //  currentLogin = JSON.parse(currentLogin)
        //  console.log(currentLogin.name)
        //  var comparison = [];
        //  var talley = 0;

        //  for (var i in friends){
        //     for (var j in friends[i].scores){
        //         // console.log(talley)
        //         talley += Math.abs(friends[i].scores[j]) - Math.abs(parseInt(currentLogin.scores[j]))
                
        //     }
        //     comparison.push(talley) 
             
        //  }
        //  console.log(comparison)
        //  var bestMatch = Math.min.apply(null,comparison)
        //  var bestMatch = comparison.indexOf(bestMatch)
           
        
        
        // res.json(friends[bestMatch].name)
        // // console.log(friends)
    });

    app.post("/data/friends",function(req,res){
      console.log(req.body)
        // console.log(data)
        // data = JSON.parse(data)
        // console.log(data)
        // friends.push(data)
        
        //some functionality needs to be issmplemented here
    });

};

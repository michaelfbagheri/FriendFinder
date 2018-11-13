var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/data/friends",function(req,res){
        res.json(friends)
        console.log(friends)
    });

    app.post("/data/friends",function(req,res){
        friends.push(req.body)
        console.log(req.body)
        //some functionality needs to be implemented here
    });

};

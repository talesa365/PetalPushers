const admin= require('../sequelize')
module.exports = (app) => {




  let adminId = new AdminId({employee_Id:"997226", password:"petals"})
  employId.save();



app.get('/logIn',  (req, res)=> {
    console.log(req.body);
    
    adminId.findOne({employee_ID: req.body.employee_Id}, function(err, user){
        if(!adminId){
            var obj = {
                err: "Error, ID Not Found"
            }
            var payload = JSON.stringify(obj)
            console.log(payload);
            
            res.send(obj)
        }else{
            if(employee_Id.password != req.body.password){
                let err = {
                    message: "Your employee ID or password doesn't match a known user"
                }
                err = JSON.stringify(err)
                console.log("fell in", err);
                
                res.send(err)
            }else{
                var payload = {
                    employee_Id: employee_Id._id,
                    auth: true
                }
                payload = JSON.stringify(payload)
                console.log(payload);
                res.send(payload)
            }
        }
    })
  })
};



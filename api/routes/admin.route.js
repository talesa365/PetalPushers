const express = require('express');
const adminRoute = express.Router();
// Require logIn model in our routes module
let admin = require('./admin.model');




  let employId = new EmployId({employee_Id:"997226", password:"petals"})
  employId.save();



adminRoute.route('/').post(function (req, res) {
    console.log(req.body);
    
    employId.findOne({employee_ID: req.body.employId}, function(err, user){
        if(!employId){
            var obj = {
                err: "Error, ID Not Found"
            }
            var payload = JSON.stringify(obj)
            console.log(payload);
            
            res.send(obj)
        }else{
            if(employId.password != req.body.password){
                let err = {
                    message: "Your employee ID or password doesn't match a known user"
                }
                err = JSON.stringify(err)
                console.log("fell in", err);
                
                res.send(err)
            }else{
                var payload = {
                    employee_Id: employId._id,
                    auth: true
                }
                payload = JSON.stringify(payload)
                console.log(payload);
                res.send(payload)
            }
        }
    })
  });



module.exports = adminRoute
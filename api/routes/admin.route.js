const admin= require('../sequelize').admin
module.exports = (app) => {
//   let adminId = new admin({employee_Id:"997226", employee_password:"petals"})
//   adminId.save().then((savedAdmin)=>{
//       console.log(savedAdmin)
//   });



app.post('/admin/logIn',  (req, res)=> {
    console.log(req.body);
    
    admin.findOne({where:{employee_Id: req.body.employee_id}}, function(err, user){
        if(err)console.log(err);
        
    }).then((user, err)=>{
            if(!user){
                var obj = {
                    err: "Error, ID Not Found"
                }
                var payload = JSON.stringify(obj)
                console.log(payload);
                
                res.send(obj)
            }else{
                if(user.employee_password !== req.body.employee_password){
                    let err = {
                        message: "Your employee ID or password doesn't match authorized employee"
                    }
                    err = JSON.stringify(err)
                    console.log("fell in", err);
                    
                    res.send(err)
                }else{
                    var payload = {
                        employee_Id: user.id,
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



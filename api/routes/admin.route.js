const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bigmoney2019!",
    database: "PetalPusher"
})
module.exports = (app) => {
    app.get('/admin/:id', (req, res)=>{
        connection.query(`select * from admin where admin_id = ${connection.escape(admin_id)}`, (err, results)=>{
            res.send(JSON.stringify(results[0]))
        });
    });
}

// app.post('/admin/logIn',  (req, res)=> {
//     console.log(req.body);
    
  
        
//     })
//     .then((user, err)=>{
//             if(!user){
//                 var obj = {
//                     err: "Error, ID Not Found"
//                 }
//                 var payload = JSON.stringify(obj)
//                 console.log(payload);
                
//                 res.send(obj)
//             }else{
//                 if(user.employee_password !== req.body.employee_password){
//                     let err = {
//                         message: "Your employee ID or password doesn't match authorized employee"
//                     }
//                     err = JSON.stringify(err)
//                     console.log("fell in", err);
                    
//                     res.send(err)
//                 }else{
//                     var payload = {
//                         employee_Id: user.id,
//                         auth: true
//                     }
//                     payload = JSON.stringify(payload)
//                     console.log(payload);
//                     res.send(payload)
//                 }
//             }

//     })
//   };




const user = require('../sequelize')
module.exports = (app) => {


    app.post('/order', (req, res)=>{
        req.body.id = +req.body.id
        var {first_name, last_name, email, username, password} = req.body
        user.findOne({where:{
            id: req.body.id
        }}).then(foundUser=>{
            foundUser.update({
                first_name:first_name || foundUser.first_name,
                last_name: last_name || foundUser.last_name,
                email: email || foundUser.email,
                username: username || foundUser.username,
                password: password || foundUser.password
            }).then(updatedUser=>{
                console.log(updatedUser);
                res.send(JSON.stringify(updatedUser))
            })
        })
    })
}
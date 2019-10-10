const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const PORT = 7000;
const cors = require('cors');
const path = require('path');
const mysql = require('mysql');



app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
require('./routes/order.route')
require('./routes/admin.route')
require('./routes/purchasingOrder.route')


// serving static files ---------->
const publicRoot = path.join(__dirname,'../', 'client');
app.use(express.static(publicRoot));
app.get("/", (req, res) => {
    res.sendFile(publicRoot + '/index.html')
} );
app.get('/admin', (req,res) => {
    res.sendFile(publicRoot + '/admin.html')
});
app.get('/admin', (req,res) => {
    res.sendFile(publicRoot + '/purchasingOrder.html')
});
app.get('/*', (req, res) => {
    res.sendFile(publicRoot + '/404.html')
});

app.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`)
})
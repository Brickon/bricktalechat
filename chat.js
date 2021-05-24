var app = require("express")();
var btserver = require("http").Server(app);
var io = require("socket.io")(btserver);
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
var message = "Bricktale Chat thingy";
app.post("/bt/sendmsg", function(req, res){

    let msg = req.body.msg;
    message = msg+"<br>"+message;


});

app.get('/', function(req,res){

res.sendFile(__dirname + "/index.html");
//res.end();
});
setInterval(() => {

io.emit('msg', { msgdt:message});

},150);

btserver.listen(80);

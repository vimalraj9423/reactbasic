let express =require( "express");
const app = express();
const port = 3000;  
app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
    res.render(__dirname + '/dist/'+'index.html');
});
app.listen(port, () => {
    console.log('server started - ', port);
});

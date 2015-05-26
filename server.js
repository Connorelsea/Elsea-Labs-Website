var express = require("express"),
    stylus  = require("stylus"),
    nib     = require("nib"),
    body    = require("body-parser")

var app = express()

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

function compile(str, path)
{
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

app.use(body.urlencoded({
	extended: false
}));

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  {
  	src: __dirname + '/public',
  	compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

var data = require(__dirname + "/data.js")

app.get('/', function(req, res)
{
	res.render('layout', 
	{
		websiteTitle: "Elsea",
		websiteName:  "Elsea",
		links:    data.linkNames,
		bio:      data.bio,
		subtitle: data.subtitle,
		skills:   data.skills,
		services: data.services
	})
});

app.post('/contact', function(req, res) {
	console.log(req.body.Name)
	console.log(req.body.Email)
	console.log(req.body.TextArea)
	res.redirect("/")
})

app.listen(server_port, server_ip_address, function()
{
	console.log("Ready on the port")
})
var express = require("express"),
    stylus  = require("stylus"),
    nib     = require("nib")

var app = express()

function compile(str, path)
{
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

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

var linkNames = [
	"home", "software", "blog", "about"
]

var bio = "I’m a 17 year old student and software developer from Baton Rouge, Louisiana with a passion for beautiful interfaces, game design, software development, and art."

var subtitle = "Full Stack Engineer"

var skills = [
	{
		language: "Java",
		level: "hundred"
	},
	{
		language: "HTML5",
		level: "hundred"
	},
	{
		language: "NODE.JS",
		level: "hundred"
	},
	{
		language: "Haskell",
		level: "ninety"
	},
	{
		language: "C/C++",
		level: "eighty"
	}
]

app.get('/', function(req, res)
{
	res.render('layout',
	{
		websiteTitle: "Elsea",
		websiteName:  "Elsea",
		links: linkNames,
		bio: bio,
		subtitle: subtitle,
		skills: skills
	})
});

app.listen(1337, function()
{
	console.log("Ready on the port")
})

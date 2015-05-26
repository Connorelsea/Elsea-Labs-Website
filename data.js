var linkNames = [
	"home", "software", "blog", "about"
]

var linkArray = [
	{
		name: "home",
		link: "/"
	},
	{
		name: "software",
		link: "/software"
	},
	{
		name: "blog",
		link: "/blog"
	},
	{
		name: "about",
		link: "/about"
	}
]

var bio = "I’m a 17 year old student and software developer from Baton Rouge, Louisiana with a passion for beautiful interfaces, game design, software development, and art."

var services = [
	{
		name: "Web Design",
		content: "From server code to the front end, Elsea has you covered. We are knowledgeable in all facets of the web development process and can fulfill any needs you may encounter."
	},
	{
		name: "Software Development",
		content: "testing"
	},
]

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
		language: "Node.JS",
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

var clients = [
	{
		link:   "images/clients/bw.png",
		width:  104,
		height: 110
	},
	{
		link:   "images/clients/passnote.png",
		width:  303,
		height: 72
	},
	{
		link:   "images/clients/postdigital.png",
		width:  253,
		height: 39
	}
]

module.exports = {
	linkArray: linkArray,
	linkNames: linkNames,
	bio: bio,
	subtitle: subtitle,
	skills: skills,
	services: services,
	clients: clients
}
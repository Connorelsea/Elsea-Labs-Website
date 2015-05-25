var linkArray = [
	{
		name: "home",
		link: "/",
		sub: {
			type: "none"
		}
	},
	{
		name: "software",
		link: "/software",
		sub:
		{
			type: "large",
			links: [
				{
					name: "XShot",
					link: "/software/xshot"
				}
			]
		}
	},
	{
		name: "blog",
		link: "/blog",
		sub: {
			type: "none"
		}
	}
]

var linkNames = [
	"home", "software", "blog", "about"
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

module.exports = {
	linkArray: linkArray,
	linkNames: linkNames,
	bio: bio,
	subtitle: subtitle,
	skills: skills,
	services: services
}
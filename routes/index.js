/*
 * GET home page.
 */
var labs = [
	{
		"id": "lab-1",
		"title": "Source Control",
		"date": "January 10",
		"image": "octocat.jpg"
	},
	{
		"id": "lab-2",
		"title": "Styling",
		"date": "January 17",
		"image": "css.png"
	},
	{
		"id": "lab-3",
		"title": "Interactive Web pages",
		"date": "January 24",
		"image": "js.png"
	},
	{
		"id": "lab-4",
		"title": "Servers",
		"date": "January 31",
		"image": "nodejs.png"
	},
	{
		"id": "lab-5",
		"title": "Putting it together",
		"date": "February 7",
		"image": "html-css-js.jpg"
	},
	{
		"id": "lab-6",
		"title": "FB Login & AJAX",
		"date": "February 14",
		"image": "ajax.jpg"
	},
	{
		"id": "lab-7",
		"title": "Analytics and A/B Testing",
		"date": "February 21",
		"image": "analytics.png"
	},
	{
		"id": "lab-8",
		"title": "APIs, Gesture, and AJAX",
		"date": "February 28",
		"image": "api.png"
	}
];


exports.view = function(req, res){
  if(labs.length < 9) {
  	var todaysLab = {
		"id": "lab-9",
		"title": "Debugging 101",
		"date": "March 7",
		"image": "debug.png"
	};

  	labs.push(todaysLab);
  }

  res.render('index', {
	'labs': labs
  });
};

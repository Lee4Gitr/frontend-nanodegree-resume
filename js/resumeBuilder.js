var bio = {
	"name" : "Aubrey Mills",
	"role" : "Web Developer",
	"contact_info" : {
		"mobile" : "3347821568",
		"email" : "lee4gitr@gmail.com",
		"github" : "lee4gitr",
		"location" : "Tampa"
	},
	"welcome_message" : "Hi! My name is Aubrey and this is my Resume!",
	"skills" : [
		"Teaching", "JavaScript", "Git","Programming"
		],
	"picture_URL" : "images/AubreyMillsPicture.jpg"
}


var work = {
	"jobs": [
		{
			"employer" : "Dr. Henry Panion III",
			"title" : "Lifeline",
			"location" : "Birmingham, AL, US",
			"dates" : "2012 - 2013",
			"description" : "Teach children aged 12 - 18 basics of Music Technology in 1 week."
		},
		{
			"employer" : "The University of Alabama in Birmingham",
			"title" : "Hulsey Recital Hall Worker",
			"location" : "Birmingham, AL, US",
			"dates" : "2012 - 2013",
			"description" : " Run lights and sound for presentations for various departments."
		},
		{
			"employer" : "Self",
			"title" : "Guitar Instructor",
			"location" : "Tampa, FL, US",
			"dates" : "2013 - 2016",
			"description" : "Teach young and old students guitar. "
		},
		{
			"employer" : "Self",
			"title" : "Composer",
			"location" : "Tampa, FL, US",
			"dates" : "2013 - 2016",
			"description" : "Discuss project with the patron and develop a composition for their needs."
		}
	]
}

var education = {
	"schools": [
		{
			"name" : "Alabama School of Math and Science",
			"location" : "Mobile, AL, US",
			"years" : "2007 - 2008",
			"degree": "N/A",
			"major" : "N/A"
		},
		{
			"name" : "Andalusia High School",
			"location" : "Andalusia, AL, US",
			"years" : "2005-2007 and 2008-2009",
			"degree" : "Advanced Diploma",
			"major" : "N/A"
		},
		{
			"name" : "University of Alabama at Birmingham",
			"location" : "Birmingham, AL, US",
			"degree" : "Bachelor of Arts",
			"major" : "Music Technology Cum Laude with Departmental Honors",
			"years" : "2009-2013"
		},
		{
			"name" : "Udacity",
			"location" : "Online",
			"degree" : "Front End Nanodegree",
			"years" : "2016",
			"major" : "N/A"
		}
	]
}

var projects = {
	"projects": [
		{
			"title" : "Personal Website",
			"dates" : " 2016",
			"description" : "My first website.",
			"imagesURL" : [
			]
		}
	]
}

formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
formattedBioPic = HTMLbioPic.replace("%data%", bio.picture_URL);
$("#header").prepend(formattedBioPic);

if (bio.skills.length>0) {
	
	$('#header').append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%" , bio.skills[0]);
	$("#skills").append(formattedSkill); 
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill); 
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill); 
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill); 
}


function displayWork () {
	for (job in work.jobs) {
	$('#workExperience').append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription =HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

function displayEducation () {
	for (school in education.schools) {
	$('#education').append(HTMLschoolStart);

	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	var formattedSchoolNameLocation = formattedSchoolName + formattedLocation;
	$(".education-entry:last").append(formattedSchoolNameLocation);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	$(".education-entry:last").append(formattedDegree);
	var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
	$(".education-entry:last").append(formattedSchoolDates);
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	$(".education-entry:last").append(formattedMajor);
	}
}

displayEducation();

function displayProjects () {
	for (project in projects.projects) {
	$('#projects').append(HTMLprojectStart);

	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$('.project-entry:last').append(formattedProjectTitle);
	var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
	$('.project-entry:last').append(formattedProjectDates);
	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$('.project-entry:last').append(formattedProjectDescription);
	}
}
displayProjects();
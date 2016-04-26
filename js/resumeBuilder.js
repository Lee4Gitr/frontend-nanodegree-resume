var bio = {
	"name" : "Aubrey Mills",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "(334)782-1568",
		"email" : "lee4gitr@gmail.com",
		"github" : "lee4gitr",
		"twitter" : "@lee4gitr59",
		"location" : "Tampa, FL"
	},
	"welcome_message" : "Hi! My name is Aubrey and this is my Resume!",
	"skills" : [
		"Communication", "JavaScript", "Github","HTML", "CSS"
		],
	"biopic" : "images/AubreyMillsPicture.jpg"
}

var education = {
	"schools": [
		{
			"name" : "Alabama School of Math and Science",
			"location" : "Mobile, AL, US",
			"degree": "N/A",
			"major" : "N/A",
			"dates" : "2007 - 2008",
			"url" : "http://www.asms.net/"
			
		},
		{
			"name" : "Andalusia High School",
			"location" : "Andalusia, AL, US",
			"degree" : "Advanced Diploma",
			"major" : "N/A",
			"dates" : "2005-2007 and 2008-2009",
			"url" : "http://andalusiahighschool.al.ach.schoolinsites.com/"
		},
		{
			"name" : "University of Alabama at Birmingham",
			"location" : "Birmingham, AL, US",
			"degree" : "Bachelor of Arts",
			"major" : "Music Technology Cum Laude with Departmental Honors",
			"dates" : "2009-2013",
			"url" : ""
		}
	],
	"online": [
		{
			"title" : "Front End Nanodegree",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "https://www.udacity.com"
		}
	]
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
			"employer" : "Alabama Supreme Court",
			"title" : "Clerk I",
			"location" : "Montgomery, AL, US",
			"dates" : "2010",
			"description" : "Organize and file previous hard-copy cases into a digital format."
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

var projects = {
	"projects": [
		{
			"title" : "Personal Website",
			"dates" : " 2016",
			"description" : "My first website.",
			"imagesURL" : ["images/320px-Downtowntampa08.jpg" 
			]
		}
	]
}

function displayHeader () {

	formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").prepend(formattedBioPic);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$('#topContacts').append(formattedMobile);
	var formattedEmail = HTMLemail.replace ("%data%", bio.contacts.email);
	$('#topContacts').append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$('#topContacts').append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$('#topContacts').append(formattedTwitter);

	formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
	$("#header").append(formattedWelcomeMsg);

	if (bio.skills.length>0) {
	
		$('#header').append(HTMLskillsStart);

		for (i = 0; i < bio.skills.length; i++) {

			var formattedSkill = HTMLskills.replace("%data%" , bio.skills[i]);
			$("#skills").append(formattedSkill); 
		}
	}
}

displayHeader();

function displayFooter () {

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$('#footerContacts').append(formattedMobile);
	var formattedEmail = HTMLemail.replace ("%data%", bio.contacts.email);
	$('#footerContacts').append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$('#footerContacts').append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$('#footerContacts').append(formattedTwitter);

}

displayFooter();

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
	var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
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
	var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].imagesURL);
	$('.project-entry:last').append(formattedProjectImage);
	}
}
displayProjects();

function displayOnline () {
	$('#education').append(HTMLonlineClasses);
	
	for (online in education.online) {
		$('#education').append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online[online].title);
		$('.education-entry:last').append(formattedOnlineTitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online[online].school);
		$('.education-entry:last').append(formattedOnlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.online[online].dates);
		$('.education-entry:last').append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.online[online].url);
		$('.education-entry:last').append(formattedOnlineURL);
	}
}
displayOnline ();

$('#main').append(internationalizeButton);


function inName(intNames) {
	intNames = intNames.trim().split(" ");
	var firstName = intNames[0][0].toUpperCase() + intNames[0].slice(1).toLowerCase();
	var lastName = intNames[1].toUpperCase();
	console.log($("#name").text());
	return firstName + " " + lastName;
}

inName(bio.name);

$('#mapDiv').append(googleMap);
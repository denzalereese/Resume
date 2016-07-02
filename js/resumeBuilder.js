var bio = {
    "name": "Denzale Reese",
    "age": 23,
    "contacts": {
        "mobile": "(216) 288-2134",
        "email": "DLR249@cornell.edu",
        "github": "http://www.github.com/denzalereese",
        "twitter": "http://www.twitter.com/denzalereese",
        "linkedin": "http://www.linkedin.com/in/denzalereese",
        "location": "San Jose, CA"
    },
    "welcomeMessage": "Transitioning from an inner city to an Ivy League institution taught me to adapt quickly, to outhustle circumstance, and to engineer opportunity where I lacked it. I had no exposure to computer science growing up, so I began teaching myself. I am currently enrolled in the Udacity Front-End Web Developer Nanodegree, and looking for the opportunity that practical experience can provide. Due to my background, I am also dedicated to increasing diversity in tech, and exploring the limitless potential technology has to revolutionize education.",
    "skills": ["HTML", "CSS", "Bootstrap", "Responsive Design", "JavaScript", "jQuery", "SQL", "Java", "Android Development",
        "Git/Github", "Object-Oriented Programming"
    ],
    "biopic": "images/biopic.jpg",
    "display": function() {
        var formattedName;
        var formattedRole;
        var formattedMobile;
        formattedName = HTMLheaderName.replace("%data%", 'Denzale "Wolf" Reese');
        formattedRole = HTMLheaderRole.replace("%data%", "Front-End Student @ Udacity");
        formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedin);
        formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
        $("#header").prepend(formattedWelcomeMsg);
        $("#header").prepend(formattedBioPic);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedLocation);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedLinkedIn);
    }
}

var work = {
    "jobs": [{
        "employer": "City Year",
        "title": "Americorps Member",
        "location": "San Jose, CA",
        "dates": "July 2015 - June 2016",
        "description": "Served on the City Year SanDisk team at Horace Cureton Elementary school for 55 hours per week, exposing over 30 underprivileged 4th/5th graders to computer science. Assisted our corporate development office, as a member of the Ambassador Team, in maintaining donor relations, and participating in social media marketing initiatives. Featured in our promotional video for the Google Impact Challenge where our site won $500,000, and spoke at our quarterly Board of Directors meeting. Increased student engagement by collaborating with my teaching partner to create a reward system called the 'starChart' that was later adopted by 100% our team.",
        "link": "http://www.cityyear.org"
    }, {
        "employer": "Cornell University",
        "title": "Computer Lab Manager",
        "location": "Ithaca, NY",
        "dates": "November 2011 - May 2015",
        "description": "Built a computer lab for students from the ground up, set up 12 PC/Mac desktop computers with Windows/Mac OS, and 3 multi-function printers. Maintained the upkeep of the computer lab by installing and repairing hardware/software, providing IT/technical support to over 150 students, and managing 3 new team members. Created an online catalog to organize over 300 library materials so that students could search for specific items, and find them much easier. Helped 100% of visiting Intro to Computer Programming students earn a final course grade of B- or better by assisting with their Java/Python homework, projects, and exam prep.",
        "link": "http://www.cornell.edu"
    }],
    "display": function() {
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var job = work.jobs[i];
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.link);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedEmployer);
            $(".work-entry:last").append(formattedWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }
}

var projects = {
    "projects": [{
        "title": "Portfolio Site",
        "dates": "2016",
        "description": "A responsive site featuring my project portfolio",
        "images": ["images/Portfolio-site.JPG", "images/portfolio-site-mobile.jpg"],
        "link": "http://www.github.com/denzalereese/portfolio"
    },
    {
        "title": "Online Resume",
        "dates": "2016",
        "description": "An online resume built with JavaScript/jQuery",
        "images": ["images/resume-laptop.JPG", "images/resume-mobile.jpg"],
        "link": "https://github.com/denzalereese/frontend-nanodegree-resume"
    }],
    "display": function() {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var project = projects.projects[i];
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.link);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            //Nested loop to display all images in the projects.images array
            for (var j = 0; j < project.images.length; j++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images[j]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
}

var education = {
    "schools": [{
        "name": "Udacity",
        "location": "Mountain View, CA",
        "degree": "Front-End Web Developer Nanodegree (in progress)",
        "majors": ["Front-End Web Development"],
        "dates": "2016",
        "url": "http://www.udacity.com"
    }, {
        "name": "Cornell University",
        "location": "Ithaca, NY",
        "degree": "",
        "majors": ["Development Sociology"],
        "dates": "August 2011 - May 2015",
        "url": "http://www.cornell.edu"
    }],
    "onlineCourses": [{
        "title": "Intro to HTML & CSS",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }, {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }, {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }, {
        "title": "Intro to jQuery",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }, {
        "title": "Developing Android Apps",
        "school": "Udacity",
        "dates": "2015",
        "url": "http://www.udacity.com"
    }, {
        "title": "Advanced Android App Development",
        "school": "Udacity",
        "dates": "2015",
        "url": "http://www.udacity.com"
    }, {
        "title": "Become an Android Developer from Scratch",
        "school": "Udemy",
        "dates": "2015",
        "url": "http://www.udemy.com"
    }],
    "display": function() {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var school = education.schools[i];
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            $(".education-entry:last").append(formattedSchoolName);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolDegree);
            //nested loop to display majors
            for (var j = 0; j < school.majors.length; j++) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors[j]);
                $(".education-entry:last").append(formattedSchoolMajor);
            }

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedSchoolDates);
        }

        $("#education").append(HTMLonlineClasses);
        for (var i = 0; i < education.onlineCourses.length; i++) {
            var onlineCourse = education.onlineCourses[i];
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url).replace("#", onlineCourse.url);
            $("#online-classes").append(HTMLonlineClassStart);
            $(".course-entry:last").append(formattedOnlineTitle);
            $(".course-entry:last").append(formattedOnlineSchool);
            $(".course-entry:last").append(formattedOnlineDates);
            $(".course-entry:last").append(formattedOnlineURL);
        }
    }
}

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

//adds pulse animation on mouseenter events
$("#header").mouseenter(function(){
  $("#header").removeClass("animated bounceInLeft").addClass("animated pulse")
   .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
   function() {
     $(this).removeClass("animated pulse");
    });
});
$("#workExperience").mouseenter(function(){
  $("#workExperience").addClass("animated pulse")
   .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
   function() {
     $(this).removeClass("animated pulse");
    });
});
$("#projects").mouseenter(function(){
  $("#projects").addClass("animated pulse")
   .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
   function() {
     $(this).removeClass("animated pulse");
    });
});
$("#education").mouseenter(function(){
  $("#education").addClass("animated pulse")
   .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
   function() {
     $(this).removeClass("animated pulse");
    });
});
$("#mapDiv").mouseenter(function(){
  $("#mapDiv").addClass("animated pulse")
   .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
   function() {
     $(this).removeClass("animated pulse");
    });
});

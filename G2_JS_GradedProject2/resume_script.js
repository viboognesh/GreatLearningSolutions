const jsonArrayString = `{
	"resume" : 
	[ 
		{
			"id":1,
			"basics": 
			{
				"name": "John Doe",
				"AppliedFor": "Software Engineer",
				"image": "",
				"email": "john@gmail.com",
				"phone": "9999999999",
				"location": 
				{
					"address": "2712 Broadway St",
					"postalCode": "560063",
					"city": "Bangalore",
					"state": "Karnataka"
				},
				"profiles":
				{
					"network": "LinkedIn",
					"url": "https://linkedin.com/john"
				}
			},
			
			"skills": 
			{
				"name": "Web Development",
				"level": "Master",
				"keywords": 
				[
					"HTML",
					"CSS",
					"JavaScript",
					"Python"
				]
			},
			
			"work": 
			{
				"Company Name": "Harman",
				"Position": "Associate Engineer",
				"Start Date": "2013-01-01",
				"End Date": "2014-01-01",
				"Summary": "Associate engineer with development, testing verification and validation experience on Car UI display systems.Performed phone projection development of user stories and testing with infotainment system such as Android auto ,Car playAnalyzed requirements , created test plans, executed test cases for connectivity epic such as C-connect, F-connect.Good at analyzing DLT logs and analyzing the code refactor areas."
			},
				
			"Internship":
			{
				"Company Name": "Ibm",
				"Position": "intern",
				"Start Date": "2013-01-01",
				"End Date": "2014-01-01",
				"Summary": " Learned about Tools used for website testing such as Deep Trawl, NVDA, web developer extension, OpenVAS,Learned about the importance and concept of OWASP.Learned React JS and worked for Frontend development with professional."
		
			},
				
			"projects":
			{
				"name": "Diabetic Retinopaty",
				"description": " created a GUI using QT designer which will take image of retina as input, input image will be processed and compare with the images present in database and then classified as one of DR stage or normal.OpenCV and image processing concepts are used. survey paper on this project is publish in 2nd international conference on Topical Transcend in Science, Technology & Management."
			},
			
			"education": 
			{
				"UG": 
				{
					"institute": "Sai Vidya Institute of Technology",
					"course": "B.E Computer Science and Engineering",
					"Start Date": "2011-01-01",
					"End Date": "2013-01-01",
					"cgpa":"8.7"
				},	
				"Senior Secondary" : 
				{
					"institute": "KV AFS YELAHANKA",
					"cgpa":"8.7"
				},
				"High School" : 
				{
					"institute": "KV AFS Bhuj",
					"cgpa":"8.7"
				}	
			},
			"achievements": 
			{
				"Summary" : ["Attended 5 days industry orientation workshop organized by free software movement"]
			},
			"interests": 
			{
				"hobbies": ["Wildlife","Dance","Workout"]
			}
		},
		{
			"id":2,
			"basics": 
			{
				"name": "Riya",
				"AppliedFor": "Software Engineer",
				"image": "",
				"email": "riya@gmail.com",
				"phone": "9999999999",
				"location": 
				{
					"address": "12 maruthi nilaya ",
					"postalCode": "560063",
					"city": "Bangalore",
					"state": "Karnataka"
				},
				"profiles":
				{
					"network": "LinkedIn",
					"url": "https://linkedin.com/riya"
				}
			},
			
			"skills": 
			{
				"name": "AIML",
				"level": "intermediate",
				"keywords": 
				[
					"python",
					"ML",
					"AI",
					"Image Processing"
				]
			},
			
			"work": 
			{
				"Company Name": "IBM",
				"Position": "Software Engineer",
				"Start Date": "2020-01-01",
				"End Date": "2022-01-01",
				"Summary": "Associate engineer with development, testing verification and validation experience on Car UI display systems.Performed phone projection development of user stories and testing with infotainment system such as Android auto ,Car playAnalyzed requirements , created test plans, executed test cases for connectivity epic such as C-connect, F-connect.Good at analyzing DLT logs and analyzing the code refactor areas."
			},
				
			"Internship":
			{
				"Company Name": "Ibm",
				"Position": "intern",
				"Start Date": "2019-01-01",
				"End Date": "2020-01-01",
				"Summary": " Learned about Tools used for website testing such as Deep Trawl, NVDA, web developer extension, OpenVAS,Learned about the importance and concept of OWASP.Learned React JS and worked for Frontend development with professional."
		
			},
				
			"projects":
			{
				"name": "Diabetic Retinopaty",
				"description": " created a GUI using QT designer which will take image of retina as input, input image will be processed and compare with the images present in database and then classified as one of DR stage or normal.OpenCV and image processing concepts are used. survey paper on this project is publish in 2nd international conference on Topical Transcend in Science, Technology & Management."
			},
			
			"education": 
			{
				"UG": 
				{
					"institute": "Nagarujana Institute of Technology",
					"course": "B.E Computer Science and Engineering",
					"Start Date": "2010-01-01",
					"End Date": "2015-01-01",
					"cgpa":"9.7"
				},	
				"Senior Secondary" : 
				{
					"institute": "Reva Institute",
					"cgpa":"8.7"
				},
				
				"High School" : 
				{
					"institute": "Ryan public school",
					"cgpa":"10.0"
				}	
			},
			"achievements": 
			{
				"dums" : "",
				"Summary" : [
					"Attended 5 days industry orientation workshop organized by free software movement",
					"Participated in google hackathon"
				]
			},
			"interests": 
			{
				"hobbies": ["Wildlife","Dance","Workout","Reading books"]
			}
		},
		{
			"id":3,
			"basics": 
			{
				"name": "Rahul Roy",
				"AppliedFor": "Manager",
				"image": "",
				"email": "roy@gmail.com",
				"phone": "9999999999",
				"location": 
				{
					"address": " 305 A-Richard apartments ",
					"postalCode": "560054",
					"city": "Ahemdabad",
					"state": "Gujarat"
				},
				"profiles":
				{
					"network": "LinkedIn",
					"url": "https://linkedin.com/rahulroy"
				}
			},
			
			"skills": 
			{
				"name": "FullStack",
				"level": "Master",
				"keywords": 
				[
					"HTML",
					"CSS",
					"JavaScript",
					"React",
					"Java"
				]
			},
			
			"work": 
			{
				"Company Name": "Great Learning",
				"Position": "Manager",
				"Start Date": "2015-01-01",
				"End Date": "2020-01-01",
				"Summary": "Associate engineer with development, testing verification and validation experience on Car UI display systems.Performed phone projection development of user stories and testing with infotainment system such as Android auto ,Car playAnalyzed requirements , created test plans, executed test cases for connectivity epic such as C-connect, F-connect.Good at analyzing DLT logs and analyzing the code refactor areas."
			},
				
			"Internship":
			{
				"Company Name": "TCS",
				"Position": "intern",
				"Start Date": "2013-01-01",
				"End Date": "2014-01-01",
				"Summary": " Learned about Tools used for website testing such as Deep Trawl, NVDA, web developer extension, OpenVAS,Learned about the importance and concept of OWASP.Learned React JS and worked for Frontend development with professional."
		
			},
				
			"projects":
			{
				"name": "E-Commerce Website",
				"description": " I have created a ecommerce website using html,css,and react with javascripts, Porject has functionality where user can select any item of their choice and store it into a cart or they add item into their whishlist, seraching functionality allow user to search any product by name ."
			},
			
			"education": 
			{
				"UG": 
				{
					"institute": "BMS Institute of Technology",
					"course": "B.E Information Science and Engineering",
					"Start Date": "2008-01-01",
					"End Date": "2011-01-01",
					"cgpa":"8.7"
				},	
				"Senior Secondary" : 
				{
					"institute": "Delhi Public School",
					"cgpa":"9.0"
				},
				
				"High School" : 
				{
					"institute": "Delhi Public School",
					"cgpa":"9.6"
				}	
			},
			"achievements": 
			{
				"Summary" : ["Attended a workshop on fullstack development", "participated in state level baskteball"]
			},
			"interests": 
			{
				"hobbies": ["Wildlife","Travelling","Workout"]
			}
		},
		{
			"id":4,
			"basics": 
			{
				"name": "Priya Desai",
				"AppliedFor": "HR",
				"image": "",
				"email": "Priya@gmail.com",
				"phone": "9999999999",
				"location": 
				{
					"address": " 201 A-Niteshapartments ",
					"postalCode": "560054",
					"city": "Bikaner",
					"state": "Rajasthan"
				},
				"profiles":
				{
					"network": "LinkedIn",
					"url": "https://linkedin.com/PriyaDesai"
				}
			},
			
			"skills": 
			{
				"name": "HR Management",
				"level": "Master",
				"keywords": 
				[
					"Excel",
					"Data Management",
					"Communication skill"

				]
			},
			
			"work": 
			{
				"Company Name": "Cerner private lmtd.",
				"Position": "HR",
				"Start Date": "2015-01-01",
				"End Date": "2020-01-01",
				"Summary": "Involve in various communication activites with client, Handling data for all employees"
			},
				
			"Internship":
			{
				"Company Name": "TCS",
				"Position": "intern",
				"Start Date": "2013-01-01",
				"End Date": "2014-01-01",
				"Summary": "Source potential candidates from various online channels,Craft recruiting emails to attract passive candidates,Screen incoming resumes and application forms "
			},
				
			"projects":
			{
				"name": "Efficiency Design of Solar Panels",
				"description": "This project aims to design the solar panel cells with higer energy consumption in all types of weathers and also helps in absorbing higher energy."
			},
			
			"education": 
			{
				"UG": 
				{
					"institute": "BMS Institute of Technology",
					"course": "MCA",
					"Start Date": "2008-01-01",
					"End Date": "2011-01-01",
					"cgpa":"8.7"
				},	
				"Senior Secondary" : 
				{
					"institute": "Delhi Public School",
					"cgpa":"9.0"
				},
				
				"High School" : 
				{
					"institute": "Delhi Public School",
					"cgpa":"9.6"
				}	
			},
			"achievements": 
			{
				"Summary" : ["Been complimented by your supervisor or co-workers","Increased revenue or sales for the company"]
			},
			"interests": 
			{
				"hobbies": ["Art&Craft","Travelling","Workout"]
			}
		},
		{
			"id":5,
			"basics": 
			{
				"name": "Rakesh Ranjan",
				"AppliedFor": "Manager",
				"image": "",
				"email": "Priya@gmail.com",
				"phone": "9999999999",
				"location": 
				{
					"address": " 201 A-Niteshapartments ",
					"postalCode": "560054",
					"city": "Bikaner",
					"state": "Rajasthan"
				},
				"profiles":
				{
					"network": "LinkedIn",
					"url": "https://linkedin.com/PriyaDesai"
				}
			},
			
			"skills": 
			{
				"name": "HR Management",
				"level": "Master",
				"keywords": 
				[
					"Excel",
					"Data Management",
					"Communication skill"

				]
			},
			
			"work": 
			{
				"Company Name": "Cerner private lmtd.",
				"Position": "HR",
				"Start Date": "2015-01-01",
				"End Date": "2020-01-01",
				"Summary": "Involve in various communication activites with client, Handling data for all employees"
			},
				
			"Internship":
			{
				"Company Name": "TCS",
				"Position": "intern",
				"Start Date": "2013-01-01",
				"End Date": "2014-01-01",
				"Summary": "Source potential candidates from various online channels,Craft recruiting emails to attract passive candidates,Screen incoming resumes and application forms "
			},
				
			"projects":
			{
				"name": "Efficiency Design of Solar Panels",
				"description": "This project aims to design the solar panel cells with higer energy consumption in all types of weathers and also helps in absorbing higher energy."
			},
			
			"education": 
			{
				"UG": 
				{
					"institute": "BMS Institute of Technology",
					"course": "MCA",
					"Start Date": "2008-01-01",
					"End Date": "2011-01-01",
					"cgpa":"8.7"
				},	
				"Senior Secondary" : 
				{
					"institute": "Delhi Public School",
					"cgpa":"9.0"
				},
				
				"High School" : 
				{
					"institute": "Delhi Public School",
					"cgpa":"9.6"
				}	
			},
			"achievements": 
			{
				"Summary" : ["Best employee of the year 2021","Increased revenue or sales for the company in 2019"]
			},
			"interests": 
			{
				"hobbies": ["Art&Craft","Travelling","Workout"]
			}
		},
		{
			"id":6,
			"basics": 
			{
				"name": "Godse",
				"AppliedFor": "Manager",
				"image": "",
				"email": "Priya@gmail.com",
				"phone": "9999999999",
				"location": 
				{
					"address": " 201 A-Niteshapartments ",
					"postalCode": "560054",
					"city": "Bikaner",
					"state": "Rajasthan"
				},
				"profiles":
				{
					"network": "LinkedIn",
					"url": "https://linkedin.com/PriyaDesai"
				}
			},
			
			"skills": 
			{
				"name": "HR Management",
				"level": "Master",
				"keywords": 
				[
					"Excel",
					"Data Management",
					"Communication skill"

				]
			},
			
			"work": 
			{
				"Company Name": "Cerner private lmtd.",
				"Position": "HR",
				"Start Date": "2015-01-01",
				"End Date": "2020-01-01",
				"Summary": "Involve in various communication activites with client, Handling data for all employees"
			},
				
			"Internship":
			{
				"Company Name": "TCS",
				"Position": "intern",
				"Start Date": "2013-01-01",
				"End Date": "2014-01-01",
				"Summary": "Source potential candidates from various online channels,Craft recruiting emails to attract passive candidates,Screen incoming resumes and application forms "
			},
				
			"projects":
			{
				"name": "Efficiency Design of Solar Panels",
				"description": "This project aims to design the solar panel cells with higer energy consumption in all types of weathers and also helps in absorbing higher energy."
			},
			
			"education": 
			{
				"UG": 
				{
					"institute": "BMS Institute of Technology",
					"course": "MCA",
					"Start Date": "2008-01-01",
					"End Date": "2011-01-01",
					"cgpa":"8.7"
				},	
				"Senior Secondary" : 
				{
					"institute": "Delhi Public School",
					"cgpa":"9.0"
				},
				
				"High School" : 
				{
					"institute": "Delhi Public School",
					"cgpa":"9.6"
				}	
			},
			"achievements": 
			{
				"Summary" : [
					"Been complimented by your supervisor or co-workers",
					"Increased revenue or sales for the company"
				]
			},
			"interests": 
			{
				"hobbies": ["Art&Craft","Travelling","Workout"]
			}
		}
	]		 
}`;

const jsonArray = JSON.parse(jsonArrayString).resume;
let filteredData = jsonArray;
let currentIndex = 0;
setValues(currentIndex);

document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById("searchBox");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
});

prevButton.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    setValues(currentIndex);
  }
});

nextButton.addEventListener("click", function () {
  if (currentIndex < filteredData.length - 1) {
    currentIndex++;
    setValues(currentIndex);
  }
});

function togglePages(filteredDataLength) {
  if (filteredDataLength == 0) {
    document.getElementById("ResumeContent").style.display = "none";
    document.getElementById("NoResumeFound").style.display = "block";
  } else {
    document.getElementById("ResumeContent").style.display = "block";
    document.getElementById("NoResumeFound").style.display = "none";
    currentIndex = 0;
    setValues(currentIndex);
  }
}

searchBox.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    const searchString = searchBox.value.toLowerCase();
    if (searchString != "") {
      filteredData = jsonArray.filter((item) => {
        return item.basics.AppliedFor.toLowerCase().includes(searchString);
      });
      togglePages(filteredData.length);
      currentIndex = 0;
      setValues(currentIndex);
    } else {
      filteredData = jsonArray;
      togglePages(filteredData.length);
      currentIndex = 0;
      setValues(currentIndex);
    }
    searchBox.value = "";
  }
});

searchboxtwo = document.getElementById("NoResumeFoundSearchBox");
searchboxtwo.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    const searchString = searchboxtwo.value.toLowerCase();
    if (searchString != "") {
      filteredData = jsonArray.filter((item) => {
        return item.basics.AppliedFor.toLowerCase().includes(searchString);
      });
      togglePages(filteredData.length);
      currentIndex = 0;
      setValues(currentIndex);
    } else {
      filteredData = jsonArray;
      togglePages(filteredData.length);
      currentIndex = 0;
      setValues(currentIndex);
    }
    searchboxtwo.value = "";
  }
});

function toggleButtons(prevshow, nextshow) {
  if (prevshow) {
    prevButton.style.display = "block";
  } else {
    prevButton.style.display = "none";
  }
  if (nextshow) {
    nextButton.style.display = "block";
  } else {
    nextButton.style.display = "none";
  }
}

function getEducationList(obj) {
  const EducationList = [];
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      EducationList.push(
        `<b>${key}: </b>${Object.values(obj[key]).join(", ")}`
      );
    }
  }

  return EducationList;
}

function getInternshipList(obj) {
  const InternshipList = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      InternshipList.push(`<b>${key}: </b>${obj[key]}`);
    }
  }
  return InternshipList;
}

// Function to set the values of elements
function setValues(currentIndex) {
  let arrayLength = filteredData.length;
  toggleButtons(currentIndex > 0, currentIndex < arrayLength - 1);
  resumeitem = filteredData[currentIndex];
  // Setting values for the header
  document.getElementById("name").textContent = resumeitem.basics.name;
  document.getElementById("AppliedFor").textContent =
    resumeitem.basics.AppliedFor;

  // Setting profile picture source
  document.getElementById("profile").src = "profile.jpg"; // Update the path accordingly

  // Setting values for the sidebar
  document.getElementById("phone").textContent = resumeitem.basics.phone;
  document.getElementById("email").textContent = resumeitem.basics.email;
  document.getElementById(
    "linkedin"
  ).innerHTML = `<a href="${resumeitem.basics.profiles.url}">${resumeitem.basics.profiles.network}</a>`;

  // Setting values for the skills list
  const skillsList = document.getElementById("skills");
  skillsList.innerHTML = ""; // Clear existing skills
  const newSkills = resumeitem.skills.keywords;
  newSkills.forEach((skill) => {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
  });

  // Setting values for the hobbies list
  const hobbiesList = document.getElementById("hobbies");
  hobbiesList.innerHTML = ""; // Clear existing hobbies
  const newHobbies = resumeitem.interests.hobbies;
  newHobbies.forEach((hobby) => {
    const listItem = document.createElement("li");
    listItem.textContent = hobby;
    hobbiesList.appendChild(listItem);
  });

  // Setting values for the main content
  document.getElementById(
    "Company Name"
  ).innerHTML = `<b>Company Name: </b>${resumeitem.work["Company Name"]}`;
  document.getElementById(
    "Position"
  ).innerHTML = `<b>Position: </b>${resumeitem.work.Position}`;
  document.getElementById(
    "Start Date"
  ).innerHTML = `<b>Start Date: </b>${resumeitem.work["Start Date"]}`;
  document.getElementById(
    "End Date"
  ).innerHTML = `<b>End Date: </b>${resumeitem.work["End Date"]}`;
  document.getElementById(
    "Summary"
  ).innerHTML = `<b>Summary: </b>${resumeitem.work.Summary}`;
  document.getElementById(
    "projects"
  ).innerHTML = `<b>${resumeitem.projects.name}: </b>${resumeitem.projects.description}`;

  // Setting values for the education list
  const educationList = document.getElementById("education");
  educationList.innerHTML = ""; // Clear existing education
  const newEducation = getEducationList(resumeitem.education);
  newEducation.forEach((level) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = level;
    educationList.appendChild(listItem);
  });

  // Setting values for the Internship list
  const internshipList = document.getElementById("Internship");
  internshipList.innerHTML = ""; // Clear existing internships
  const newInternships = getInternshipList(resumeitem.Internship);
  newInternships.forEach((internship) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = internship;
    internshipList.appendChild(listItem);
  });

  // Setting values for the achievements list
  const achievementsList = document.getElementById("achievements");
  achievementsList.innerHTML = ""; // Clear existing achievements
  const newAchievements = resumeitem.achievements.Summary;
  newAchievements.forEach((achievement) => {
    const listItem = document.createElement("li");
    listItem.textContent = achievement;
    achievementsList.appendChild(listItem);
  });
}

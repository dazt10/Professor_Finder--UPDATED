// ID GETTER FOR PROF. FINDER
let subj_title1 = document.getElementById('subj-title1');
let subj_title2 = document.getElementById('subj-title2');
let subj_title3 = document.getElementById('subj-title3');
let subj_title4 = document.getElementById('subj-title4');
let subj_title5 = document.getElementById('subj-title5');
let subj_title6 = document.getElementById('subj-title6');
let subj_title7 = document.getElementById('subj-title7');
let subj_title8 = document.getElementById('subj-title8');
let subj_title9 = document.getElementById('subj-title9');

let nameSubject1 = document.getElementById('nameSubject1');
let nameSubject2 = document.getElementById('nameSubject2');
let nameSubject3 = document.getElementById('nameSubject3');
let nameSubject4 = document.getElementById('nameSubject4');
let nameSubject5 = document.getElementById('nameSubject5');
let nameSubject6 = document.getElementById('nameSubject6');
let nameSubject7 = document.getElementById('nameSubject7');
let nameSubject8 = document.getElementById('nameSubject8');
let nameSubject9 = document.getElementById('nameSubject9');

let prof1 = document.querySelectorAll('.prof1');
let prof2 = document.querySelectorAll('.prof2');
let prof3 = document.querySelectorAll('.prof3');
let prof4 = document.querySelectorAll('.prof4');
let prof5 = document.querySelectorAll('.prof5');

// YEAR LEVEL DROPDOWN
let firstYear = document.getElementById('1st-year');
let secondYear = document.getElementById('2nd-year');
let thirdYear = document.getElementById('3rd-year');
let fourthYear = document.getElementById('4th-year');
let year_name = document.getElementById('year-change');

// YEAR AND SECTION IN TITLE
let yearLevel = document.querySelectorAll('.yearLevel');
let year_section1 = document.getElementById('year-title1');
let year_section2 = document.getElementById('year-title2');
let year_section3 = document.getElementById('year-title3');
let year_section4 = document.getElementById('year-title4');
let year_section5 = document.getElementById('year-title5');
let year_section6 = document.getElementById('year-title6');
let year_section7 = document.getElementById('year-title7');
let year_section8 = document.getElementById('year-title8');

// TOGGLE DROPDOWNW VARIABLES
let prog_dropdown = document.querySelector('.program-dropdown');
let year_dropdown = document.querySelector('.year-dropdown');

// TOGGLE BUTTON FOR PROGRAM AND YEAR
prog_dropdown.addEventListener('click', () => {
	prog_dropdown.classList.toggle('active');
	if (year_dropdown.classList.contains('active')) {
		year_dropdown.classList.remove('active');
	}
});
year_dropdown.addEventListener('click', () => {
	year_dropdown.classList.toggle('active');
	if (prog_dropdown.classList.contains('active')) {
		prog_dropdown.classList.remove('active');
	}
});

// PROGRAM DROPDOWN VARIABLES
let eng_studies = document.getElementById('eng-studies');
let journ = document.getElementById('journ');
let pol_sci = document.getElementById('pol-sci');
let applied_math = document.getElementById('app-math');
let biology = document.getElementById('bio');
let psychology = document.getElementById('psych');
let social_work = document.getElementById('soc-work');
let program_name = document.getElementById('program-change');

// FOR ADDING BLOCK WHEN SECTION TEXT CHARACTER IS MORE THAN 10
const section_box = document.querySelectorAll('.section');

// SELECT ALL SECTION NAME
const prog_title = document.querySelectorAll('.prog-title');

// SELECT ALL PROGRAM NAME
const prog_name = document.querySelectorAll('.nameProgram');

// ==== UPDATE THE CARd ====

// CARD UPDATE
eng_studies.addEventListener('click', () => {
	program_name.innerHTML = 'English Language Studies'; // CHANGE BTN NAME

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BAELS';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'English Language Studies';
	});
});

journ.addEventListener('click', () => {
	program_name.innerHTML = 'Journalism'; // CHANGE BTN NAME

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BAJ';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Journalism';
	});
});

pol_sci.addEventListener('click', () => {
	program_name.innerHTML = 'Political Science'; // CHANGE BTN NAME

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BAPS';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Political Science';
	});
});

applied_math.addEventListener('click', () => {
	program_name.innerHTML = 'Applied Mathematics'; // CHANGE BTN NAME

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSAM';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Applied Mathematics';
	});
});

biology.addEventListener('click', () => {
	program_name.innerHTML = 'Biology'; // CHANGE BTN NAME

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSBio';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Biology';
	});
});

psychology.addEventListener('click', () => {
	program_name.innerHTML = 'Psychology'; // CHANGE BTN NAME

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSPsych';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Psychology';
	});
});

social_work.addEventListener('click', () => {
	program_name.innerHTML = 'Social Work'; // CHANGE BTN NAME

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSSW';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Social Work';
	});
});

// YEAR UPDATE
firstYear.addEventListener('click', () => {
	year_name.innerHTML = 'First Year'; // DROPDOWN

	yearLevel.forEach((level) => {
		level.innerHTML = '1st Year';
	});

	year_section1.innerHTML = '1-1';
	year_section2.innerHTML = '1-2';
	year_section3.innerHTML = '1-3';
	year_section4.innerHTML = '1-4';
	year_section5.innerHTML = '1-5';
	year_section6.innerHTML = '1-6';
	year_section7.innerHTML = '1-7';
	year_section8.innerHTML = '1-8';
});

secondYear.addEventListener('click', () => {
	year_name.innerHTML = 'Second Year'; // DROPDOWN

	yearLevel.forEach((level) => {
		level.innerHTML = '2nd Year';
	});

	year_section1.innerHTML = '2-1';
	year_section2.innerHTML = '2-2';
	year_section3.innerHTML = '2-3';
	year_section4.innerHTML = '2-4';
	year_section5.innerHTML = '2-5';
	year_section6.innerHTML = '2-6';
	year_section7.innerHTML = '2-7';
	year_section8.innerHTML = '2-8';
});

thirdYear.addEventListener('click', () => {
	year_name.innerHTML = 'Third Year'; // DROPDOWN

	yearLevel.forEach((level) => {
		level.innerHTML = '3rd Year';
	});

	year_section1.innerHTML = '3-1';
	year_section2.innerHTML = '3-2';
	year_section3.innerHTML = '3-3';
	year_section4.innerHTML = '3-4';
	year_section5.innerHTML = '3-5';
	year_section6.innerHTML = '3-6';
	year_section7.innerHTML = '3-7';
	year_section8.innerHTML = '3-8';
});

fourthYear.addEventListener('click', () => {
	year_name.innerHTML = 'Fourth Year'; // DROPDOWN

	yearLevel.forEach((level) => {
		level.innerHTML = '4th Year';
	});

	year_section1.innerHTML = '4-1';
	year_section2.innerHTML = '4-2';
	year_section3.innerHTML = '4-3';
	year_section4.innerHTML = '4-4';
	year_section5.innerHTML = '4-5';
	year_section6.innerHTML = '4-6';
	year_section7.innerHTML = '4-7';
	year_section8.innerHTML = '4-8';
});

// ==== CARD UPDATE FOR PROF. FINDER ====

// CARD UPDATE
function baelsSub() {
	program_name.innerHTML = 'English Language Studies';

	subj_title1.innerHTML = 'Eng Language Subject#1';
	subj_title2.innerHTML = 'Eng Language Subject#2';
	subj_title3.innerHTML = 'Eng Language Subject#3';
	subj_title4.innerHTML = 'Eng Language Subject#4';
	subj_title5.innerHTML = 'Eng Language Subject#5';
	subj_title6.innerHTML = 'Eng Language Subject#6';
	subj_title7.innerHTML = 'Eng Language Subject#7';
	subj_title8.innerHTML = 'Eng Language Subject#8';
	subj_title9.innerHTML = 'Eng Language Subject#9';

	nameSubject1.innerHTML = 'Art Appreciation';
	nameSubject2.innerHTML = 'Ethics';
	nameSubject3.innerHTML = 'Mathematics in the Modern World';
	nameSubject4.innerHTML = 'Purposive Communication';
	nameSubject5.innerHTML = 'Science, Technology, and Society';
	nameSubject6.innerHTML = 'Understanding The Self';
	nameSubject7.innerHTML = 'Movement Enhanecment';
	nameSubject8.innerHTML = 'National Traning Service Program 1';
	nameSubject9.innerHTML = 'Institutional Orientation';

	prof1.forEach((prof) => {
		prof.innerHTML = '202512352 - Alice Mae';
	});

	prof2.forEach((prof) => {
		prof.innerHTML = '202512350 - Ferrero Rochelle';
	});

	prof3.forEach((prof) => {
		prof.innerHTML = '202512351 - Raiden Ei';
	});

	prof4.forEach((prof) => {
		prof.innerHTML = '202512349 - Joshua Garcia';
	});

	prof5.forEach((prof) => {
		prof.innerHTML = '202512353 - Miguel Tan Felix';
	});
}

function bajSub() {
	program_name.innerHTML = 'Journalism';

	subj_title1.innerHTML = 'Journalism Subject#1';
	subj_title2.innerHTML = 'Journalism Subject#2';
	subj_title3.innerHTML = 'Journalism Subject#3';
	subj_title4.innerHTML = 'Journalism Subject#4';
	subj_title5.innerHTML = 'Journalism Subject#5';
	subj_title6.innerHTML = 'Journalism Subject#6';
	subj_title7.innerHTML = 'Journalism Subject#7';
	subj_title8.innerHTML = 'Journalism Subject#8';
	subj_title9.innerHTML = 'Journalism Subject#9';

	nameSubject1.innerHTML = 'Dalumat Ng/Sa Filipino';
	nameSubject2.innerHTML = 'Purposive Communication';
	nameSubject3.innerHTML = 'Kontekstwalisadong Komunikasyon sa Filipino';
	nameSubject4.innerHTML = 'Art Appreciation';
	nameSubject5.innerHTML = 'Ethics';
	nameSubject6.innerHTML = 'Institutional Orientation';
	nameSubject7.innerHTML = 'Understanding The Self';
	nameSubject8.innerHTML = 'Movement Enhanecment';
	nameSubject9.innerHTML = 'National Traning Service Program 1';

	prof1.forEach((prof) => {
		prof.innerHTML = '202512339 - Christine Prestine';
	});

	prof2.forEach((prof) => {
		prof.innerHTML = '202512340 - Daniel Padilla';
	});

	prof3.forEach((prof) => {
		prof.innerHTML = '202512341 - Justin Bieber';
	});

	prof4.forEach((prof) => {
		prof.innerHTML = '202512342 - Nicole Ann';
	});

	prof5.forEach((prof) => {
		prof.innerHTML = '202512343 - Gabriel Flores';
	});
}

function bapsSub() {
	program_name.innerHTML = 'Political Science';

	subj_title1.innerHTML = 'Pol Science Subject#1';
	subj_title2.innerHTML = 'Pol Science Subject#2';
	subj_title3.innerHTML = 'Pol Science Subject#3';
	subj_title4.innerHTML = 'Pol Science Subject#4';
	subj_title5.innerHTML = 'Pol Science Subject#5';
	subj_title6.innerHTML = 'Pol Science Subject#6';
	subj_title7.innerHTML = 'Pol Science Subject#7';
	subj_title8.innerHTML = 'Pol Science Subject#8';
	subj_title9.innerHTML = 'Pol Science Subject#9';

	nameSubject1.innerHTML = 'Art Appreciation';
	nameSubject2.innerHTML = 'Ethics';
	nameSubject3.innerHTML = 'Mathematics in the Modern World';
	nameSubject4.innerHTML = 'Purposive Communication';
	nameSubject5.innerHTML = 'Science, Technology, and Society';
	nameSubject6.innerHTML = 'Understanding The Self';
	nameSubject7.innerHTML = 'Movement Enhanecment';
	nameSubject8.innerHTML = 'National Traning Service Program 1';
	nameSubject9.innerHTML = 'Institutional Orientation';

	prof1.forEach((prof) => {
		prof.innerHTML = '202512344 - Maria Elena';
	});

	prof2.forEach((prof) => {
		prof.innerHTML = '202512345 - Patrick the Star';
	});

	prof3.forEach((prof) => {
		prof.innerHTML = '202512346 - Lily Cruz';
	});

	prof4.forEach((prof) => {
		prof.innerHTML = '202512347 - Mark Angelo';
	});

	prof5.forEach((prof) => {
		prof.innerHTML = '202512348 - Erich Gonzales';
	});
}

function bsamSub() {
	program_name.innerHTML = 'Applied Mathematics';

	subj_title1.innerHTML = 'Applied Math Subject#1';
	subj_title2.innerHTML = 'Applied Math Subject#2';
	subj_title3.innerHTML = 'Applied Math Subject#3';
	subj_title4.innerHTML = 'Applied Math Subject#4';
	subj_title5.innerHTML = 'Applied Math Subject#5';
	subj_title6.innerHTML = 'Applied Math Subject#6';
	subj_title7.innerHTML = 'Applied Math Subject#7';
	subj_title8.innerHTML = 'Applied Math Subject#8';
	subj_title9.innerHTML = 'Applied Math Subject#9';

	nameSubject1.innerHTML = 'Art Appreciation';
	nameSubject2.innerHTML = 'Ethics';
	nameSubject3.innerHTML = 'Mathematics in the Modern World';
	nameSubject4.innerHTML = 'Purposive Communication';
	nameSubject5.innerHTML = 'Science, Technology, and Society';
	nameSubject6.innerHTML = 'Understanding The Self';
	nameSubject7.innerHTML = 'Movement Enhanecment';
	nameSubject8.innerHTML = 'National Traning Service Program 1';
	nameSubject9.innerHTML = 'Institutional Orientation';

	prof1.forEach((prof) => {
		prof.innerHTML = '202512334 - Delilah Sabine';
	});

	prof2.forEach((prof) => {
		prof.innerHTML = '202512335 - Bianca Yao';
	});

	prof3.forEach((prof) => {
		prof.innerHTML = '202512336 - Mark Tahimik Lang';
	});

	prof4.forEach((prof) => {
		prof.innerHTML = '202512337 - Chloe De Leon';
	});

	prof5.forEach((prof) => {
		prof.innerHTML = '202512338 - Arvin Arduino';
	});
}

function bsbioSub() {
	program_name.innerHTML = 'Biology';

	subj_title1.innerHTML = 'Biology Subject#1';
	subj_title2.innerHTML = 'Biology Subject#2';
	subj_title3.innerHTML = 'Biology Subject#3';
	subj_title4.innerHTML = 'Biology Subject#4';
	subj_title5.innerHTML = 'Biology Subject#5';
	subj_title6.innerHTML = 'Biology Subject#6';
	subj_title7.innerHTML = 'Biology Subject#7';
	subj_title8.innerHTML = 'Biology Subject#8';
	subj_title9.innerHTML = 'Biology Subject#9';

	nameSubject1.innerHTML = 'Art Appreciation';
	nameSubject2.innerHTML = 'Ethics';
	nameSubject3.innerHTML = 'Mathematics in the Modern World';
	nameSubject4.innerHTML = 'Purposive Communication';
	nameSubject5.innerHTML = 'Science, Technology, and Society';
	nameSubject6.innerHTML = 'Understanding The Self';
	nameSubject7.innerHTML = 'Movement Enhanecment';
	nameSubject8.innerHTML = 'National Traning Service Program 1';
	nameSubject9.innerHTML = 'Institutional Orientation';

	prof1.forEach((prof) => {
		prof.innerHTML = '202512334 - Janine Berdine';
	});

	prof2.forEach((prof) => {
		prof.innerHTML = '202512335 - Sofia the First';
	});

	prof3.forEach((prof) => {
		prof.innerHTML = '202512336 - Fernando Poe Jr.';
	});

	prof4.forEach((prof) => {
		prof.innerHTML = '202512337 - Razzie Binx';
	});

	prof5.forEach((prof) => {
		prof.innerHTML = '202512338 - Yae Miko';
	});
}

function bspsychSub() {
	program_name.innerHTML = 'Psychology';

	subj_title1.innerHTML = 'Psychology Subject#1';
	subj_title2.innerHTML = 'Psychology Subject#2';
	subj_title3.innerHTML = 'Psychology Subject#3';
	subj_title4.innerHTML = 'Psychology Subject#4';
	subj_title5.innerHTML = 'Psychology Subject#5';
	subj_title6.innerHTML = 'Psychology Subject#6';
	subj_title7.innerHTML = 'Psychology Subject#7';
	subj_title8.innerHTML = 'Psychology Subject#8';
	subj_title9.innerHTML = 'Psychology Subject#9';

	nameSubject1.innerHTML = 'Art Appreciation';
	nameSubject2.innerHTML = 'Ethics';
	nameSubject3.innerHTML = 'Mathematics in the Modern World';
	nameSubject4.innerHTML = 'Purposive Communication';
	nameSubject5.innerHTML = 'Science, Technology, and Society';
	nameSubject6.innerHTML = 'Understanding The Self';
	nameSubject7.innerHTML = 'Movement Enhanecment';
	nameSubject8.innerHTML = 'National Traning Service Program 1';
	nameSubject9.innerHTML = 'Institutional Orientation';

	prof1.forEach((prof) => {
		prof.innerHTML = '202512334 - Ayanokoji Kiyotaka';
	});

	prof2.forEach((prof) => {
		prof.innerHTML = '202512335 - Horikita Suzune';
	});

	prof3.forEach((prof) => {
		prof.innerHTML = '202512336 - Kushida Kikyo';
	});

	prof4.forEach((prof) => {
		prof.innerHTML = '202512337 - Karuizawa Kei';
	});

	prof5.forEach((prof) => {
		prof.innerHTML = '202512338 - Ryuen Kakeru';
	});
}

function bsswSub() {
	program_name.innerHTML = 'Social Work';

	subj_title1.innerHTML = 'Social Work Subject#1';
	subj_title2.innerHTML = 'Social Work Subject#2';
	subj_title3.innerHTML = 'Social Work Subject#3';
	subj_title4.innerHTML = 'Social Work Subject#4';
	subj_title5.innerHTML = 'Social Work Subject#5';
	subj_title6.innerHTML = 'Social Work Subject#6';
	subj_title7.innerHTML = 'Social Work Subject#7';
	subj_title8.innerHTML = 'Social Work Subject#8';
	subj_title9.innerHTML = 'Social Work Subject#9';

	nameSubject1.innerHTML = 'Art Appreciation';
	nameSubject2.innerHTML = 'Ethics';
	nameSubject3.innerHTML = 'Mathematics in the Modern World';
	nameSubject4.innerHTML = 'Purposive Communication';
	nameSubject5.innerHTML = 'Science, Technology, and Society';
	nameSubject6.innerHTML = 'Understanding The Self';
	nameSubject7.innerHTML = 'Movement Enhanecment';
	nameSubject8.innerHTML = 'National Traning Service Program 1';
	nameSubject9.innerHTML = 'Institutional Orientation';

	prof1.forEach((prof) => {
		prof.innerHTML = '202512334 - Will Serfort';
	});

	prof2.forEach((prof) => {
		prof.innerHTML = '202512335 - Elfaria Albis Serfort';
	});

	prof3.forEach((prof) => {
		prof.innerHTML = '202512336 - Sion Ulster';
	});

	prof4.forEach((prof) => {
		prof.innerHTML = '202512337 - Colette Loire';
	});

	prof5.forEach((prof) => {
		prof.innerHTML = '202512338 - Julius Rainburg';
	});
}

function first_Year() {
	year_name.innerHTML = 'First Year';

	yearLevel.forEach((level) => {
		level.innerHTML = '1st Year';
	});
}
function second_Year() {
	year_name.innerHTML = 'Second Year';

	yearLevel.forEach((level) => {
		level.innerHTML = '2nd Year';
	});
}
function third_Year() {
	year_name.innerHTML = 'Third Year';

	yearLevel.forEach((level) => {
		level.innerHTML = '3rd Year';
	});
}
function fourth_Year() {
	year_name.innerHTML = 'Fourth Year';

	yearLevel.forEach((level) => {
		level.innerHTML = '4th Year';
	});
}

// =====SCHEDULE PAGE FUNCTION=====

// Schedules

const schedules = {

	// === BAELS ===
	// 1ST YEARS

	"BAELS 1-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 1-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 1-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 1-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 1-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 1-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 1-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 1-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	// 2ND YEARS
	"BAELS 2-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 2-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 2-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 2-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 2-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 2-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 2-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 2-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	// 3RD YEARS
	"BAELS 3-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 3-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 3-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 3-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 3-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 3-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 3-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 3-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	// 4TH YEARS
	"BAELS 4-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 4-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 4-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 4-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 4-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 4-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 4-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAELS 4-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// === BAJ ===
// 1ST YEARS

	"BAJ 1-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 1-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 1-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 1-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 1-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 1-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 1-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 1-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// 2ND YEARS
	"BAJ 2-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 2-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 2-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 2-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 2-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 2-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 2-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 2-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// 3RD YEARS
	"BAJ 3-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 3-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 3-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 3-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 3-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 3-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 3-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 3-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// 4TH YEARS
	"BAJ 4-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 4-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 4-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 4-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 4-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 4-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 4-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAJ 4-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// === BAPS ===
// 1ST YEARS
	"BAPS 1-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 1-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 1-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 1-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 1-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 1-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 1-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 1-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// 2ND YEARS
	"BAPS 2-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 2-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 2-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 2-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 2-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 2-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 2-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 2-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// 3RD YEARS
	"BAPS 3-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 3-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 3-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 3-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 3-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 3-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 3-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 3-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// 4TH YEARS
	"BAPS 4-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 4-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 4-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 4-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 4-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 4-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 4-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BAPS 4-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// === BSAM ===
// 1ST YEARS
	"BSAM 1-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 1-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 1-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 1-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 1-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 1-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 1-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 1-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// 2ND YEARS
	"BSAM 2-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 2-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 2-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 2-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 2-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 2-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 2-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 2-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// 3RD YEARS
	"BSAM 3-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 3-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 3-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 3-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 3-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 3-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 3-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 3-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// 4TH YEARS
	"BSAM 4-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 4-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 4-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 4-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 4-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 4-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 4-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSAM 4-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	// === BSBio ===
// 1ST YEARS
	"BSBio 1-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 1-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 1-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 1-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 1-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 1-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 1-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 1-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// 2ND YEARS
	"BSBio 2-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 2-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 2-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 2-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 2-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 2-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 2-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 2-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// 3RD YEARS
	"BSBio 3-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 3-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 3-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 3-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 3-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 3-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 3-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 3-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// 4TH YEARS
	"BSBio 4-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 4-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 4-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 4-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 4-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 4-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 4-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSBio 4-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	// === BSPsych ===
// 1ST YEARS
	"BSPsych 1-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 1-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 1-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 1-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 1-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 1-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 1-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 1-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// 2ND YEARS
	"BSPsych 2-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 2-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 2-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 2-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 2-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 2-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 2-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 2-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// 3RD YEARS
	"BSPsych 3-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 3-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 3-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 3-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 3-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 3-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 3-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 3-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// 4TH YEARS
	"BSPsych 4-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 4-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 4-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 4-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 4-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 4-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 4-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSPsych 4-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	// === BSSW ===
// 1ST YEARS
	"BSSW 1-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 1-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 1-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 1-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 1-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 1-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 1-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 1-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// 2ND YEARS
	"BSSW 2-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 2-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 2-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 2-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 2-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 2-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 2-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 2-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// 3RD YEARS
	"BSSW 3-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 3-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 3-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 3-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 3-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 3-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 3-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 3-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

// 4TH YEARS
	"BSSW 4-1": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 4-2": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 4-3": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 4-4": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 4-5": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 4-6": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 4-7": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	"BSSW 4-8": {
		subjects: [
			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},

			{
				code: "0000000000",
				course: "Course title",
				schedule: "Unknown",
				room: "Unknown",
			},
		]
	},

	
}



// Book Button

const bookButtons = document.querySelectorAll(".book");

bookButtons.forEach(button => {
	
	button.addEventListener("click", () => {
		const card = button.closest(".section-box");
		const program = card.querySelector(".prog-title").textContent;
		const year = card.querySelector(".year-title").textContent;

		const section = `${program} ${year}`;

		showSchedule(section);
	})
})

// MAIN FUNCTION

function showSchedule(section) {

	document.getElementById("homePage").style.display = "none";
	document.getElementById("dropdown").style.display = "none";
	document.getElementById("schedulePage").style.display = "block";
	

	const data = schedules[section].subjects;

	const container = document.getElementById("scheduleContainer");
	const subjectName = document.querySelector(".subject-name");

	container.innerHTML = "";


	data.forEach(subjects => {
		subjectName.innerHTML = section;
		container.innerHTML += `
		<div class="grid-box">
			<div class="schedule-row">
				<div class="vr"></div>
				<p>${subjects.code}</p>
				<div class="vr"></div>
				<p>${subjects.course}</p>
				<div class="vr"></div>
				<p>${subjects.schedule}</p>
				<div class="vr"></div>
				<p>${subjects.room}</p>
				<div class="vr"></div>
			</div>
		</div>

		
		`;
	});
}

function goBack() {

	document.getElementById("homePage").style.display = "grid";
	document.getElementById("dropdown").style.display = "flex";
	document.getElementById("schedulePage").style.display = "none";
}

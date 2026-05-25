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
let agriEntrep = document.getElementById('agri-entrep');
let agriculture = document.getElementById('agri');
let enviSci = document.getElementById('envi-sci');
let foodTech = document.getElementById('food-tech');
let program_name = document.getElementById('program-change');

// FOR ADDING BLOCK WHEN SECTION TEXT CHARACTER IS MORE THAN 10
const section_box = document.querySelectorAll('.section');

// SELECT ALL SECTION NAME
const prog_title = document.querySelectorAll('.prog-title');

// SELECT ALL PROGRAM NAME
const prog_name = document.querySelectorAll('.nameProgram');

// ==== UPDATE THE CARd ====

// CARD UPDATE
agriEntrep.addEventListener('click', () => {
	program_name.innerHTML = 'Agricultural Entrepreneurship'; // CHANGE BTN NAME

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BAE';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Agricultural Entreprenuership';
	});
});

agriculture.addEventListener('click', () => {
	program_name.innerHTML = 'Agriculture'; // CHANGE BTN NAME

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSA';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Agricultural Entreprenuership';
	});
});

enviSci.addEventListener('click', () => {
	program_name.innerHTML = 'Environmental Science'; // CHANGE BTN NAME

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSES';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Environmental Science';
	});
});

foodTech.addEventListener('click', () => {
	program_name.innerHTML = 'Food Technology'; // CHANGE BTN NAME

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSFT';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Food Technology';
	});
});

// YEAR UPDATE
firstYear.addEventListener('click', () => {
	year_name.innerHTML = 'First Year';

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
	year_name.innerHTML = 'Second Year';

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
	year_name.innerHTML = 'Third Year';

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
	year_name.innerHTML = 'Fourth Year';

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

function baeSub() {
	program_name.innerHTML = 'Agricultural Entrepreneurship';
}
function bsaSub() {
	program_name.innerHTML = 'Agriculture';
}
function bsesSub() {
	program_name.innerHTML = 'Environmental Science';
}
function bsftSub() {
	program_name.innerHTML = 'Food Technology';
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
	// === BAE ===
	// 1ST YEARS

	'BAE 1-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 1-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 1-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 1-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 1-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 1-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 1-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 1-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 2ND YEARS
	'BAE 2-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 2-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 2-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 2-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 2-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 2-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 2-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 2-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 3RD YEARS
	'BAE 3-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 3-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 3-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 3-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 3-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 3-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 3-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 3-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 4TH YEARS
	'BAE 4-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 4-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 4-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 4-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 4-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 4-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 4-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BAE 4-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// === BSA ===
	// 1ST YEARS

	'BSA 1-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 1-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 1-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 1-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 1-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 1-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 1-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 1-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 2ND YEARS
	'BSA 2-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 2-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 2-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 2-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 2-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 2-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 2-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 2-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 3RD YEARS
	'BSA 3-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 3-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 3-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 3-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 3-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 3-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 3-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 3-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 4TH YEARS
	'BSA 4-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 4-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 4-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 4-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 4-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 4-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 4-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 4-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// === BSES ===
	// 1ST YEARS
	'BSES 1-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 1-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 1-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 1-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 1-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 1-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 1-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 1-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 2ND YEARS
	'BSES 2-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 2-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 2-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 2-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 2-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 2-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 2-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 2-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 3RD YEARS
	'BSES 3-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 3-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 3-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 3-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 3-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 3-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 3-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 3-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 4TH YEARS
	'BSES 4-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 4-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 4-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 4-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 4-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 4-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 4-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSES 4-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// === BSFT ===
	// 1ST YEARS
	'BSFT 1-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 1-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 1-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 1-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 1-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 1-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 1-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 1-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 2ND YEARS
	'BSFT 2-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 2-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 2-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 2-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 2-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 2-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 2-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 2-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 3RD YEARS
	'BSFT 3-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 3-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 3-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 3-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 3-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 3-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 3-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 3-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 4TH YEARS
	'BSFT 4-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 4-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 4-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 4-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 4-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 4-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 4-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSFT 4-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},
};

// ===== PROFESSOR FINDER DATABASE ====

const professors = {
	'GNED 01': {
		profs: [
			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},
		],
	},

	'GNED 02': {
		profs: [
			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},
		],
	},

	'GNED 03': {
		profs: [
			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},
		],
	},

	'GNED 04': {
		profs: [
			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},
		],
	},

	'GNED 05': {
		profs: [
			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},
		],
	},

	'GNED 06': {
		profs: [
			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},
		],
	},

	FITT: {
		profs: [
			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},
		],
	},

	'NSTP 1': {
		profs: [
			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},
		],
	},

	'CVSU 101': {
		profs: [
			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},

			{
				code: '0000000000',
				professor: "Professor's Name",
				section: 'BSCS 1-6',
			},
		],
	},
};

const page = document.body.dataset.page;

if (document.body.dataset.page === 'dashboard') {
	const bookButtons = document.querySelectorAll('.book');

	bookButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const card = button.closest('.section-box');
			const program = card.querySelector('.prog-title').textContent;
			const year = card.querySelector('.year-title').textContent;

			const section = `${program} ${year}`;
			showSchedule(section);
		});
	});
}

if (document.body.dataset.page === 'prof') {
	const bookButtons = document.querySelectorAll('.book');

	bookButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const card = button.closest('.section-box');
			const course = card.querySelector('.subjectName').textContent;
			showProfessors(course);
		});
	});
}

// MAIN FUNCTION

function showSchedule(section) {
	document.getElementById('homePage').style.display = 'none';
	document.getElementById('dropdown').style.display = 'none';
	document.getElementById('schedulePage').style.display = 'block';

	const data = schedules[section].subjects;

	const container = document.getElementById('scheduleContainer');
	const subjectName = document.querySelector('.subject-name');

	container.innerHTML = '';

	data.forEach((subjects) => {
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

function showProfessors(course) {
	document.getElementById('homePage').style.display = 'none';
	document.getElementById('dropdown').style.display = 'none';
	document.getElementById('professorPage').style.display = 'block';

	const prof_data = course.trim();

	const prof_container = document.getElementById('professorContainer');
	const subjectName = document.querySelector('.subject-name');

	prof_container.innerHTML = '';

	professors[prof_data].profs.forEach((prof) => {
		subjectName.innerHTML = course;
		prof_container.innerHTML += `
		<div class="profgrid-box">
			<div class="prof-row">
				<div class="vr"></div>
				<p>${prof.code}</p>
				<div class="vr"></div>
				<p>${prof.professor}</p>
				<div class="vr"></div>
				<p>${prof.section}</p>
				<div class="vr"></div>
				<button id="contact-btn">
				<a href="mailto:example@email.com" target="_blank" rel="noopener noreferrer">
					<img src="/Professor_Finder/assets/images/icons/white-message icon4.svg" />
					Send a message
				</a>
				</button>
			</div>
		</div>
		`;
	});
}

function goBack() {
	document.getElementById('homePage').style.display = 'grid';
	document.getElementById('dropdown').style.display = 'flex';
	document.getElementById('schedulePage').style.display = 'none';
	document.getElementById('professorPage').style.display = 'none';
}

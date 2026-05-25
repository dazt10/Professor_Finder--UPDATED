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
}

function bajSub() {
	program_name.innerHTML = 'Journalism';
}

function bapsSub() {
	program_name.innerHTML = 'Political Science';
}

function bsamSub() {
	program_name.innerHTML = 'Applied Mathematics';
}

function bsbioSub() {
	program_name.innerHTML = 'Biology';
}

function bspsychSub() {
	program_name.innerHTML = 'Psychology';
}

function bsswSub() {
	program_name.innerHTML = 'Social Work';
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

	'BAELS 1-1': {
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

	'BAELS 1-2': {
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

	'BAELS 1-3': {
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

	'BAELS 1-4': {
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

	'BAELS 1-5': {
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

	'BAELS 1-6': {
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

	'BAELS 1-7': {
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

	'BAELS 1-8': {
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
	'BAELS 2-1': {
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

	'BAELS 2-2': {
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

	'BAELS 2-3': {
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

	'BAELS 2-4': {
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

	'BAELS 2-5': {
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

	'BAELS 2-6': {
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

	'BAELS 2-7': {
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

	'BAELS 2-8': {
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
	'BAELS 3-1': {
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

	'BAELS 3-2': {
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

	'BAELS 3-3': {
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

	'BAELS 3-4': {
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

	'BAELS 3-5': {
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

	'BAELS 3-6': {
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

	'BAELS 3-7': {
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

	'BAELS 3-8': {
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
	'BAELS 4-1': {
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

	'BAELS 4-2': {
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

	'BAELS 4-3': {
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

	'BAELS 4-4': {
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

	'BAELS 4-5': {
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

	'BAELS 4-6': {
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

	'BAELS 4-7': {
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

	'BAELS 4-8': {
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

	// === BAJ ===
	// 1ST YEARS

	'BAJ 1-1': {
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

	'BAJ 1-2': {
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

	'BAJ 1-3': {
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

	'BAJ 1-4': {
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

	'BAJ 1-5': {
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

	'BAJ 1-6': {
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

	'BAJ 1-7': {
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

	'BAJ 1-8': {
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
	'BAJ 2-1': {
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

	'BAJ 2-2': {
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

	'BAJ 2-3': {
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

	'BAJ 2-4': {
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

	'BAJ 2-5': {
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

	'BAJ 2-6': {
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

	'BAJ 2-7': {
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

	'BAJ 2-8': {
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
	'BAJ 3-1': {
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

	'BAJ 3-2': {
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

	'BAJ 3-3': {
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

	'BAJ 3-4': {
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

	'BAJ 3-5': {
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

	'BAJ 3-6': {
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

	'BAJ 3-7': {
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

	'BAJ 3-8': {
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
	'BAJ 4-1': {
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

	'BAJ 4-2': {
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

	'BAJ 4-3': {
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

	'BAJ 4-4': {
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

	'BAJ 4-5': {
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

	'BAJ 4-6': {
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

	'BAJ 4-7': {
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

	'BAJ 4-8': {
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

	// === BAPS ===
	// 1ST YEARS
	'BAPS 1-1': {
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

	'BAPS 1-2': {
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

	'BAPS 1-3': {
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

	'BAPS 1-4': {
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

	'BAPS 1-5': {
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

	'BAPS 1-6': {
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

	'BAPS 1-7': {
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

	'BAPS 1-8': {
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
	'BAPS 2-1': {
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

	'BAPS 2-2': {
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

	'BAPS 2-3': {
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

	'BAPS 2-4': {
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

	'BAPS 2-5': {
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

	'BAPS 2-6': {
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

	'BAPS 2-7': {
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

	'BAPS 2-8': {
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
	'BAPS 3-1': {
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

	'BAPS 3-2': {
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

	'BAPS 3-3': {
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

	'BAPS 3-4': {
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

	'BAPS 3-5': {
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

	'BAPS 3-6': {
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

	'BAPS 3-7': {
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

	'BAPS 3-8': {
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
	'BAPS 4-1': {
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

	'BAPS 4-2': {
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

	'BAPS 4-3': {
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

	'BAPS 4-4': {
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

	'BAPS 4-5': {
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

	'BAPS 4-6': {
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

	'BAPS 4-7': {
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

	'BAPS 4-8': {
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

	// === BSAM ===
	// 1ST YEARS
	'BSAM 1-1': {
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

	'BSAM 1-2': {
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

	'BSAM 1-3': {
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

	'BSAM 1-4': {
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

	'BSAM 1-5': {
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

	'BSAM 1-6': {
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

	'BSAM 1-7': {
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

	'BSAM 1-8': {
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
	'BSAM 2-1': {
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

	'BSAM 2-2': {
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

	'BSAM 2-3': {
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

	'BSAM 2-4': {
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

	'BSAM 2-5': {
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

	'BSAM 2-6': {
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

	'BSAM 2-7': {
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

	'BSAM 2-8': {
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
	'BSAM 3-1': {
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

	'BSAM 3-2': {
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

	'BSAM 3-3': {
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

	'BSAM 3-4': {
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

	'BSAM 3-5': {
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

	'BSAM 3-6': {
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

	'BSAM 3-7': {
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

	'BSAM 3-8': {
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
	'BSAM 4-1': {
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

	'BSAM 4-2': {
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

	'BSAM 4-3': {
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

	'BSAM 4-4': {
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

	'BSAM 4-5': {
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

	'BSAM 4-6': {
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

	'BSAM 4-7': {
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

	'BSAM 4-8': {
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

	// === BSBio ===
	// 1ST YEARS
	'BSBio 1-1': {
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

	'BSBio 1-2': {
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

	'BSBio 1-3': {
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

	'BSBio 1-4': {
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

	'BSBio 1-5': {
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

	'BSBio 1-6': {
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

	'BSBio 1-7': {
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

	'BSBio 1-8': {
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
	'BSBio 2-1': {
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

	'BSBio 2-2': {
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

	'BSBio 2-3': {
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

	'BSBio 2-4': {
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

	'BSBio 2-5': {
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

	'BSBio 2-6': {
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

	'BSBio 2-7': {
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

	'BSBio 2-8': {
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
	'BSBio 3-1': {
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

	'BSBio 3-2': {
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

	'BSBio 3-3': {
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

	'BSBio 3-4': {
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

	'BSBio 3-5': {
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

	'BSBio 3-6': {
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

	'BSBio 3-7': {
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

	'BSBio 3-8': {
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
	'BSBio 4-1': {
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

	'BSBio 4-2': {
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

	'BSBio 4-3': {
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

	'BSBio 4-4': {
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

	'BSBio 4-5': {
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

	'BSBio 4-6': {
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

	'BSBio 4-7': {
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

	'BSBio 4-8': {
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

	// === BSPsych ===
	// 1ST YEARS
	'BSPsych 1-1': {
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

	'BSPsych 1-2': {
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

	'BSPsych 1-3': {
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

	'BSPsych 1-4': {
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

	'BSPsych 1-5': {
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

	'BSPsych 1-6': {
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

	'BSPsych 1-7': {
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

	'BSPsych 1-8': {
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
	'BSPsych 2-1': {
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

	'BSPsych 2-2': {
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

	'BSPsych 2-3': {
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

	'BSPsych 2-4': {
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

	'BSPsych 2-5': {
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

	'BSPsych 2-6': {
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

	'BSPsych 2-7': {
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

	'BSPsych 2-8': {
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
	'BSPsych 3-1': {
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

	'BSPsych 3-2': {
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

	'BSPsych 3-3': {
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

	'BSPsych 3-4': {
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

	'BSPsych 3-5': {
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

	'BSPsych 3-6': {
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

	'BSPsych 3-7': {
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

	'BSPsych 3-8': {
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
	'BSPsych 4-1': {
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

	'BSPsych 4-2': {
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

	'BSPsych 4-3': {
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

	'BSPsych 4-4': {
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

	'BSPsych 4-5': {
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

	'BSPsych 4-6': {
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

	'BSPsych 4-7': {
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

	'BSPsych 4-8': {
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

	// === BSSW ===
	// 1ST YEARS
	'BSSW 1-1': {
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

	'BSSW 1-2': {
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

	'BSSW 1-3': {
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

	'BSSW 1-4': {
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

	'BSSW 1-5': {
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

	'BSSW 1-6': {
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

	'BSSW 1-7': {
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

	'BSSW 1-8': {
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
	'BSSW 2-1': {
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

	'BSSW 2-2': {
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

	'BSSW 2-3': {
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

	'BSSW 2-4': {
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

	'BSSW 2-5': {
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

	'BSSW 2-6': {
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

	'BSSW 2-7': {
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

	'BSSW 2-8': {
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
	'BSSW 3-1': {
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

	'BSSW 3-2': {
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

	'BSSW 3-3': {
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

	'BSSW 3-4': {
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

	'BSSW 3-5': {
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

	'BSSW 3-6': {
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

	'BSSW 3-7': {
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

	'BSSW 3-8': {
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
	'BSSW 4-1': {
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

	'BSSW 4-2': {
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

	'BSSW 4-3': {
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

	'BSSW 4-4': {
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

	'BSSW 4-5': {
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

	'BSSW 4-6': {
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

	'BSSW 4-7': {
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

	'BSSW 4-8': {
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

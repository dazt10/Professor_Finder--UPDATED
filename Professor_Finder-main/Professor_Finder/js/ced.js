// TOGGLE DROPDOWNW VARIABLES
let prog_dropdown = document.querySelector('.program-dropdown');
let year_dropdown = document.querySelector('.year-dropdown');
let year_list = document.querySelector('.year-list');

// TOGGLE BUTTON FOR PROGRAM AND YEAR
prog_dropdown.addEventListener('click', () => {
	prog_dropdown.classList.toggle('active');
	if (year_dropdown.classList.contains('active'));
	year_dropdown.classList.remove('active');
});
year_dropdown.addEventListener('click', () => {
	year_dropdown.classList.toggle('active');
	if (prog_dropdown.classList.contains('active'));
	prog_dropdown.classList.remove('active');
});

// PROGRAM DROPDOWN VARIABLES
let ba_early_edu = document.getElementById('ba-early-edu');
let ba_elem_edu = document.getElementById('ba-elem-edu');
let ba_second_edu = document.getElementById('ba-second-edu');
let ba_special_edu = document.getElementById('ba-special-edu');
let ba_tech_live = document.getElementById('ba-tech-live');
let bs_hospi_man = document.getElementById('bs-hospi-man');
let bs_tourism = document.getElementById('bs-tourism');
let teacher_certif = document.getElementById('teacher-certif');
let science_high = document.getElementById('science-high');
let elem_edu = document.getElementById('elem-edu');
let pre_elem = document.getElementById('pre-elem');
let program_name = document.getElementById('program-change');

// FOR ADDING BLOCK WHEN SECTION TEXT CHARACTER IS MORE THAN 10
const section_box = document.querySelectorAll('.section');

// SELECT ALL SECTION NAME
const prog_title = document.querySelectorAll('.prog-title');

// SELECT ALL PROGRAM NAME
const prog_name = document.querySelectorAll('.nameProgram');

// CARD UPDATE
ba_early_edu.addEventListener('click', () => {
	program_name.innerHTML = 'Early Childhood Education'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.remove('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BECEd';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Early Childhood Education';
	});
});

ba_elem_edu.addEventListener('click', () => {
	program_name.innerHTML = 'Elementary Education'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.remove('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BEEd';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Elementary Education';
	});
});

ba_second_edu.addEventListener('click', () => {
	program_name.innerHTML = 'Secondary Education'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.remove('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSEd';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Secondary Education';
	});
});

ba_special_edu.addEventListener('click', () => {
	program_name.innerHTML = ' Special Needs Education'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.remove('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSNEd';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Special Needs Education';
	});
});

ba_tech_live.addEventListener('click', () => {
	program_name.innerHTML = 'Technology and Livelihood Education'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.remove('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BTLED';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Technology and Livelihood Education';
	});
});

bs_hospi_man.addEventListener('click', () => {
	program_name.innerHTML = 'Hospitality Management'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.remove('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSHM';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Hospitality Management';
	});
});

bs_tourism.addEventListener('click', () => {
	program_name.innerHTML = 'Tourism Management'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.remove('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSTM';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Tourism Management';
	});
});

// YEAR LEVEL DROPDOWN
let firstYear = document.getElementById('1st-year');
let secondYear = document.getElementById('2nd-year');
let thirdYear = document.getElementById('3rd-year');
let fourthYear = document.getElementById('4th-year');
let fifthYear = document.getElementById('5th-year');
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


// =====SCHEDULE PAGE FUNCTION=====

// Schedules

const schedules = {

	// === BECEd ===
	// 1ST YEARS

	"BECEd 1-1": {
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

	"BECEd 1-2": {
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

	"BECEd 1-3": {
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

	"BECEd 1-4": {
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

	"BECEd 1-5": {
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

	"BECEd 1-6": {
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

	"BECEd 1-7": {
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

	"BECEd 1-8": {
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
	"BECEd 2-1": {
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

	"BECEd 2-2": {
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

	"BECEd 2-3": {
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

	"BECEd 2-4": {
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

	"BECEd 2-5": {
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

	"BECEd 2-6": {
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

	"BECEd 2-7": {
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

	"BECEd 2-8": {
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
	"BECEd 3-1": {
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

	"BECEd 3-2": {
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

	"BECEd 3-3": {
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

	"BECEd 3-4": {
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

	"BECEd 3-5": {
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

	"BECEd 3-6": {
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

	"BECEd 3-7": {
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

	"BECEd 3-8": {
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
	"BECEd 4-1": {
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

	"BECEd 4-2": {
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

	"BECEd 4-3": {
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

	"BECEd 4-4": {
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

	"BECEd 4-5": {
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

	"BECEd 4-6": {
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

	"BECEd 4-7": {
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

	"BECEd 4-8": {
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

// === BEEd ===
// 1ST YEARS

	"BEEd 1-1": {
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

	"BEEd 1-2": {
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

	"BEEd 1-3": {
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

	"BEEd 1-4": {
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

	"BEEd 1-5": {
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

	"BEEd 1-6": {
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

	"BEEd 1-7": {
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

	"BEEd 1-8": {
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
	"BEEd 2-1": {
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

	"BEEd 2-2": {
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

	"BEEd 2-3": {
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

	"BEEd 2-4": {
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

	"BEEd 2-5": {
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

	"BEEd 2-6": {
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

	"BEEd 2-7": {
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

	"BEEd 2-8": {
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
	"BEEd 3-1": {
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

	"BEEd 3-2": {
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

	"BEEd 3-3": {
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

	"BEEd 3-4": {
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

	"BEEd 3-5": {
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

	"BEEd 3-6": {
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

	"BEEd 3-7": {
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

	"BEEd 3-8": {
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
	"BEEd 4-1": {
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

	"BEEd 4-2": {
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

	"BEEd 4-3": {
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

	"BEEd 4-4": {
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

	"BEEd 4-5": {
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

	"BEEd 4-6": {
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

	"BEEd 4-7": {
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

	"BEEd 4-8": {
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

// === BSEd ===
// 1ST YEARS
	"BSEd 1-1": {
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

	"BSEd 1-2": {
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

	"BSEd 1-3": {
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

	"BSEd 1-4": {
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

	"BSEd 1-5": {
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

	"BSEd 1-6": {
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

	"BSEd 1-7": {
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

	"BSEd 1-8": {
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
	"BSEd 2-1": {
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

	"BSEd 2-2": {
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

	"BSEd 2-3": {
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

	"BSEd 2-4": {
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

	"BSEd 2-5": {
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

	"BSEd 2-6": {
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

	"BSEd 2-7": {
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

	"BSEd 2-8": {
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
	"BSEd 3-1": {
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

	"BSEd 3-2": {
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

	"BSEd 3-3": {
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

	"BSEd 3-4": {
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

	"BSEd 3-5": {
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

	"BSEd 3-6": {
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

	"BSEd 3-7": {
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

	"BSEd 3-8": {
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
	"BSEd 4-1": {
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

	"BSEd 4-2": {
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

	"BSEd 4-3": {
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

	"BSEd 4-4": {
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

	"BSEd 4-5": {
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

	"BSEd 4-6": {
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

	"BSEd 4-7": {
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

	"BSEd 4-8": {
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

// === BSNEd ===
// 1ST YEARS
	"BSNEd 1-1": {
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

	"BSNEd 1-2": {
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

	"BSNEd 1-3": {
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

	"BSNEd 1-4": {
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

	"BSNEd 1-5": {
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

	"BSNEd 1-6": {
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

	"BSNEd 1-7": {
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

	"BSNEd 1-8": {
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
	"BSNEd 2-1": {
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

	"BSNEd 2-2": {
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

	"BSNEd 2-3": {
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

	"BSNEd 2-4": {
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

	"BSNEd 2-5": {
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

	"BSNEd 2-6": {
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

	"BSNEd 2-7": {
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

	"BSNEd 2-8": {
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
	"BSNEd 3-1": {
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

	"BSNEd 3-2": {
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

	"BSNEd 3-3": {
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

	"BSNEd 3-4": {
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

	"BSNEd 3-5": {
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

	"BSNEd 3-6": {
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

	"BSNEd 3-7": {
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

	"BSNEd 3-8": {
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
	"BSNEd 4-1": {
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

	"BSNEd 4-2": {
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

	"BSNEd 4-3": {
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

	"BSNEd 4-4": {
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

	"BSNEd 4-5": {
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

	"BSNEd 4-6": {
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

	"BSNEd 4-7": {
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

	"BSNEd 4-8": {
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

	// === BTLED ===
// 1ST YEARS
	"BTLED 1-1": {
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

	"BTLED 1-2": {
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

	"BTLED 1-3": {
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

	"BTLED 1-4": {
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

	"BTLED 1-5": {
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

	"BTLED 1-6": {
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

	"BTLED 1-7": {
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

	"BTLED 1-8": {
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
	"BTLED 2-1": {
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

	"BTLED 2-2": {
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

	"BTLED 2-3": {
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

	"BTLED 2-4": {
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

	"BTLED 2-5": {
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

	"BTLED 2-6": {
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

	"BTLED 2-7": {
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

	"BTLED 2-8": {
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
	"BTLED 3-1": {
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

	"BTLED 3-2": {
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

	"BTLED 3-3": {
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

	"BTLED 3-4": {
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

	"BTLED 3-5": {
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

	"BTLED 3-6": {
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

	"BTLED 3-7": {
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

	"BTLED 3-8": {
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
	"BTLED 4-1": {
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

	"BTLED 4-2": {
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

	"BTLED 4-3": {
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

	"BTLED 4-4": {
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

	"BTLED 4-5": {
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

	"BTLED 4-6": {
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

	"BTLED 4-7": {
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

	"BTLED 4-8": {
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

	// === BSHM ===
// 1ST YEARS
	"BSHM 1-1": {
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

	"BSHM 1-2": {
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

	"BSHM 1-3": {
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

	"BSHM 1-4": {
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

	"BSHM 1-5": {
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

	"BSHM 1-6": {
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

	"BSHM 1-7": {
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

	"BSHM 1-8": {
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
	"BSHM 2-1": {
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

	"BSHM 2-2": {
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

	"BSHM 2-3": {
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

	"BSHM 2-4": {
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

	"BSHM 2-5": {
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

	"BSHM 2-6": {
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

	"BSHM 2-7": {
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

	"BSHM 2-8": {
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
	"BSHM 3-1": {
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

	"BSHM 3-2": {
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

	"BSHM 3-3": {
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

	"BSHM 3-4": {
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

	"BSHM 3-5": {
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

	"BSHM 3-6": {
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

	"BSHM 3-7": {
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

	"BSHM 3-8": {
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
	"BSHM 4-1": {
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

	"BSHM 4-2": {
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

	"BSHM 4-3": {
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

	"BSHM 4-4": {
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

	"BSHM 4-5": {
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

	"BSHM 4-6": {
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

	"BSHM 4-7": {
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

	"BSHM 4-8": {
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

	// === BSTM ===
// 1ST YEARS
	"BSTM 1-1": {
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

	"BSTM 1-2": {
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

	"BSTM 1-3": {
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

	"BSTM 1-4": {
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

	"BSTM 1-5": {
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

	"BSTM 1-6": {
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

	"BSTM 1-7": {
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

	"BSTM 1-8": {
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
	"BSTM 2-1": {
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

	"BSTM 2-2": {
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

	"BSTM 2-3": {
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

	"BSTM 2-4": {
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

	"BSTM 2-5": {
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

	"BSTM 2-6": {
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

	"BSTM 2-7": {
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

	"BSTM 2-8": {
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
	"BSTM 3-1": {
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

	"BSTM 3-2": {
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

	"BSTM 3-3": {
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

	"BSTM 3-4": {
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

	"BSTM 3-5": {
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

	"BSTM 3-6": {
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

	"BSTM 3-7": {
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

	"BSTM 3-8": {
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
	"BSTM 4-1": {
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

	"BSTM 4-2": {
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

	"BSTM 4-3": {
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

	"BSTM 4-4": {
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

	"BSTM 4-5": {
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

	"BSTM 4-6": {
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

	"BSTM 4-7": {
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

	"BSTM 4-8": {
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


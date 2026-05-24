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
let ba_second_edu_eng = document.getElementById('ba-second-edu-eng');
let ba_second_edu_math = document.getElementById('ba-second-edu-math');
let ba_second_edu_sci = document.getElementById('ba-second-edu-science');
let ba_second_edu_fili = document.getElementById('ba-second-edu-filipino');
let ba_second_edu_social = document.getElementById('ba-second-edu-social');
let ba_special_edu = document.getElementById('ba-special-edu');
let ba_tech_live = document.getElementById('ba-tech-live');
let bs_hospi_man = document.getElementById('bs-hospi-man');
let bs_tourism = document.getElementById('bs-tourism');
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

ba_second_edu_eng.addEventListener('click', () => {
	program_name.innerHTML = 'Secondary Education - English'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.remove('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSEd-Eng';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Secondary Education - English';
	});
});

ba_second_edu_math.addEventListener('click', () => {
	program_name.innerHTML = 'Secondary Education - Mathematics'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.remove('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSEd-Math';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Secondary Education - Math';
	});
});

ba_second_edu_sci.addEventListener('click', () => {
	program_name.innerHTML = 'Secondary Education - Science'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.add('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSEd-Science';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Secondary Education - Science';
	});
});

ba_second_edu_fili.addEventListener('click', () => {
	program_name.innerHTML = 'Secondary Education - Filipino'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.add('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSEd-Filipino';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Secondary Education - Filipino';
	});
});

ba_second_edu_social.addEventListener('click', () => {
	program_name.innerHTML = 'Secondary Education - Social Studies'; // CHANGE BTN NAME

	// REMOVE DISPLAY: BLOCK;
	section_box.forEach((section) => {
		section.classList.remove('block');
	});

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSEd-SS';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Secondary Education - Social Studies';
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

fifthYear.addEventListener('click', () => {
	year_name.innerHTML = 'Fifth Year Year'; // DROPDOWN

	yearLevel.forEach((level) => {
		level.innerHTML = '5th Year';
	});

	year_section1.innerHTML = '5-1';
	year_section2.innerHTML = '5-2';
	year_section3.innerHTML = '5-3';
	year_section4.innerHTML = '5-4';
	year_section5.innerHTML = '5-5';
	year_section6.innerHTML = '5-6';
	year_section7.innerHTML = '5-7';
	year_section8.innerHTML = '5-8';
});

function becedSub() {
	program_name.innerHTML = 'Early Childhood Education';

	subj_title1.innerHTML = 'BECEd Subject#1';
	subj_title2.innerHTML = 'BECEd Subject#2';
	subj_title3.innerHTML = 'BECEd Subject#3';
	subj_title4.innerHTML = 'BECEd Subject#4';
	subj_title5.innerHTML = 'BECEd Subject#5';
	subj_title6.innerHTML = 'BECEd Subject#6';
	subj_title7.innerHTML = 'BECEd Subject#7';
	subj_title8.innerHTML = 'BECEd Subject#8';
	subj_title9.innerHTML = 'BECEd Subject#9';

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

function beedSub() {
	program_name.innerHTML = 'Elementary Education';

	subj_title1.innerHTML = 'BEED Subject#1';
	subj_title2.innerHTML = 'BEED Subject#2';
	subj_title3.innerHTML = 'BEED Subject#3';
	subj_title4.innerHTML = 'BEED Subject#4';
	subj_title5.innerHTML = 'BEED Subject#5';
	subj_title6.innerHTML = 'BEED Subject#6';
	subj_title7.innerHTML = 'BEED Subject#7';
	subj_title8.innerHTML = 'BEED Subject#8';
	subj_title9.innerHTML = 'BEED Subject#9';

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

function bsedSub_eng() {
	program_name.innerHTML = 'Secondary Education - English';

	subj_title1.innerHTML = 'BSED-Eng Subject#1';
	subj_title2.innerHTML = 'BSED-Eng Subject#2';
	subj_title3.innerHTML = 'BSED-Eng Subject#3';
	subj_title4.innerHTML = 'BSED-Eng Subject#4';
	subj_title5.innerHTML = 'BSED-Eng Subject#5';
	subj_title6.innerHTML = 'BSED-Eng Subject#6';
	subj_title7.innerHTML = 'BSED-Eng Subject#7';
	subj_title8.innerHTML = 'BSED-Eng Subject#8';
	subj_title9.innerHTML = 'BSED-Eng Subject#9';

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

function bsedSub_math() {
	program_name.innerHTML = 'Secondary Education - Mathematics';

	subj_title1.innerHTML = 'BSED-Math Subject#1';
	subj_title2.innerHTML = 'BSED-Math Subject#2';
	subj_title3.innerHTML = 'BSED-Math Subject#3';
	subj_title4.innerHTML = 'BSED-Math Subject#4';
	subj_title5.innerHTML = 'BSED-Math Subject#5';
	subj_title6.innerHTML = 'BSED-Math Subject#6';
	subj_title7.innerHTML = 'BSED-Math Subject#7';
	subj_title8.innerHTML = 'BSED-Math Subject#8';
	subj_title9.innerHTML = 'BSED-Math Subject#9';

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

function bsedSub_sci() {
	program_name.innerHTML = 'Secondary Education - Science';

	subj_title1.innerHTML = 'BSED-Science Subject#1';
	subj_title2.innerHTML = 'BSED-Science Subject#2';
	subj_title3.innerHTML = 'BSED-Science Subject#3';
	subj_title4.innerHTML = 'BSED-Science Subject#4';
	subj_title5.innerHTML = 'BSED-Science Subject#5';
	subj_title6.innerHTML = 'BSED-Science Subject#6';
	subj_title7.innerHTML = 'BSED-Science Subject#7';
	subj_title8.innerHTML = 'BSED-Science Subject#8';
	subj_title9.innerHTML = 'BSED-Science Subject#9';

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

function bsedSub_filipino() {
	program_name.innerHTML = 'Secondary Education - Filipino';

	subj_title1.innerHTML = 'BSED-Filipino Subject#1';
	subj_title2.innerHTML = 'BSED-Filipino Subject#2';
	subj_title3.innerHTML = 'BSED-Filipino Subject#3';
	subj_title4.innerHTML = 'BSED-Filipino Subject#4';
	subj_title5.innerHTML = 'BSED-Filipino Subject#5';
	subj_title6.innerHTML = 'BSED-Filipino Subject#6';
	subj_title7.innerHTML = 'BSED-Filipino Subject#7';
	subj_title8.innerHTML = 'BSED-Filipino Subject#8';
	subj_title9.innerHTML = 'BSED-Filipino Subject#9';

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

function bsedSub_social() {
	program_name.innerHTML = 'Secondary Education - Social Studies';

	subj_title1.innerHTML = 'BSED-SS Subject#1';
	subj_title2.innerHTML = 'BSED-SS Subject#2';
	subj_title3.innerHTML = 'BSED-SS Subject#3';
	subj_title4.innerHTML = 'BSED-SS Subject#4';
	subj_title5.innerHTML = 'BSED-SS Subject#5';
	subj_title6.innerHTML = 'BSED-SS Subject#6';
	subj_title7.innerHTML = 'BSED-SS Subject#7';
	subj_title8.innerHTML = 'BSED-SS Subject#8';
	subj_title9.innerHTML = 'BSED-SS Subject#9';

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

function bsnedSub() {
	program_name.innerHTML = 'Special Needs Education';

	subj_title1.innerHTML = 'BSNED Subject#1';
	subj_title2.innerHTML = 'BSNED Subject#2';
	subj_title3.innerHTML = 'BSNED Subject#3';
	subj_title4.innerHTML = 'BSNED Subject#4';
	subj_title5.innerHTML = 'BSNED Subject#5';
	subj_title6.innerHTML = 'BSNED Subject#6';
	subj_title7.innerHTML = 'BSNED Subject#7';
	subj_title8.innerHTML = 'BSNED Subject#8';
	subj_title9.innerHTML = 'BSNED Subject#9';

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

function btledSub() {
	program_name.innerHTML = 'Technology and Livelihood Education';

	subj_title1.innerHTML = 'BTLED Subject#1';
	subj_title2.innerHTML = 'BTLED Subject#2';
	subj_title3.innerHTML = 'BTLED Subject#3';
	subj_title4.innerHTML = 'BTLED Subject#4';
	subj_title5.innerHTML = 'BTLED Subject#5';
	subj_title6.innerHTML = 'BTLED Subject#6';
	subj_title7.innerHTML = 'BTLED Subject#7';
	subj_title8.innerHTML = 'BTLED Subject#8';
	subj_title9.innerHTML = 'BTLED Subject#9';

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

function bshm() {
	program_name.innerHTML = 'Hospitality Management';

	subj_title1.innerHTML = 'BSHM Subject#1';
	subj_title2.innerHTML = 'BSHM Subject#2';
	subj_title3.innerHTML = 'BSHM Subject#3';
	subj_title4.innerHTML = 'BSHM Subject#4';
	subj_title5.innerHTML = 'BSHM Subject#5';
	subj_title6.innerHTML = 'BSHM Subject#6';
	subj_title7.innerHTML = 'BSHM Subject#7';
	subj_title8.innerHTML = 'BSHM Subject#8';
	subj_title9.innerHTML = 'BSHM Subject#9';

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

function bstm() {
	program_name.innerHTML = 'Tourism Management';

	subj_title1.innerHTML = 'BSTM Subject#1';
	subj_title2.innerHTML = 'BSTM Subject#2';
	subj_title3.innerHTML = 'BSTM Subject#3';
	subj_title4.innerHTML = 'BSTM Subject#4';
	subj_title5.innerHTML = 'BSTM Subject#5';
	subj_title6.innerHTML = 'BSTM Subject#6';
	subj_title7.innerHTML = 'BSTM Subject#7';
	subj_title8.innerHTML = 'BSTM Subject#8';
	subj_title9.innerHTML = 'BSTM Subject#9';

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

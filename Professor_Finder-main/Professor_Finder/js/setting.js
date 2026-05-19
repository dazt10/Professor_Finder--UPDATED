// ====== MODALS ======

// === Name ===
const nameModal = document.getElementById('nameModal');
const openName = document.querySelector('#nameRow');
const closeName = document.querySelector('#closeName');

// Open modal
openName.addEventListener('click', () => {
	nameModal.classList.add('show');
});

// Close modal
closeName.addEventListener('click', () => {
	nameModal.classList.remove('show');
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
	if (e.target === nameModal) {
		nameModal.classList.remove('show');
	}
});

// === Username ===
const usernameModal = document.getElementById('usernameModal');
const openUsername = document.querySelector('#usernameRow');
const closeUsername = document.querySelector('#closeUsername');

// Open modal
openUsername.addEventListener('click', () => {
	usernameModal.classList.add('show');
});

// Close modal
closeUsername.addEventListener('click', () => {
	usernameModal.classList.remove('show');
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
	if (e.target === usernameModal) {
		usernameModal.classList.remove('show');
	}
});

// === Password ===
const passwordModal = document.getElementById('passwordModal');
const openPassword = document.querySelector('#passwordRow');
const closePassword = document.querySelector('#closePassword');

// Open modal
openPassword.addEventListener('click', () => {
	passwordModal.classList.add('show');
});

// Close modal
closePassword.addEventListener('click', () => {
	passwordModal.classList.remove('show');
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
	if (e.target === passwordModal) {
		passwordModal.classList.remove('show');
	}
});

// === Delete Account ===
const deleteAccountModal = document.getElementById('deleteAccountModal');
const openDeleteAccount = document.querySelector('#deleteAccountRow');
const closeDeleteAccount = document.querySelector('#cancelDelete');

// Open modal
openDeleteAccount.addEventListener('click', () => {
	deleteAccountModal.classList.add('show');
});

// Close modal
closeDeleteAccount.addEventListener('click', () => {
	deleteAccountModal.classList.remove('show');
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
	if (e.target === deleteAccountModal) {
		deleteAccountModal.classList.remove('show');
	}
});


// ===== CHANGING INPUT VALUE
const name = document.getElementById ("name");
const username = document.getElementById ("username");

// === Name ===
const nameText = document.getElementById("nameText");
const nameInput = document.getElementById("nameInput");
const saveName = document.getElementById("saveName");

saveName.addEventListener("click", () => {
	const newName = nameInput.value;
	if (newName !== "") {
		name.textContent = newName;
		nameText.textContent = newName;
		nameModal.classList.remove('show');
	}
});

// === Username ===
const usernameText = document.getElementById("usernameText");
const usernameInput = document.getElementById("usernameInput");
const saveUsername = document.getElementById("saveUsername");

saveUsername.addEventListener("click", () => {
	const newUsername = usernameInput.value;
	if (newUsername !== "") {
		username.textContent = newUsername;
		usernameText.textContent = newUsername;
		usernameModal.classList.remove('show');
	}
});

// === Username ===
const newPasswordInput = document.getElementById("newPasswordInput");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");
const savePassword = document.getElementById("savePassword");

savePassword.addEventListener("click", () => {
	const pass1 = newPasswordInput.value;
	const pass2 = confirmPasswordInput.value;
	if (pass1 && pass2 !== "") {
		if (pass1 == pass2) {
			passwordModal.classList.remove('show');
		}
	}
});

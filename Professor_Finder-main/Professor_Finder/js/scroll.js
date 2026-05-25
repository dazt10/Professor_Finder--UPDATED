let timeout;
window.addEventListener('scroll', () => {
	clearTimeout(timeout);
	timeout = setTimeout(() => {
		localStorage.setItem('scrollY', window.scrollY);
	}, 200);
});

window.addEventListener('load', () => {
	const savedY = localStorage.getItem('scrollY');
	if (savedY !== null) {
		window.scrollTo(0, parseInt(savedY));
	}
});

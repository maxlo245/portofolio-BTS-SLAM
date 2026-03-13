// Script officiel Tailwind pour dark mode persistant et fiable
function updateTheme() {
	const root = document.documentElement;
	if (localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		root.classList.add('dark');
	} else {
		root.classList.remove('dark');
	}
}

document.addEventListener('DOMContentLoaded', function () {
	updateTheme();
	const toggle = document.getElementById('dark-toggle');
	if (!toggle) return;
	toggle.addEventListener('click', function () {
		const root = document.documentElement;
		const isDark = root.classList.toggle('dark');
		localStorage.theme = isDark ? 'dark' : 'light';
	});
});

// Appliquer le thème dès le chargement du script (pour éviter le flash)
updateTheme();
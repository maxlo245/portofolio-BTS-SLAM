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

// Protection anti-copie
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && ['u', 's', 'a', 'c'].includes(e.key.toLowerCase())) {
        e.preventDefault();
    }
});
document.addEventListener('selectstart', e => e.preventDefault());
document.addEventListener('dragstart', e => e.preventDefault());
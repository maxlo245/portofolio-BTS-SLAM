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
function showCopyWarning() {
    let toast = document.getElementById('copy-warning-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'copy-warning-toast';
        toast.style.cssText = 'position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);background:#1e293b;color:#f8fafc;padding:0.75rem 1.5rem;border-radius:8px;font-size:0.95rem;font-weight:600;box-shadow:0 4px 24px rgba(0,0,0,0.3);z-index:9999;border-left:4px solid #dc2626;opacity:0;transition:opacity 0.3s;pointer-events:none;';
        toast.textContent = '⚠ Ce contenu est protégé — © 2026 Maxime Laurent. Toute reproduction est interdite.';
        document.body.appendChild(toast);
    }
    toast.style.opacity = '1';
    clearTimeout(toast._hideTimeout);
    toast._hideTimeout = setTimeout(() => { toast.style.opacity = '0'; }, 3000);
}

document.addEventListener('contextmenu', e => { e.preventDefault(); showCopyWarning(); });
document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && ['u', 's', 'a', 'c'].includes(e.key.toLowerCase())) {
        e.preventDefault();
        showCopyWarning();
    }
});
document.addEventListener('selectstart', e => e.preventDefault());
document.addEventListener('dragstart', e => e.preventDefault());

// Avertissement dans la console développeur
console.log('%c⛔ Accès restreint', 'color:#dc2626;font-size:22px;font-weight:bold;');
console.log('%cCe code source est protégé par le droit d\'auteur.\n© 2026 Maxime Laurent — Tous droits réservés.\nToute reproduction sans autorisation écrite est interdite.', 'color:#1e40af;font-size:13px;');
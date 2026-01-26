// Ce fichier contient le code du visualiseur de code modale, à inclure via <script src="scripts/code-modal.js"></script>

function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('hidden');
  modal.focus();
  document.body.classList.add('overflow-hidden');
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
  if (window.Prism && Prism.highlightAll) {
    Prism.highlightAll();
  }
  document.onkeydown = function(e) {
    if (e.key === 'Escape') closeModal(id);
  };
  // Fermer la modale si on clique sur le fond (hors contenu)
  modal.onclick = function(e) {
    if (e.target === modal) closeModal(id);
  };
  // Gérer le bouton de fermeture (si présent)
  // On retire d'abord tout ancien event listener pour éviter les doublons
  const closeBtn = document.getElementById('close-' + id);
  if (closeBtn) {
    // Remplacer le bouton par son clone pour supprimer tous les anciens event listeners
    const newBtn = closeBtn.cloneNode(true);
    closeBtn.parentNode.replaceChild(newBtn, closeBtn);
    newBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closeModal(id);
    });
  }
}
function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
  document.onkeydown = null;
  modal.onclick = null;
  // Nettoyer le bouton de fermeture
  const closeBtn = document.getElementById('close-' + id);
  if (closeBtn) closeBtn.onclick = null;
}

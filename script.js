document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  }

  // Optional: Close sidebar when clicking outside of it on mobile
  document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);
    
    // If we click outside the sidebar and the toggle button, close the sidebar
    if (!isClickInsideSidebar && !isClickOnToggle && sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
    }
  });
});
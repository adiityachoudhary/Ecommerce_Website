<script>
  // Highlight the active bottom nav link
  const navLinks = document.querySelectorAll('.bottom-nav-link');
  const currentPage = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('#')[0];
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
</script>

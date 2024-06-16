  
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const searchBar = document.getElementById('searchInput');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links li').forEach((item) => {
      item.addEventListener('click', (event) => {
        
          navLinks.classList.remove('active');
          hamburger.classList.remove('active');
        
      });
    });

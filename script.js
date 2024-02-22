document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-links a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        pages.forEach(page => {
          page.classList.remove('active');
        });
  
        const targetPageId = link.getAttribute('href').substring(1);
        const targetPage = document.getElementById(targetPageId);
        targetPage.classList.add('active');
      });
    });
  });
  

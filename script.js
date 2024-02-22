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
  


  document.addEventListener("DOMContentLoaded", function() {
   
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.querySelector('.first-page-show').style.display = 'none';
        document.querySelector('#home').classList.add('active');
    }
});

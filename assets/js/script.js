// assets/js/script.js
document.addEventListener('DOMContentLoaded', function () {
    var currentPath = window.location.pathname;
    var links = document.querySelectorAll('.navbar a');
  
    links.forEach(function(link) {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  });
  
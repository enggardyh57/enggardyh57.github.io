
    const sections = document.querySelectorAll('h2');
    const navLinks = document.querySelectorAll('.section-nav a');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        if (pageYOffset >= offset) current = sec.getAttribute('id');
      });

      navLinks.forEach(link => {
        link.style.opacity = link.getAttribute('href') === '#' + current ? '1' : '0.5';
      });
    });
export const switchSections = () => {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');
  
    for (const link of links) {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        for (const section of sections) {
          if (section.id === targetId) {
            section.classList.add('active');
          } else {
            section.classList.remove('active');
          }
        }
        for (const link of links) {
          if (link === event.target) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    }
  };
  
export default function switchSections() {
  const links = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('main section');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').slice(1);

      sections.forEach((section) => {
        if (section.id === targetId) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });

      links.forEach((link) => {
        if (link === event.target) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    });
  });
}

const switchSections = () => {
  const links = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('main section');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').slice(1);

      sections.forEach((section) => {
        section.classList.toggle('active', section.id === targetId);
      });

      links.forEach((link) => {
        link.classList.toggle('active', link === event.target);
      });
    });
  });
};

export default switchSections;

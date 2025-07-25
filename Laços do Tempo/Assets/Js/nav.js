const navItems = document.querySelectorAll('nav ul li');

  navItems.forEach(li => {
    li.addEventListener('mouseenter', () => {
      document.querySelectorAll('nav ul li.active').forEach(activeItem => {
        if (activeItem !== li) {
          activeItem.classList.add('temporarily-disabled');
        }
      });
    });

    li.addEventListener('mouseleave', () => {
      document.querySelectorAll('nav ul li.temporarily-disabled').forEach(item => {
        item.classList.remove('temporarily-disabled');
      });
    });
  });

const toggleBtn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu-nav');
  const closeBtn = document.querySelector('.menu-close');

  toggleBtn.addEventListener('click', () => {
    menu.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('show');
  });
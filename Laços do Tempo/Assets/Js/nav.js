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

const toggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('nav ul');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
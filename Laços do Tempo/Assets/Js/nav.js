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

const menu = document.getElementById('hamburguer');
const fechar = document.getElementById('fechar');
const navMobile = document.getElementById('navMobile');
const headerContainer = document.getElementById('headerContainer');

menu.onclick = function () {
  navMobile.classList.add('ativo');
  document.body.classList.add('no-scroll'); // ✅ trava o scroll
  headerContainer.style.display = 'none';
};

fechar.onclick = function () {
  navMobile.classList.remove('ativo');
  document.body.classList.remove('no-scroll'); // ✅ libera o scroll
  headerContainer.style.display = 'flex'; // ou 'block'
};



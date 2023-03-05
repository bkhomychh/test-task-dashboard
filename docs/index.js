const refs = {
  openBtn: document.querySelector('.toggle--open'),
  closeBtn: document.querySelector('.toggle--close'),
  sidebar: document.querySelector('.sidebar'),
};

const mql = window.matchMedia('(max-width: 1100px)');

window.addEventListener('click', onWindowCLick);
mql.addEventListener('change', updateSidebarClass);

function onWindowCLick({ target }) {
  if (target.classList.contains('toggle')) {
    refs.sidebar.classList.toggle('isHidden');
    return;
  }

  if (
    !target.closest('.sidebar') &&
    !refs.sidebar.classList.contains('isHidden') &&
    window.innerWidth < 1100
  ) {
    hideSidebar();
  }
}

function updateSidebarClass() {
  if (window.innerWidth < 1100) {
    hideSidebar();
    return;
  }

  showSidebar();
}

function showSidebar() {
  refs.sidebar.classList.remove('isHidden');
}

function hideSidebar() {
  refs.sidebar.classList.add('isHidden');
}

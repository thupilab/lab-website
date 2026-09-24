// No framework or third-party scripts. Navigation still works without JavaScript.
document.documentElement.classList.add('js');
const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
button.addEventListener('click', () => {
  const expanded = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(expanded));
  nav.classList.toggle('open', expanded);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    nav.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    button.focus();
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();

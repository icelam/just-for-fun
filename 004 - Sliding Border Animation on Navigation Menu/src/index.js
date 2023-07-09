document.querySelectorAll('nav ul li a').forEach((item) => {
  item.addEventListener('click', (event) => {
    const currentActive = document.querySelector('li.active');
    if (currentActive) {
      currentActive.classList.remove('active');
    }
    event.target.closest('li').classList.add('active');
  });
})

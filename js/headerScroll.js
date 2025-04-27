export function headerScroll() {
    const header = document.querySelector('.header-container');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled-header');
      } else {
        header.classList.remove('scrolled-header');
      }
    });
  }
  
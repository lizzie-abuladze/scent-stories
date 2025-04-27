export function cookieNotice() {
    const cookieBanner = document.getElementById('cookie-notice');
    const acceptBtn = document.getElementById('accept-cookies');
  
    if (localStorage.getItem('cookiesAccepted') === 'true') {
      cookieBanner.classList.add('hide');
    }
  
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      cookieBanner.classList.add('hide');
    });
  }
  
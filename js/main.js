(() => {
  document.addEventListener('DOMContentLoaded', () => {


    document.querySelector(".header__nav-burger").addEventListener('click', () => {
          if (document.querySelector(".nav__list-burger").style.display == 'flex')
          {
            document.querySelector(".nav__list-burger").style.display = 'none';
            document.querySelector(".header__nav-burger").classList.remove("active");
          }
          else {
            document.querySelector(".nav__list-burger").style.display = 'flex';
            document.querySelector(".header__nav-burger").classList.add("active");
          }
        });


  });
})();

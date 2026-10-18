/* ===================================================================
   NETH - Networked Ecological Telemetry Hub
   Main JavaScript (Inspired by BeeZee project interactions)
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ==================== 1. SHOW / HIDE MENU ==================== */
  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

  /* Menu Show */
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  /* Menu Hidden */
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  /* Remove Menu Mobile On Link Click */
  const navLinks = document.querySelectorAll('.nav__link');
  function linkAction() {
    if (navMenu) {
      navMenu.classList.remove('show-menu');
    }
  }
  navLinks.forEach(n => n.addEventListener('click', linkAction));

  /* ==================== 2. CHANGE BACKGROUND HEADER ==================== */
  function scrollHeader() {
    const header = document.getElementById('header');
    if (window.scrollY >= 60) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  }
  window.addEventListener('scroll', scrollHeader);
  scrollHeader();

  /* ==================== 3. DARK / LIGHT THEME TOGGLE ==================== */
  const themeButton = document.getElementById('theme-button');
  const darkTheme = 'dark-theme';

  // Previously selected topic (if user selected)
  const selectedTheme = localStorage.getItem('selected-theme');

  // Obtain current theme status
  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

  function setTheme(isDark) {
    if (isDark) {
      document.body.classList.add(darkTheme);
      if (themeButton) {
        themeButton.classList.remove('ri-moon-line');
        themeButton.classList.add('ri-sun-line');
      }
    } else {
      document.body.classList.remove(darkTheme);
      if (themeButton) {
        themeButton.classList.remove('ri-sun-line');
        themeButton.classList.add('ri-moon-line');
      }
    }
  }

  // Validate if the user previously chose a topic or system prefers dark
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (selectedTheme) {
    setTheme(selectedTheme === 'dark');
  } else if (systemPrefersDark) {
    setTheme(true);
  } else {
    setTheme(false);
  }

  // Activate / deactivate the theme manually with the button
  if (themeButton) {
    themeButton.addEventListener('click', () => {
      const isCurrentlyDark = document.body.classList.contains(darkTheme);
      setTheme(!isCurrentlyDark);
      localStorage.setItem('selected-theme', getCurrentTheme());
    });
  }

  /* ==================== 4. SCROLL SECTIONS ACTIVE LINK ==================== */
  const sections = document.querySelectorAll('section[id]');

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav__menu a[href*='${sectionId}']`);

      if (targetLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetLink.classList.add('active-link');
        } else {
          targetLink.classList.remove('active-link');
        }
      }
    });
  }
  window.addEventListener('scroll', scrollActive);
  scrollActive();

  /* ==================== 5. SHOW SCROLL UP BUTTON ==================== */
  function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (scrollUp) {
      if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
      } else {
        scrollUp.classList.remove('show-scroll');
      }
    }
  }
  window.addEventListener('scroll', scrollUp);
  scrollUp();

  /* ==================== 6. HARDWARE & SOFTWARE TABS ==================== */
  const tabButtons = document.querySelectorAll('.tab__button');
  const tabContents = document.querySelectorAll('.tab__content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');

      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const activeContent = document.getElementById(target);
      if (activeContent) {
        activeContent.classList.add('active');
      }
    });
  });

  /* ==================== 7. DYNAMIC FOOTER YEAR ==================== */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

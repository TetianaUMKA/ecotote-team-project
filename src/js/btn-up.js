// const header = document.querySelector('header');
// const btnUp = document.querySelector('.btn-up');

// const observer = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if (!entry.isIntersecting) {
//         btnUp.classList.add('visible');
//       } else {
//         btnUp.classList.remove('visible');
//       }
//     });
//   },
//   { threshold: 0 }
// );

// if (header) observer.observe(header);

// btnUp.addEventListener('click', () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// });

// const header = document.querySelector('header');
// const footer = document.querySelector('footer');
// const btnUp = document.querySelector('.btn-up');

// if (header && footer && btnUp) {
//   const headerObserver = new IntersectionObserver(
//     entries => {
//       entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//           btnUp.classList.add('visible');
//         } else {
//           btnUp.classList.remove('visible');
//         }
//       });
//     },
//     { threshold: 0 }
//   );

//   const footerObserver = new IntersectionObserver(
//     entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           btnUp.classList.remove('visible');
//         }
//       });
//     },
//     { threshold: 0 }
//   );

//   headerObserver.observe(header);
//   footerObserver.observe(footer);

//   btnUp.addEventListener('click', () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   });
// }

const header = document.querySelector('header');
const footer = document.querySelector('footer');
const btnUp = document.querySelector('.btn-up');

if (header && footer && btnUp) {
  let headerVisible = true;
  let footerVisible = false;

  const updateButtonVisibility = () => {
    if (!headerVisible && !footerVisible) {
      btnUp.classList.add('visible');
    } else {
      btnUp.classList.remove('visible');
    }
  };

  const observerOptions = { threshold: 0 };

  const headerObserver = new IntersectionObserver(entries => {
    headerVisible = entries[0].isIntersecting;
    updateButtonVisibility();
  }, observerOptions);

  const footerObserver = new IntersectionObserver(entries => {
    footerVisible = entries[0].isIntersecting;
    updateButtonVisibility();
  }, observerOptions);

  headerObserver.observe(header);
  footerObserver.observe(footer);

  btnUp.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

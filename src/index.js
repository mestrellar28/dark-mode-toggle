import './main.scss';

const btnToggle = document.querySelector('#darkmode-toggle');

// listen to darkmode button when is clicked
btnToggle.addEventListener('click', () => {
   // toggle the dark class in body tag
   document.body.classList.toggle('dark');
   // toggle the active class in darkmode button
   btnToggle.classList.toggle('active');
});

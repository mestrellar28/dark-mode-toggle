import './main.scss';

const darkMode = () => {

   const btnToggle = document.querySelector('#darkmode-toggle');
   const body = document.querySelector('body');
   
   // listen to darkmode button when is clicked
   btnToggle.addEventListener('click', () => {
      // toggle the dark class in body tag
      body.classList.toggle('dark');
      // toggle the active class in darkmode button
      btnToggle.classList.toggle('active');
   
      // save dark mode in localStorage
      if(body.classList.contains('dark')) {
         localStorage.setItem('dark-mode', 'true');
      } else {
         localStorage.setItem('dark-mode', 'false');   
      }
   
   
   });
   
   // obtain the localstorage variable
   if(localStorage.getItem('dark-mode') === 'true') {
      // add the dark class in body tag
      body.classList.add('dark');
      // add the active class in darkmode button
      btnToggle.classList.add('active');
   } else {
      // remove the dark class in body tag
      body.classList.remove('dark');
      // remove the active class in darkmode button
      btnToggle.classList.remove('active');
   }
}

// when the document is loaded
document.addEventListener('DOMContentLoaded', () => {

   darkMode(); // execute the function dark mode
});
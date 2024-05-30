const emailForm = document.getElementById('emailForm');
 
emailForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
 
  alert(`Az értesítés elküldve az alábbi e-mail címre: ${email}`);
 
});
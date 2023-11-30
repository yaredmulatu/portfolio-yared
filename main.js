var typed= new Typed(".text" , {
strings:['Software Engineer','Frontend Developer','Web developer'],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true


});
const scriptURL = 'https://script.google.com/macros/s/AKfycbwLSuzN6zGebEtKtqxie9eVgdYQ6xcG9eTSg7YdYVDxEPkev17ZFJj8xJSRNX3rNf6l/exec'

const form = document.forms['theform']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
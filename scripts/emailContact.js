// send email
function formSubmit() {
   let email = document.getElementById("email")
   let subject = document.getElementById("subject")
   let message = document.getElementById("message")
   let myState = {
      email: email.value,
      subject: subject.value,
      message: message.value,
   }
   function sweetalert() {
      swal("Thanks!", "We will contact you as soon as possible.", "success")
      email.value = ''
      subject.value = ''
      message.value = ''
   }
   fetch('https://formsubmit.co/ajax/mahmoudabuattiya106@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(myState)
   })
      .then(sweetalert())
}
let form = document.querySelector("form")
   form.addEventListener("submit", (e) => {
      e.preventDefault();
      formSubmit();
   })
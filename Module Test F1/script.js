function submitForm(){
let firstname = document.getElementById('firstname').value;
let lastname = document.getElementById('lastname').value;
let email = document.getElementById('email').value;
let Reason = document.getElementById('Reason').value;
if(firstname!=null && lastname!=null && email!=null && Reason!=null){
    alert("Form submitted successfully!")
}
else{
    alert("All Fields are required")
}
}
var captcha;
function generate() {

    // Clear old input
    document.getElementById("Cap").value = "";

    // Access the element to store
    // the generated captcha
    captcha = document.getElementById("image");
    var uniquechar = "";

    const randomchar =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
    // Generate captcha for length of
    // 5 with random character
    for (let i = 0; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }

    // Store generated input
    captcha.innerHTML = uniquechar;
}

function printmsg() {
    const usr_input = document
        .getElementById("Cap").value;

    // Check whether the input is equal
    // to generated captcha or not
    if (usr_input == captcha.innerHTML) {
        var s = document.getElementById("key")
            .innerHTML = "<strong>Matching</strong>";
        
    }
    else {
        var s = document.getElementById("key")
            .innerHTML = "<strong>Not Matching</strong>";
        generate();
    }
}


  setInputFilter(document.getElementById("Age"), function(value) {
    return /^-?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
  }, "Only digits and '.' are allowed");




function Number(evt) {

    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
        }

(function() {
    const form = document.querySelector('#Obrazec');
    const checkboxes = form.querySelectorAll('input[type=checkbox]');
    const checkboxLength = checkboxes.length;
    const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

    function init() {
        if (firstCheckbox) {
            for (let i = 0; i < checkboxLength; i++) {
                checkboxes[i].addEventListener('change', checkValidity);
            }

            checkValidity();
        }
    }

    function isChecked() {
        for (let i = 0; i < checkboxLength; i++) {
            if (checkboxes[i].checked) return true;
        }

        return false;
    }

    function checkValidity() {
        const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
        firstCheckbox.setCustomValidity(errorMessage);
    }

    init();
})();



















//sweetalert koda(ne dela)
function validateAll() {

    var name =$("#Name").val();
    var sname =$("#Sname").val();
    var age =$("#Age").val();
    var formc =$(".form-control").val();
    var mail =$("#Mail").val();
    var cap =$("#Cap").val();

    var radios = $("input[name=Gender]").is(":checked");
    var checkbox = $("input[name=session]").is(":checked");

  if(name == '' || sname == '' || age == '' || formc == '' || mail == '' || cap == ''){
    swal({
      icon: 'error',
      title: 'Oops...',
      text: 'you have to fill out every field',
    })
    return false;
  }
  else{
    return true;
  }
}




var x=document.getElementById("Submit");

x.addEventListener("click",fSweetAlert);




function fSweetAlert(){
  
    

    
    
    var name = document.forms["Obrazec"]["Name"].value;
    var sname = document.forms["Obrazec"]["Sname"].value;
    var age = document.forms["Obrazec"]["Age"].value;
    var formc = document.forms["Obrazec"]["country"].value;
    var mail = document.forms["Obrazec"]["Mail"].value;
    var cap = document.forms["Obrazec"]["Cap"].value;
    if (name == "") {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Name has to be filled out',
      })
      return false;
    }
    else if (sname == "") {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Surname has to be filled out',
      })
      return false;
    }
    else if (age == "") {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Age has to be filled out',
      })
      return false;
    }
    else if (formc == "") {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Country has to be chosen',
      })
      return false;
    }
    else if (mail == "") {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'mail has to be valid',
      })
      return false;
    }
    else if (cap == "") {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'answer the captcha',
      })
      return false;
    }
    
    else{
      
    Swal.fire({
    heightAuto: false,
    icon: 'success',
    title: 'REGISTRATION SUCCESFUL',
    text: 'You have registered '
    
  }, 
  function(){ 
    location.reload();
  })
  e.preventDefault();
  
  
  
  }
  e.preventDefault();
  
}




function fireSweetAlert(){
	
	
  Swal.fire({
heightAuto: false,
icon: 'success',
title: 'REGISTRATION SUCCESFUL',
text: 'You have registered '
})
  e.preventDefault();
}
form.addEventListener("submit",fireSweetAlert);
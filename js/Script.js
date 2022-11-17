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
$("#Submit").bind("click", validateAll);














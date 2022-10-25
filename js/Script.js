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

function SweetAlert() {
    e.preventDefault();
    swal.fire("Good job!", "You clicked the button!", "success");
  }




  // Restricts input for the given textbox to the given inputFilter function.
function setInputFilter(textbox, inputFilter, errMsg) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function(event) {
      textbox.addEventListener(event, function(e) {
        if (inputFilter(this.value)) {
          // Accepted value
          if (["keydown","mousedown","focusout"].indexOf(e.type) >= 0){
            this.classList.remove("input-error");
            this.setCustomValidity("");
          }
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          // Rejected value - restore the previous one
          this.classList.add("input-error");
          this.setCustomValidity(errMsg);
          this.reportValidity();
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          // Rejected value - nothing to restore
          this.value = "";
        }
      });
    });
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

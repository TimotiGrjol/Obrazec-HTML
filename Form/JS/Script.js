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
    for (let i = 1; i < 5; i++) {
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



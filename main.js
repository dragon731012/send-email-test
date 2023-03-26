
/* Sending Email from Contact Section */
(function () {
    emailjs.init("JjbqAZDGwNRomOz_D");
})();

function sendmail() {
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;

        var contactParams = {
            from_name: fullName,
            from_email: userEmail,
            message: userMessage
        };

        emailjs.send('csfmlpo', '15rf4du', contactParams).then(function (res) {})
}

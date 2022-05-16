function sendMail(params) {
    var tempParams = {
        fname: document.getElementById('fname').value,
        message: document.getElementById('msg').value,
        email: document.getElementById('email').value,
    };
    emailjs.send('service_0h2elhp','template_ollmz3s',tempParams)
    .then(function(res){
        console.log("success", res.status)
        alert(res.status);
    }), function(error) {
        console.log('FAILED...', error);
    };
}
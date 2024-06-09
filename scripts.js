document.getElementById('newsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    document.getElementById('subscriptionMessage').textContent = `Danke für Ihre Anmeldung, ${email}!`;
    document.getElementById('newsForm').reset();
});

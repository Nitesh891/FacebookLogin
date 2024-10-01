document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send the data to the server
    fetch('/receive-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (response.ok) {
            console.log('Data sent successfully');
            // Optionally redirect or show a success message here
        } else {
            console.error('Error:', response.statusText);
        }
    })
    .catch(error => console.error('Error:', error));
});

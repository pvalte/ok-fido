async function loginFormHandler (event) {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim(); 
    const passwordHash = document.querySelector('#password-login').value.trim();

    if(email && passwordHash) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                passwordHash
            }),
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => {
            if(response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert(response.statusText);
            };
        });        
    }
}

async function signupFormHandler (event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const passwordHash = document.querySelector('#password-signup').value.trim();

    if(username && email && passwordHash) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                passwordHash
            }),
            headers: {'Content-Type': 'application/json'}
        });
        console.log(response);
        
        // check the response status
        if(response.ok) {
            console.log('success');
            document.location.replace('/login');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
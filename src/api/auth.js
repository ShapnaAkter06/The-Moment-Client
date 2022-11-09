export const setAuthToken = (user) => {
    //Jwt Token
    const currentUser = {
        email: user.email
    }

    console.log(currentUser);

    //get jwt token
    fetch('https://assignment-11-server-gray.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('the-moment', data.token);
        })
}
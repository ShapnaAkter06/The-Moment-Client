export const setAuthToken = (user) => {
    //Jwt Token
    const currentUser = {
        email: user.email
    }

    console.log(currentUser);

    //get jwt token
    fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            //local storage is easiest but not the best place to store jwt token
            localStorage.setItem('the-moment', data.token);
        })
}
const login = document.querySelector('#login');

login.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (email === "" || password === "") alert("Enter valid Email or password");
    else{
        let records = new Array();
        records = JSON.parse(localStorage.getItem("users"))
        ? JSON.parse(localStorage.getItem("users"))
        : [];
 
        if (
            records.some((record) => {
              return record.email === email && record.password === password;
            })
          ) {
            alert("Login successful!");
            let curr = records.filter((user) => {
                return user.email === email && user.password === password
            })[0] // idx-0 has email and password confined in object
            console.log(curr);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            window.location.href = 'Home.html'; // navigate to home page
          }
        else{
            alert('Login failed!');
        }
    }
})
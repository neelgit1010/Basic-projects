const submit = document.querySelector("#submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  if (email === "" || password === "") alert("Email or password cant be empty");
  else {
    let records = new Array();
    records = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    if (
      records.some((record) => {
        return record.email === email;
      })
    ) {
      alert("Gmail ID already exists!");
    } else {
      records.push({
        email: email,
        password: password,
      });
      localStorage.setItem("users", JSON.stringify(records));
      alert("User added successfully");
    }
  }
});

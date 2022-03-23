function submitData(name, email) {
const formData = {
    name: name,
    email: email,
    };
    
const configObject = {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    },
    body: JSON.stringify(formData),
};
return fetch("http://localhost:3000/users", configObject)
.then((response) => response.json())
.then((userData) => document.body.innerHTML = userData.id)
.catch.replyWithError( {
    message: message,
    code: '401',
  } )
}
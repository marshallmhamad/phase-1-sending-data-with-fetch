// Add your code here
function submitData(name,email){

    const formData = {
        name: "Steve",
        email: "steve@steve.com",
      };


      const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      };

     return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
          return response.json();
        })
        .then(function (object) {
            const p = document.createElement('p')
           return document.querySelector('body').appendChild(p).textContent = object.id
         // console.log(object);
        })
        .catch(function (error) {
            const p = document.createElement('p')
            return document.querySelector('body').appendChild(p).textContent = error
        //    alert (error.message);
        //   console.log(error.message);
        });






}
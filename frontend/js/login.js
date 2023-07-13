
const eyeIcon = document.querySelector("#eyeicon");
const pswwrd = document.querySelector("#password");

eyeIcon.onclick = () =>{
  if( pswwrd .type === "password"){
    pswwrd.type = "text";          
    eyeIcon.src ="../images/hide.png";
  }else{
    pswwrd.type = "password";
    eyeIcon.src ="../images/view.png";
  }
}


const loginButton = document.querySelector("#login");
loginButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const baseUrl = "http://localhost:5000";

  const login = async () => {
    const username = document.getElementById("gmail").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const jsonData = await response.json();
        throw new Error(jsonData.error);
      }

      const jsonData = await response.json();
      alert(jsonData.message);

      if (jsonData.status) {
        let data = jsonData.data;
        localStorage.setItem('username', data.username);
        localStorage.setItem('email', data.email);
        localStorage.setItem('id', data.id);
        alert("Login successful!");
        window.location.href = "taskList.html";
      } else {
        alert("Error during login!");
      }
    } catch (error) {
      // console.error(error);
      alert(error.message);
    }
  };

await login();
});

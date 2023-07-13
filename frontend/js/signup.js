const eyeIcon = document.querySelector("#eyeicon");
const pswwrd = document.querySelector("#password");
const eyeIcon2 = document.querySelector("#eye-icon2");
const passwordConfirm = document.querySelector("#password-confirm");
const form = document.querySelector("#signupForm");
const signupButton = document.querySelector("#signup");
// const signupButton= document.querySelector("#signup");
eyeIcon.onclick = () =>{
  if( pswwrd .type === "password"){
    pswwrd.type = "text";
        eyeIcon.src ="../images/hide.png";
  }else{
    pswwrd.type = "password";
    eyeIcon.src ="../images/view.png";
  }
}
// console.log(eyeIcon)

eyeIcon2.onclick = () =>{
  if( passwordConfirm.type === "password"){
    passwordConfirm.type = "text";
        eyeIcon2.src ="../images/hide.png";
  }else{
    passwordConfirm.type = "password";
    eyeIcon2.src ="../images/view.png";
  }
}

signupButton.addEventListener('click',(e) =>{
  e.preventDefault();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("password-confirm").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return;
  }
});


signupButton.addEventListener("click", (e) => {
  e.preventDefault();

  const baseUrl = "http://localhost:5000";

const signup = async () => {
  const username = document.getElementById("username").value;
  const email = document.getElementById("gmail").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(`${baseUrl}/signup`, { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      const jsonData = await response.json();
      throw new Error(jsonData.error);
    }
      
    

    const jsonData = await response.json();
    alert(jsonData.message);
     
if(jsonData.status){
  alert("Registration successful!");  
  window.location.href = "login.html";
}else{
  alert("Error during registration!");
}
    // Redirect to home.html or perform any other action on successful signup
    window.location.href = 'login.html';

  } catch (error) {
    alert(error.message);
  }
};
signup();
})
// const signupForm = document.getElementById("signup-form");



//   try {
//     const response = await fetch("http://localhost:5000/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, email, password }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.error);
//     }

//     // Registration successful, redirect to login page
//     window.location.href = "login.html";
//   } catch (error) {
//     console.error("Signup error:", error);
//     // Handle error, display error message to the user
//   }
// });




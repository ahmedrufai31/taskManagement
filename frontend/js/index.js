   // Retrieve the button element
   const getStartedButton = document.getElementById("get-startedbtn");

   // Attach a click event listener to the button and redirect the user to the sign-up page
   getStartedButton.addEventListener("clicked", (e) => {
     e.preventDefault();
     window.location.href = "signup.html";
   });
 
console.log(getStartedButton);
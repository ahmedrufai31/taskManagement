const form = document.getElementById("profileForm");
const editProfileBtn = document.getElementById("editprofilebtn");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");


editProfileBtn.addEventListener("click", function() {
  form.classList.toggle("edit-profile-form");
});

cancelBtn.addEventListener("click", function() {
  profileForm.classList.remove("edit-profile-form");
});

const username = localStorage.getItem('username');
const email =  localStorage.getItem('email');



// Update the HTML content with the retrieved values
document.getElementById('usernameElement').innerHTML = username;
document.getElementById('emailElement').innerHTML = email;

// document.getElementById('usermame').value;



    // let originalUsername;
    // let originalPassword;

    // const toggleForm = () => {
    //   const formContainer = document.querySelector('.edit-profile-form');
    //   formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';

    //   if (formContainer.style.display === 'block') {
    //     originalUsername = document.getElementById('username').value;
    //     originalPassword = document.getElementById('password').value;
    //   } else {
    //     document.getElementById('username').value = originalUsername;
    //     document.getElementById('password').value = originalPassword;
    //   }
    // };

    const saveChanges = (event) => {
      event.preventDefault();
      const updatedUsername = document.getElementById('username').value;
      const updatedPassword = document.getElementById('password').value;
    }
    //   // Perform actions to save changes

    //   document.querySelector('.uname p:last-child').textContent = updatedUsername;

    //   form.reset();
    //   toggleForm();
    // };

    // const cancelChanges = () => {
    //   document.getElementById('username').value = originalUsername;
    //   document.getElementById('password').value = originalPassword;

    //   form.reset();
    //   toggleForm();
    // };

    // editProfileBtn.addEventListener('click', toggleForm);
    // saveBtn.addEventListener('click', saveChanges);
    // cancelBtn.addEventListener('click', cancelChanges);




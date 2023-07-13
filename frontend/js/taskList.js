window.addEventListener("load", () => {
    const form = document.querySelector("#new-task");
    const input = document.querySelector("#task-input");
    const list_el = document.querySelector("#tasks");
    
    // Load tasks from local storage on page load
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Function to save tasks to local storage
    const saveTasksToLocalStorage = (tasks) => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    };
  
    // Function to create a new task element
    const createTaskElement = (task) => {
      const task_el = document.createElement("div");
      task_el.classList.add("task");

     
  
      const task_content_el = document.createElement("div");
      task_content_el.classList.add("content");
      task_el.appendChild(task_content_el);
  
      //  const img_el = document.createElement("img");
      // circleImage.classList.add("circle");
      // task_content_el.appendChild(img_el);

      const task_input_el = document.createElement("input");
      task_input_el.classList.add("text");
      task_input_el.type = "text";
      task_input_el.value = task;
      task_input_el.setAttribute("readonly", "readonly");
      task_content_el.appendChild(task_input_el);
  
      const task_actions_el = document.createElement("div");
      task_actions_el.classList.add("actions");
  
      const task_edit_el = document.createElement("button");
      task_edit_el.classList.add("edit");
      task_edit_el.innerHTML = "Edit";
  
      const task_delete_el = document.createElement("button");
      task_delete_el.classList.add("delete");
      task_delete_el.innerHTML = "Delete";
  
      task_actions_el.appendChild(task_edit_el);
      task_actions_el.appendChild(task_delete_el);
      task_el.appendChild(task_actions_el);
  
      return task_el;
    };
 
  
    // Function to handle the form submission
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      const task = input.value;
  
      if (!task) {
        alert("Please fill out the task");
        return;
      }
  
      const task_el = createTaskElement(task);
  
      list_el.appendChild(task_el);
  
      // Save task to local storage
      savedTasks.push(task);
      saveTasksToLocalStorage(savedTasks);
  
      input.value = "";
    };
  
    form.addEventListener("submit", handleFormSubmit);
  
   
  // Filter tasks
  const searchInput = document.querySelector("#search");
  searchInput.addEventListener('keyup', filterTasks);

  function filterTasks() {
    const searchValue = searchInput.value.toLowerCase();
    const tasks = document.querySelectorAll(".task");
  

    tasks.forEach(task => {
      const taskContent = task.querySelector('.text').value.toLowerCase();

      if (taskContent.includes(searchValue)) {
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    });
  }

  // dropdown
  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = document.querySelector('#dropdown-display');
  let isOpen = false;
  //  console.log(dropdownContent);
  
dropdown.addEventListener('click', function() {
  if (isOpen) {
    dropdownContent.style.display = 'none';
    isOpen = false;
  } else {
    dropdownContent.style.display = 'block';
    isOpen = true;
  }
});
  


    // Render tasks from local storage on page load
    savedTasks.forEach((task) => {
      const task_el = createTaskElement(task);
      list_el.appendChild(task_el);
    });
  
    list_el.addEventListener('click', (e) => {
      if (e.target.classList.contains('edit')) {
        const task_el = e.target.closest('.task');
        const task_input_el = task_el.querySelector('.text');
        const task_edit_el = task_el.querySelector('.edit');
  
        if (task_edit_el.innerText.toLowerCase() === 'edit') {
          task_input_el.removeAttribute('readonly');
          task_input_el.focus();
          task_edit_el.innerText = 'Save';
        } else {
          task_input_el.setAttribute('readonly', 'readonly');
          task_edit_el.innerHTML = 'Edit';
          
          // Update task in local storage
        const index = Array.from(list_el.children).indexOf(task_el);
          savedTasks[index] = task_input_el.value;
          saveTasksToLocalStorage(savedTasks);
        }
      } else if (e.target.classList.contains('delete')) {
        const task_el = e.target.closest('.task');
        list_el.removeChild(task_el);
  
        // Remove task from local storage
        const index = Array.from(list_el.children).indexOf(task_el);
        savedTasks.splice(index, 1);
        saveTasksToLocalStorage(savedTasks);
      }
    });
  });
  
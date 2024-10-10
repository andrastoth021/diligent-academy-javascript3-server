const prompt = require('prompt-sync')()

const BASE_URL = "http://localhost:3000";

const taskToDo = prompt()

fetch('http://localhost:3000/todos', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({task: taskToDo }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("To-do added:", data);
    })
    .catch((error) => {
      console.error("Error adding to-do:", error);
    });
  

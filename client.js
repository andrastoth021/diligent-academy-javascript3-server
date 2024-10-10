const prompt = require('prompt-sync')()

const BASE_URL = "http://localhost:3000";

// GET REQUEST
fetch(`${BASE_URL}/todos`, { method: 'GET' })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error(error)
    })


// PUT REQUEST
const chosenTodoId = 1
const toChangeTodoTask = "Changed Todo";
fetch(`${BASE_URL}/todos/${chosenTodoId}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify( {task: `${toChangeTodoTask}`} )
})
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error(error)
    })


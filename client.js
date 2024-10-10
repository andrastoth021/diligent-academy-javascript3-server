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


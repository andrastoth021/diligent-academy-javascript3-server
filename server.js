const fs = require('fs');
const express = require('express');
const prompt = require('prompt-sync')()

const port = 3000;
const app = express();
app.use(express.json());

function writeTodoToFile(content) {
    fs.writeFileSync('data.json', JSON.stringify(content, null, 2));
}

function readTodosFromFile() {
    return JSON.parse(fs.readFileSync("data.json", "utf8"));
}

app.get("/todos", (req, res) => {
    const result = readTodosFromFile();
    res.json(result);
});

app.post("/todos", (req, res) => {
    
});

app.put("/todos/:id", (req, res) => {
    
});

app.delete("/todos/:id", (req, res) => {
    
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


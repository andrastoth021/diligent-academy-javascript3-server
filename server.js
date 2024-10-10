const fs = require("fs");
const express = require("express");
const prompt = require("prompt-sync")();

const port = 3000;
const app = express();
app.use(express.json());

function writeTodoToFile(content) {
  fs.writeFileSync("data.json", JSON.stringify(content, null, 2));
}

function readTodosFromFile() {
  return JSON.parse(fs.readFileSync("data.json", "utf8"));
}


app.get("/todos", (req, res) => {
    const result = readTodosFromFile();
    res.json(result);
});

app.post("/todos", (req, res) => {
  const todos = readTodosFromFile();
  const newTodo = req.body;

  newTodo.id = todos[todos.length - 1].id + 1;
  todos.push(newTodo);
  writeTodoToFile(todos);
  res.status(201).json(newTodo)
  console.log(todos);
  
});

app.put("/todos/:id", (req, res) => {
    const { id } = req.params;
    const updatedTodo = req.body;

    const todos = readTodosFromFile();
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    
    if (todoIndex !== -1) {
        todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo }
        writeTodoToFile(todos);
        res.json(todos[todoIndex]);
    }
    else res.status(404).json({ message: "Couldn't find a todo with this ID!" });
});

app.delete("/todos/:id", (req, res) => {});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const fs = require('fs');
const express = require('express');

const port = 3000;
const app = express();
app.use(express.json());

const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Bob Smith" },
    { id: 3, name: "Alber Johnson" }
]
const products = [
    { id: 1, name: "Phone" },
    { id: 2, name: "Laptop" }
]

/*app.get("/users", (req, res) => {
    const { name } = req.query;

    const result = users.filter( (user) => user.name.toLowerCase().includes(name.toLowerCase()) )
    res.json(result);
});*/

/*app.post("/users", (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(200).json(newUser);
});*/

/*app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;

    const userIndex = users.findIndex(user => user.id === parseInt(id));
    if (userIndex !== -1) {
        users[userIndex] = {...users[userIndex], ...updatedUser}
        res.json(users);
    } else res.status(404).json({ message: "User not found!" });
});*/

/*app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(user => user.id === parseInt(id))

    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.json({ message: "User is deleted!" });
    } else res.status(404).json({ message: "User not found!" });
});
*/

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


//const prompt = require('prompt-sync')()

// console.log(JSON.parse(fs.readFileSync("data.json", "utf8")))

/*const newContent = {
    name: "John Doe"
}*/

// const content = prompt()

// fs.writeFileSync('data.json', JSON.stringify(content, null, 2))



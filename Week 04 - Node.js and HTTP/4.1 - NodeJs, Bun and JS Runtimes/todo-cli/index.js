const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

const todosFilePath = "./todos.json";

// Function to read todos from the JSON file
function readTodos() {
  try {
    const data = fs.readFileSync(todosFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading todos:", error);
    return [];
  }
}

// Function to write todos to the JSON file
function writeTodos(todos) {
  fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2));
}

// Command to list all todos
program
  .command("list")
  .description("List all todos")
  .action(() => {
    const todos = readTodos();
    if (todos.length === 0) {
      console.log("No todos available.");
    } else {
      todos.forEach((todo, index) => {
        console.log(`${index}: [${todo.done ? "x" : " "}] ${todo.text}`);
      });
    }
  });

// Command to add a todo
program
  .command("add <text>")
  .description("Add a todo")
  .action((text) => {
    const todos = readTodos();
    todos.push({ text, done: false });
    writeTodos(todos);
    console.log(`Todo added: "${text}"`);
  });

// Command to mark a todo as done
program
  .command("mark <index>")
  .description("Mark a todo as done")
  .action((index) => {
    const todos = readTodos();
    if (todos[index]) {
      todos[index].done = true;
      writeTodos(todos);
      console.log(`Marked todo as done: "${todos[index].text}"`);
    } else {
      console.log("Todo not found.");
    }
  });

// Command to delete a todo
program
  .command("delete <index>")
  .description("Delete a todo")
  .action((index) => {
    const todos = readTodos();
    if (todos[index]) {
      const deleted = todos.splice(index, 1);
      writeTodos(todos);
      console.log(`Deleted todo: "${deleted[0].text}"`);
    } else {
      console.log("Todo not found.");
    }
  });

program.parse(process.argv);

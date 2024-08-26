// Import required modules
const express = require('express'); 
const axios = require('axios'); // 

// Create an Express application
const app = express();
const port = 3000; // Port for your server

// Middleware 
app.use(express.json());


const jsonServerUrl = 'http://localhost:3001/todos';


app.listen(port, () => {
  console.log(`Todo app listening at http://localhost:${port}`);
});

// Create a new todo
app.post('/todos', async (req, res) => {
  try {
    const response = await axios.post(jsonServerUrl, req.body); // Send the new todo to JSON server
    res.status(201).json(response.data); // Send back the created todo
  } catch (error) {
    res.status(500).json({ error: 'Failed to create todo' }); // Handle errors
  }
});

// Get all todos
app.get('/todos', async (req, res) => {
  try {
    const response = await axios.get(jsonServerUrl); // Get all todos from JSON server
    res.json(response.data); // Send todos back to client
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch todos' }); // Handle errors
  }
});

// Update a todo by ID
app.put('/todos/:id', async (req, res) => {
  try {
    const response = await axios.put(`${jsonServerUrl}/${req.params.id}`, req.body); // Update the todo
    res.json(response.data); // Send back the updated todo
  } catch (error) {
    res.status(500).json({ error: 'Failed to update todo' }); // Handle errors
  }
});

// Delete a todo by ID
app.delete('/todos/:id', async (req, res) => {
  try {
    await axios.delete(`${jsonServerUrl}/${req.params.id}`); // Delete the todo
    res.status(204).send(); // Send back a success status
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete todo' }); // Handle errors
  }
});

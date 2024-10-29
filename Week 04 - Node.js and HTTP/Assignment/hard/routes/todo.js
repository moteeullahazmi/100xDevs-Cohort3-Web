const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const router = Router();
const { Todo } = require("../database/index");

// todo Routes
router.post('/', adminMiddleware, async (req, res) => {
    // Implement todo creation logic
    try{
        const userId = req.userId;
    const {title, description, complete } = req.body;

     await Todo.create({
       title: title,
       description: description,
       complete: complete,
       userId:userId,
     });
    res.json({
        result : "Todo Create",
        
    })
    } catch(error){
        console.error(error);
        res.json({error:error})
    }

    

});

router.put('/', adminMiddleware, async (req, res) => {
    // Implement update todo  logic
    const userId = req.userId;

    const  {title, description, complete, todoId } = req.body;

    const course = await Todo.updateOne({
        _id: todoId,
        userId
    },{
        title:title,
        description:description,
        complete:complete
    })

    res.json({
        message: "Course Updated",
        userId,
    })


});

router.delete('/', adminMiddleware, async (req, res) => {
    // Implement delete todo logic
    const todoId = req.body.todoId;
    
     try {
        const result = await Todo.deleteOne({ _id: todoId });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Todo not found" });
        }

        return res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Error deleting todo", error });
}});



router.delete("/:id", adminMiddleware, async (req, res) => {
  const id = req.params.id;

  // Validate the ObjectId format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid Todo ID format" });
  }

  try {
    const result = await Todo.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ message: "Error deleting todo", error });
  }
});



router.get("/", adminMiddleware, async (req, res) => {
  try {
    const todos = await Todo.find(); // Fetch all todos from the database
    return res.status(200).json(todos); // Send the retrieved todos as a JSON response
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ message: "Error fetching todos", error }); // Send an error response
  }
});

router.get("/:id", adminMiddleware, async (req, res) => {
  const id = req.params.id;

  // Validate the ObjectId format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid Todo ID format" });
  }

  try {
    const todo = await Todo.findById(id); // Fetch the todo by ID

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" }); // Return 404 if not found
    }

    return res.status(200).json(todo); // Send the retrieved todo as a JSON response
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ message: "Error fetching todo", error }); // Send an error response
  }
});


module.exports = router;
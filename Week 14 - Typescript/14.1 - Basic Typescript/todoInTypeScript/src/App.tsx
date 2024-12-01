// Todo.tsx

// Define the TodoType interface
interface TodoType {
  title: string;
  description: string;
  done: boolean;
}

// Define a sample todo object
const todo: TodoType = {
  title: "Moteeullah Azmi",
  description: "Go to gym",
  done: true,
};

// App Component
function App() {
  return (
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>
  );
}

export default App;

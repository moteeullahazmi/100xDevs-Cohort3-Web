import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;

import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="/" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;

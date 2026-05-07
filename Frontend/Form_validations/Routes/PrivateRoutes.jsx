import { Routes, Route } from "react-router-dom";
import Login from "../src/Forms/Login";
import Home from "../AppComponents/Home";
import Signup from "../src/Forms/Signup";
function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default PrivateRoutes;

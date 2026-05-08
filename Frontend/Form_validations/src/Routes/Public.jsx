import { Routes, Route } from "react-router-dom";
import Login from "../Forms/Login.jsx";
import Home from "../AppComponents/Home.jsx";
import Signup from "../Forms/Signup.jsx";
import Product from "../AppComponents/Product.jsx";
import Private from "./Private.jsx";
function Public() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<Private />}>
        <Route path="/products" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default Public;

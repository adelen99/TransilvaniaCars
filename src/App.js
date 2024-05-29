import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Contact, Products, Error, SingleProduct } from "./pages";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/despre-noi' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/mașini' element={<Products />} />
          <Route path='/mașini/:id' element={<SingleProduct />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

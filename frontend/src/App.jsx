import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
import Article from "./Article/Article"
import Register from "./AuthPages/Register"
import Login from "./AuthPages/Login"
import Admin from "./Admin/Admin"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Admin/*" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

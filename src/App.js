import {BrowserRouter, Routes, Route} from "react-router-dom";

import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Slides from "./pages/Slides";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/produtos" element={<Products/>} />
        <Route path="/categorias" element={<Categories/>} />
        <Route path="/pedidos" element={<Orders/>} />
        <Route path="/slides" element={<Slides/>} />
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

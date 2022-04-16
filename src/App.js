import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Language from "./pages/Language";
import MyCart from "./pages/MyCart";
import LogIn from "./pages/LogIn";
import WishList from "./pages/WishList";
import Nav from "./components/Nav";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/language" element={<Language />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

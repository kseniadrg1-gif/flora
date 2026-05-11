import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Delivery from "./components/Delivery/Delivery";
import Info from "./components/Info/Info";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/info" element={<Info />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

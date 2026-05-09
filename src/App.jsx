import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Delivery from "./components/Delivery/Delivery";
import Info from "./components/Info/Info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

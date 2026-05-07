import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Delivery from "./components/Delivery/Delivery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

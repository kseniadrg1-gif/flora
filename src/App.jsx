import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Delivery from "./components/Delivery/Delivery";
// import Privacy from "./components/Privacy"; ← УДАЛИ ЭТУ СТРОКУ

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/delivery" element={<Delivery />} />
        {/* <Route path="/privacy" element={<Privacy />} /> ← УДАЛИ ЭТУ СТРОКУ */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

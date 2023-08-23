import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Alerts from "./Pages/Alerts/Alerts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/alert-history" element={<Alerts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/Accounts/SignIn";
import HomePage from "./Pages/Home/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/AuthPage/LoginPage";
import RegisterPage from "./pages/AuthPage/RegisterPage";
import "./App.css";
import CustomBag from "./pages/Custorm/CustormPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        <Route path="/custom" element={<CustomBag />} />
        </Route>

        {/* Authentication routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

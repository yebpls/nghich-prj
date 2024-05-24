import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/AuthPage/LoginPage";
import RegisterPage from "./pages/AuthPage/RegisterPage";
import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster position="top-right" />

      <BrowserRouter>
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
          </Route>

          {/* <Route path="/products" element={<MainLayout />}>
            <Route index element={<ProductPage />} />
          </Route>

          <Route path="/cart" element={<MainLayout />}>
            <Route index element={<CartPage />} />
          </Route> */}

          {/* Authentication routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

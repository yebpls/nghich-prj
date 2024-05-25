import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/AuthPage/LoginPage";
import RegisterPage from "./pages/AuthPage/RegisterPage";
import "./App.css";
import { Toaster } from "react-hot-toast";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductDetailPage from "./pages/ProductPage/ProductDetailPage";
import CartPage from "./pages/Cart/CartPage";
import CustomBag from "./pages/Custorm/CustormPage";
import UserProfile from "./pages/UserAccount/userProfile";

function App() {
  return (
    <div>
      <Toaster position="top-right" />

      <BrowserRouter>
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route
              path="/productDetail/:productId"
              element={<ProductDetailPage />}
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/customize" element={<CustomBag />} />
            <Route path="/user" element={<UserProfile />} />
          </Route>

          {/* Authentication routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import UserLayout from "./layouts/UserLayout";
import UserAddress from "./pages/UserAccount/UserAddress";
import UserOrder from "./pages/UserAccount/UserOrder";
import UserDraft from "./pages/UserAccount/UserDraft";
import UserWishlist from "./pages/UserAccount/UserWishlist";

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
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/customize" element={<CustomBag />} />
            <Route path="/user" element={<UserLayout />}>
              <Route index element={<Navigate to="/user/user-profile" />} />
              <Route path="/user/user-profile" element={<UserProfile />} />

              <Route path="/user/user-address" element={<UserAddress />} />
              <Route path="/user/user-order" element={<UserOrder />} />
              <Route path="/user/user-draft" element={<UserDraft />} />
              <Route path="/user/user-wishlist" element={<UserWishlist />} />
            </Route>
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

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/AuthPage/LoginPage";
import RegisterPage from "./pages/AuthPage/RegisterPage";
import "./App.css";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductDetailPage from "./pages/ProductPage/ProductDetailPage";
import CustomBag from "./pages/Custorm/CustormPage";
import UserProfile from "./pages/UserAccount/userProfile";
import UserLayout from "./layouts/UserLayout";
import UserAddress from "./pages/UserAccount/UserAddress";
import UserOrder from "./pages/UserAccount/UserOrder";
import UserDraft from "./pages/UserAccount/UserDraft";
import UserWishlist from "./pages/UserAccount/UserWishlist";
import CollectionPage from "./pages/HomePage/CollectionPage";
import OrderUser from "./pages/OrderPage/OrderUser";
import CustomBagV2 from "./pages/CustomV2/Custom";
import ProtectRole from "./components/ProtectRoute/ProtectRole";
import { useEffect } from "react";
import { getToken } from "./config/http";
import { jwtDecode } from "jwt-decode";
import { useAccountStore } from "./zustand-store/AccountInfoState";
import { useLoginStore } from "./zustand-store/loginState";
import Cookies from "js-cookie";
import AdminLayout from "./layouts/AdminLayout";
import Protected from "./components/ProtectRoute/Protected";
import Dashboard from "./pages/AdminManage/Dashboard";
import ProductManage from "./pages/AdminManage/ProductManage";
import OrderManage from "./pages/AdminManage/OrderManage";
import CustomerManage from "./pages/AdminManage/CustomerManage";
import Settings from "./pages/AdminManage/Settings";
import MyCustom from "./pages/CustomV2/GetCustom/getMyCustom";
import UserBanned from "./pages/UserAccount/UserBanned";
import CartCustom from "./pages/CustomV2/OrderCustom/CartCustom";
import CheckoutDetails from "./pages/CustomV2/OrderCustom/CheckoutDetails";
import OrderComplete from "./pages/CustomV2/OrderCustom/OrderComplete";
import CustomPage from "./pages/CustomV2/MainCustomPage/CustomPage";
import Contact from "./pages/ContactUs/ContactUs";
import CustomManage from "./pages/AdminManage/CustomManage";

function App() {
  const { setRole } = useAccountStore((state) => state);
  const { logout, isLogin } = useLoginStore();
  useEffect(() => {
    let token = getToken();
    if (token) {
      token = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);

      console.log("check exp", token.exp, currentTime);
      if (currentTime < token.exp) {
        setRole(token.role);
      } else {
        window.location.href = "/";
        Cookies.remove("auth_token");
        logout();
      }
    }
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/reject" element={<UserBanned />} />
            <Route path="/products" element={<ProductPage />} />
            <Route
              path="/productDetail/:productId"
              element={<ProductDetailPage />}
            />
            <Route path="/cart" element={<OrderUser />} />
            <Route path="/customize" element={<CustomBag />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/my-custom" element={<MyCustom />} />
            <Route path="/my-cart-custom" element={<CartCustom />} />
            <Route path="/checkout-custom" element={<CheckoutDetails />} />
            <Route path="/order-custom-complete" element={<OrderComplete />} />
            {/* USER ROLE */}
            <Route
              path="/user"
              element={
                <ProtectRole requiredRole={1}>
                  <UserLayout />
                </ProtectRole>
              }
            >
              <Route index element={<Navigate to="/user/user-profile" />} />
              <Route path="/user/user-profile" element={<UserProfile />} />

              <Route path="/user/user-address" element={<UserAddress />} />
              <Route path="/user/user-order" element={<UserOrder />} />
              <Route path="/user/user-draft" element={<UserDraft />} />
              <Route path="/user/user-wishlist" element={<UserWishlist />} />
            </Route>
          </Route>

          {/* Authentication routes */}

          {/* ADMIN ROLE */}
          <Route
            path="/admin"
            element={
              <ProtectRole requiredRole={0}>
                <AdminLayout />
              </ProtectRole>
            }
          >
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route
              path="/admin/product-management"
              element={<ProductManage />}
            />
            <Route path="/admin/order-management" element={<OrderManage />} />
            <Route path="/admin/custom-management" element={<CustomManage />} />
            <Route
              path="/admin/customer-management"
              element={<CustomerManage />}
            />
            <Route path="/admin/settings" element={<Settings />} />
          </Route>
          <Route
            path="/login"
            element={
              <Protected token={getToken()}>
                <LoginPage />
              </Protected>
            }
          />
          <Route
            path="/sign-up"
            element={
              <Protected token={getToken()}>
                <RegisterPage />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

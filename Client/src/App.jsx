import { Routes, Route } from 'react-router-dom';
import CheckAuth from './components/common/check-auth';
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import AdminFeatures from "./pages/admin-view/features";
import ShoppingLayout from "./components/shopping-view/layout";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingAccount from "./pages/shopping-view/account";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingListing from "./pages/shopping-view/listing";
import PageNotFound from "./pages/not-found/index";
import UnAuthPage from "./pages/unauth-page/index";
import './App.css'
import { useSelector } from 'react-redux';

function App() {

  const { user, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/auth" element={           
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
          </CheckAuth>
        }>
          <Route path="login" element={<AuthLogin/>}/>
          <Route path="register" element={<AuthRegister/>}/>
        </Route>
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
          </CheckAuth>
        }>
          <Route path="dashboard" element={<AdminDashboard/>}/>
          <Route path="products" element={<AdminProducts/>}/>
          <Route path="orders" element={<AdminOrders/>}/>
          <Route path="features" element={<AdminFeatures/>}/>
        </Route>
        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout/>
            </CheckAuth>
        }>
          <Route path="home" element={<ShoppingHome/>}/>
          <Route path="listing" element={<ShoppingListing/>}/>
          <Route path="account" element={<ShoppingAccount/>}/>
          <Route path="checkout" element={<ShoppingCheckout/>}/>
        </Route>
        <Route path="/unauth-page" element={<UnAuthPage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default App;

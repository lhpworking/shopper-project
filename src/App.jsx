
import "antd/dist/antd.css";

import {
  Route,
  Routes
} from "react-router-dom";

import { ABOUT_PATH, ACCOUNT_ADDRESS_EDIT_PATH, ACCOUNT_ADDRESS_PATH, ACCOUNT_ORDERS_PATH, ACCOUNT_PATH, ACCOUNT_PAYMENT_EDIT_PATH, ACCOUNT_PAYMENT_PATH, ACCOUNT_PERSONAL_INFO_PATH, ACCOUNT_WISHLIST_PATH, AUTH_PATH, BLOG_PATH, BLOG_POST_PATH, CHECKOUT_PATH, COMING_SOON_PATH, CONTACT_PATH, FAQ_PATH, HOME_PATH, ORDER_COMPLETED_PATH, PRODUCT_CATEGORY_PATH, PRODUCT_DETAIL_PATH, SHOPPING_AND_RETURNS_PATH, SHOPPING_CART_PATH, SHOP_PATH, STORE_LOCATOR_PATH } from "./constants/path";
import MainLayout from "./layouts/MainLayout";
import ProfileLayout from "./layouts/ProfileLayout";
import Home from "./pages";
import About from "./pages/About";
import Order from "./pages/account";
import Address from "./pages/account/Address";
import AddressEdit from "./pages/account/AddressEdit";
import Orders from "./pages/account/Orders";
import Payment from "./pages/account/payment";
import PaymentEdit from "./pages/account/PaymentEdit";
import PersonalInfo from "./pages/account/PersonalInfo";
import WishList from "./pages/account/WishList";
import Auth from "./pages/Auth";
import BlogPost from "./pages/blog/BlogPost";
import Blog from "./pages/blog/index";
import Checkout from "./pages/Checkout";
import ComingSoon from "./pages/ComingSoon";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import NotFound from "./pages/NotFound";
import OrderCompleted from "./pages/OrderCompleted";
import Shop from "./pages/shop";
import ProductDetail from "./pages/shop/[slug]";
import ShoppingAndReturns from "./pages/ShoppingAndReturns";
import ShoppingCart from "./pages/ShoppingCart";
import StoreLocator from "./pages/StoreLocator";

function App() {
  return (
    <Routes>
      <Route element={ <MainLayout /> }>
        <Route index path={ HOME_PATH } element={ <Home /> } />
        {/* account */ }
        <Route element={ <ProfileLayout /> }>
          <Route index path={ ACCOUNT_PATH } element={ <Order /> } />
          <Route path={ ACCOUNT_ORDERS_PATH } element={ <Orders /> } />
          <Route path={ ACCOUNT_ADDRESS_PATH } element={ <Address /> } />
          <Route path={ ACCOUNT_ADDRESS_EDIT_PATH } element={ <AddressEdit /> } />
          <Route path={ ACCOUNT_PAYMENT_PATH } element={ <Payment /> } />
          <Route path={ ACCOUNT_PAYMENT_EDIT_PATH } element={ <PaymentEdit /> } />
          <Route path={ ACCOUNT_PERSONAL_INFO_PATH } element={ <PersonalInfo /> } />
          <Route path={ ACCOUNT_WISHLIST_PATH } element={ <WishList /> } />
        </Route>
        {/* blog */ }
        <Route path={ BLOG_PATH }>
          <Route index element={ <Blog /> } />
          <Route path={ BLOG_POST_PATH } element={ <BlogPost /> } />
        </Route>
        <Route path={ ABOUT_PATH } element={ <About /> } />
        <Route path={ AUTH_PATH } element={ <Auth /> } />
        <Route path={ CHECKOUT_PATH } element={ <Checkout /> } />
        <Route path={ COMING_SOON_PATH } element={ <ComingSoon /> } />
        <Route path={ CONTACT_PATH } element={ <Contact /> } />
        <Route path={ FAQ_PATH } element={ <Faq /> } />
        <Route path={ ORDER_COMPLETED_PATH } element={ <OrderCompleted /> } />
        <Route path={ SHOP_PATH } >
          <Route index element={ <Shop /> } />
          <Route path={ PRODUCT_DETAIL_PATH } element={ <ProductDetail /> } />
          <Route path={ PRODUCT_CATEGORY_PATH } element={ <Shop /> } />
        </Route>
        <Route path={ SHOPPING_CART_PATH } element={ <ShoppingCart /> } />
        <Route path={ SHOPPING_AND_RETURNS_PATH } element={ <ShoppingAndReturns /> } />
        <Route path={ STORE_LOCATOR_PATH } element={ <StoreLocator /> } />

        {/* error page */ }
        < Route path="*" element={ <NotFound /> } />
      </Route>
    </Routes >


  )
}

export default App

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../LoginPage/LoginPage";
import Register from "../RegisterPage/RegisterPage";
import Forgot from "../ForgotPage/ForgotPage";
import Setting from "../Setting/Setting";
import Notification from "../Notification/Notification";
import Sms from "../Sms/Sms";
import Dashboard from "../Dashboard/Dashboard";
import Statistics from "../Statistics/Statistics";
import Default from "../Default/Default";
import HotDishes from "../HotDishes/HotDishes";
import ColdDishes from "../ColdDishes/ColdDishes";
import Soup from "../Soup/Soup";
import Grill from "../Grill/Grill";
import Appetizer from "../Appetizer/Appetizer";
import Dessert from "../Dessert/Dessert";
import AppereanceSetting from "../AppereanceSetting/AppereanceSetting";
import Restaurant from "../RestaurantSetting/RestaurantSetting";
import Management from "../ManagementSetting/ManagementSetting";
import Notifications from "../NotificationSetting/NotificationSetting";
import Security from "../SecuritySetting/SecuritySetting";
import About from "../AboutSetting/AboutSetting";
import AddCards from "../AddCards/AddCards";
import ColdDishesEdit from "../ColdDishesEdit/ColdDishesEdit";
import SoupEdit from "../SoupEdit/SoupEdit";
import GrillEdit from "../GrillEdit/GrillEdit";
import AppetizerEdit from "../AppetizerEdit/AppetizerEdit";
import DessertEdit from "../DessertEdit/DessertEdit";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Default />}>
            <Route index element={<HotDishes />} />
            <Route path="cold-dishes" element={<ColdDishes />} />
            <Route path="soup" element={<Soup />} />
            <Route path="grill" element={<Grill />} />
            <Route path="appetizer" element={<Appetizer />} />
            <Route path="dessert" element={<Dessert />} />
          </Route>
          <Route path="setting" element={<Setting />}>
            <Route path="appereance-setting" element={<AppereanceSetting />} />
            <Route path="restaurant-setting" element={<Restaurant />} />
            <Route path="management-setting" element={<Management />}>
              <Route index element={<AddCards />} />
              <Route path="cold-dishes-setting" element={<ColdDishesEdit />} />
              <Route path="soup-setting" element={<SoupEdit />} />
              <Route path="grill-setting" element={<GrillEdit />} />
              <Route path="appetizer-setting" element={<AppetizerEdit />} />
              <Route path="dessert-setting" element={<DessertEdit />} />
            </Route>
            <Route path="notification-setting" element={<Notifications />} />
            <Route path="security-setting" element={<Security />} />
            <Route path="about-setting" element={<About />} />
          </Route>
          <Route path="notification" element={<Notification />} />
          <Route path="sms" element={<Sms />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="statistics" element={<Statistics />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </>
  );
};

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componets/Navbar/Navbar";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import Login from "./screens/Login screen/Login";
import About from "./screens/AboutUs/About-us";
import ContactUs from "./screens/Contact-Us/Contactus";
import UserDetailsScreen from "./screens/UserScreen/UserDetailsScreen";

import SignUp from "./screens/Signup screen/SignUp";
import Postdetails from "./screens/PostScreen/PostDetails";
import Update from "./screens/PostScreen/Update";
import FetchandDelete from "./screens/UserScreen/FetchandDelete";
import UpdateMyPersonalProfile from "./screens/UserScreen/UpdateMyPersonalProfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/p" element={<UpdateMyPersonalProfile />} />
          <Route path="/del" element={<FetchandDelete />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/About-us" element={<About />} />
          <Route path="/Contact us" element={<ContactUs />} />
          <Route
            path="/productDetails/:firstName/:_id"
            element={<UserDetailsScreen />}
          />
          <Route path="/Update/:firstName/:_id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

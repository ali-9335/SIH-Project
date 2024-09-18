
import Home from "./Home";
import Login from "./components/Register-Login/Login";
import Register from "./components/Register-Login/Register";

import BDashboard from "./BuyerDashboard";
import FDashboard from "./FarmerDashboard";
import SearchCrop from "./components/SearchCrop";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CropBidCard from "./components/CropBidCard";

import FarmerListing from "./components/FarmerListing";
import Nav from "./components/Nav";
import AddCrop from "./components/AddCrop";


export default function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/farmer-dashboard" element={<FDashboard />} />
        <Route path="/farmer-dashboard/addCrop" element={<AddCrop />} />

        <Route path="/buyer-dashboard" element={<BDashboard/>}/>
        <Route path="/buyer-dashboard/crop-form" element={<SearchCrop/>} />
        <Route path='/farmer-listing' element={<FarmerListing/>}/>

      </Routes>
    </Router>
  );
}
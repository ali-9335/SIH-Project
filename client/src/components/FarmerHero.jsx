// HeroSection.js
import React from 'react';
import backgroundimg from '../assets/background.jpg';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Default image URL for demonstration
const defaultHeroImage = 'https://img.freepik.com/free-photo/young-wheat-green-field_1268-29146.jpg';

export default function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#282828',
        height: '100vh',
        padding: '140px 0px',
        textAlign: 'center',
        display:"flex",
        flexDirection:"row",
        alignItems:"center"


        
      }}
    >
      <Container-fluid style={{margin:"0 auto"}}>
       
          <h1 style={{ fontSize:'4.5rem' , fontWeight:'700'}}>Welcome to Your Farming Hub</h1>
          <div className="w100" style={{width:"100%",display:"flex", justifyContent:"space-around"}}>
          <p style={{margin:"0 20px",width:"60%" , fontSize:"32px" , fontWeight:"500" }}>
            Discover the latest in agricultural technology, connect with buyers and sellers, and stay informed with the latest news and updates.
          </p>
          </div>
          <Button variant="primary" href="#register-crop"  style={{padding:"35px 80px",fontSize:"24px" , color:"white" , backgroundColor:"#282828" , border:"0" , marginTop:"50px",textTransform:"40px"}}> Register Your Crop</Button>
         
      </Container-fluid>
    </div>
  );
}
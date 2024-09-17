import { useState } from 'react';
import BidForm from "./BidForm";
import CropBidCard from "./CropBidCard";

// Sample default image URL
const defaultImage = 'https://via.placeholder.com/150';

export default function SearchCrop() {
  const [formData, setFormData] = useState({
    cropType: '',
    state: '',
    district: ''
  });
  const [cropData, setCropData] = useState([]);

  const handleStateChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      state: value,
      district: '' // Reset district when state changes
    });
  };

  // Handle form input change for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await fetch('https://retoolapi.dev/PibE2E/farmerdata');
      const data = await response.json();
      console.log('Fetched Data:', data); // Debugging line to check fetched data
      setCropData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <BidForm
        formData={formData}
        handleChange={handleChange}
        handleStateChange={handleStateChange}
        handleSubmit={handleSubmit}
      />
      <div style={{display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px"}}>
        {cropData.length > 0 && cropData
          .filter(crop => 
            (!formData.cropType || crop.crop === formData.cropType) &&
            (!formData.state || crop.state === formData.state) &&
            (!formData.district || crop.district === formData.district)
          )
          .map((crop, index) => (
            <CropBidCard
              key={index}
              farmerName={crop.farmerName}
              farmerLocation={`${crop.district}, ${crop.state}`}
              cropQuality={crop.quality}
              cropQuantity={crop.quantityInKG}
              cropBasePrice={crop.pricePerKG}
              cropImages={[defaultImage]} // Use default image for demo purposes
            />
          ))}
      </div>
    </div>
  );
}
import React, { useState } from 'react';

const CropBidCard = ({
  farmerName,
  farmerLocation,
  cropQuality,
  cropQuantity,
  cropBasePrice,
  cropImages
}) => {
  const [showImages, setShowImages] = useState(false);

  return (
    <div style={styles.card}>
      <h3>{farmerName}</h3>
      <p>{farmerLocation}</p>
      <p>Crop Quality: {cropQuality}</p>
      <p>Quantity: {cropQuantity} KG</p>
      <p>Base Price: ₹{cropBasePrice} per KG</p>
      <button className="btn bg-success " style={{margin:"10px"}} onClick={() => console.log('Place Bid')}>
        Place Bid
      </button>
      <button className="btn bg-warning" style={{margin:"10px"}} onClick={() => console.log('Counter Offer')}>
        Counter Offer
      </button>
      <button className="btn bg-info" style={{margin:"10px"}} onClick={() => setShowImages(true)}>
        View Images
      </button>

      {showImages && (
        <div style={styles.popup}>
          <span style={styles.close} onClick={() => setShowImages(false)}>&times;</span>
          {cropImages.map((image, index) => (
            <img key={index} src={image} alt={`Crop ${index}`} style={styles.image} />
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    position: 'relative',
  },
  popup: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.7)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    zIndex: 1000,
  },
  close: {
    position: 'absolute',
    top: '10px',
    right: '20px',
    fontSize: '24px',
    cursor: 'pointer',
  },
  image: {
    maxWidth: '80%',
    maxHeight: '80%',
    margin: '10px',
  },
};

export default CropBidCard;
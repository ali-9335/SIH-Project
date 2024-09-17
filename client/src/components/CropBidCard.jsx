// import { useState } from 'react';

// export default function CropBidCard({ farmerName, farmerLocation, cropQuality, cropQuantity, cropBasePrice, cropImages }) {
//   const [showPopup, setShowPopup] = useState(false);

//   // Toggle the popup to show or hide images
//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };

//   return (
//     <>
//       <div style={styles.cardContainer}>
//         <div style={styles.cardContent}>
//           <h3>Farmer: {farmerName}</h3>
//           <p>Location: {farmerLocation}</p>
//           <p>Crop Quality: {cropQuality}</p>
//           <p>Crop Quantity: {cropQuantity} tons</p>
//           <p>Base Price: ₹{cropBasePrice} per ton</p>

//           {/* Place Bid and Counter Offer Buttons */}
//           <div style={styles.btnGroup}>
//             <button style={styles.successBtn}>Place Bid</button>
//             <button style={styles.warningBtn}>Counter Offer</button>
//           </div>

//           {/* Show Crop Images Button */}
//           <button style={styles.infoBtn} onClick={togglePopup}>
//             Show Crop Images
//           </button>
//         </div>
//       </div>

//       {/* Popup for Crop Images */}
//       {showPopup && (
//         <div style={styles.popupOverlay}>
//           <div style={styles.popupContent}>
//             <span style={styles.closeButton} onClick={togglePopup}>
//               &times;
//             </span>
//             <h3>Crop Images</h3>
//             <div style={styles.imagesGrid}>
//               {cropImages.map((image, index) => (
//                 <img key={index} src={image} alt={`Crop ${index + 1}`} style={styles.cropImage} />
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// // Internal CSS as a JavaScript object
// const styles = {
//   cardContainer: {
//     width: '300px',
//     padding: '20px',
//     border: '1px solid #ddd',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     marginBottom: '20px',
//     backgroundColor: '#f9f9f9',
//   },
//   cardContent: {
//     textAlign: 'left',
//   },
//   btnGroup: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: '15px',
//   },
//   successBtn: {
//     padding: '10px',
//     border: 'none',
//     borderRadius: '5px',
//     color: 'white',
//     backgroundColor: '#28a745',
//     cursor: 'pointer',
//     fontSize: '14px',
//   },
//   warningBtn: {
//     padding: '10px',
//     border: 'none',
//     borderRadius: '5px',
//     color: 'white',
//     backgroundColor: '#ffc107',
//     cursor: 'pointer',
//     fontSize: '14px',
//   },
//   infoBtn: {
//     padding: '10px',
//     border: 'none',
//     borderRadius: '5px',
//     color: 'white',
//     backgroundColor: '#17a2b8',
//     cursor: 'pointer',
//     fontSize: '14px',
//     marginTop: '15px',
//   },
//   popupOverlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100vw',
//     height: '100vh',
//     background: 'rgba(0, 0, 0, 0.5)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 999,
//   },
//   popupContent: {
//     background: 'white',
//     padding: '20px',
//     borderRadius: '10px',
//     width: '50vw',
//     maxHeight: '80vh',
//     overflowY: 'auto',
//     position: 'relative',
//   },
//   closeButton: {
//     position: 'absolute',
//     top: '10px',
//     right: '20px',
//     fontSize: '24px',
//     cursor: 'pointer',
//   },
//   imagesGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
//     gap: '15px',
//   },
//   cropImage: {
//     width: '100%',
//     borderRadius: '10px',
//     objectFit: 'cover',
//   },
// };


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
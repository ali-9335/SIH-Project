// MarketTrends.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Line, Bar, Pie } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'chart.js/auto';
import './MarketTrends.css'; // Ensure you have this CSS file for custom styles

export default function MarketTrends() {
  // Dummy data for crops market trends
  const cropPrices = {
    wheat: [200, 210, 220, 215, 230, 240, 250],
    rice: [150, 160, 155, 165, 170, 180, 175],
    maize: [100, 110, 115, 120, 125, 130, 135],
  };

  // Data for Line chart (Price trend)
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Wheat Price',
        data: cropPrices.wheat,
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Rice Price',
        data: cropPrices.rice,
        borderColor: 'rgba(54,162,235,1)',
        fill: false,
      },
      {
        label: 'Maize Price',
        data: cropPrices.maize,
        borderColor: 'rgba(255,206,86,1)',
        fill: false,
      },
    ],
  };

  // Data for Bar chart (Current price comparison)
  const barData = {
    labels: ['Wheat', 'Rice', 'Maize'],
    datasets: [
      {
        label: 'Current Price',
        data: [
          cropPrices.wheat[cropPrices.wheat.length - 1], 
          cropPrices.rice[cropPrices.rice.length - 1], 
          cropPrices.maize[cropPrices.maize.length - 1]
        ],
        backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(54,162,235,0.6)', 'rgba(255,206,86,0.6)'],
      },
    ],
  };

  // Data for Pie chart (Market share of different crops)
  const pieData = {
    labels: ['Wheat', 'Rice', 'Maize'],
    datasets: [
      {
        label: 'Market Share',
        data: [45, 35, 20],
        backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(54,162,235,0.6)', 'rgba(255,206,86,0.6)'],
      },
    ],
  };

  return (
    <Container-fluid className="market-trends py-5">
      <h2 className="text-center mb-4">Current Market Price & Trends of Crops</h2>
      <Row className="mb-4">
        {/* Line Chart - Price Trends */}
        <Col md={6} className="mb-4">
          <h4 className="text-center mb-3">Price Trends Over Time</h4>
          <div className="chart-container">
            <Line data={lineData} />
          </div>
        </Col>

        {/* Bar Chart - Current Price */}
        <Col md={6} className="mb-4">
          <h4 className="text-center mb-3">Current Price Comparison</h4>
          <div className="chart-container">
            <Bar data={barData} />
          </div>
        </Col>
      </Row>

    </Container-fluid>
  );
}

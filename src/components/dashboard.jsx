import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="user-profile">
          <img src="user-avatar.jpg" alt="User Avatar" />
          <p>User Name</p>
        </div>
        <ul className="menu">
          <li>Home</li>
          <li>Orders</li>
          <li>Stocks</li>
          <li>Edit Orders</li>
          <li>Edit Stocks</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="summary-box">
          <div className="summary-item">
            <h2>Total Orders</h2>
            <p>100</p>
          </div>
          <div className="summary-item">
            <h2>Total Stocks</h2>
            <p>500</p>
          </div>
        </div>
        <div className="graph">
          {/* Add a graph here (e.g., using a chart library) */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

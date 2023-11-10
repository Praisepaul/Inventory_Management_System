import React, { useState } from 'react';
import './Buttons.css';
import { Link } from 'react-router-dom';

export default function Buttons() {

  const handleDeleteClick = () => {
    // You can implement your delete logic here

    // For demonstration purposes, let's show a success message
    alert("Order Deleted Successfully");

    // You can redirect or perform any other actions after successful deletion
  };

  return (
    <div>
      <Link to={'/addorder'}>
        <button2 id='b1'>ADD ORDER</button2>
      </Link>
      <Link to={'/editorder'}>
        <button2 id='b2'>EDIT ORDER</button2>
      </Link>
      <Link>
      <button2 id='b3' onClick={handleDeleteClick}>
        DELETE ORDER
      </button2>
</Link>
    </div>
  );
}

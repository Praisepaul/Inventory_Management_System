import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './addOrders.css';
import Navbar from '../StocksPage/Navbar';

const OrderForm = () => {
  const [productDetail, setProductDetail] = useState('');
  const [priceUnit, setPriceUnit] = useState('');
  const [quantity, setQuantity] = useState('');
  const [total, settotal] = useState('');

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!productDetail.trim()) {
      newErrors.productDetail = 'Product Detail is required';
    }
    if (!priceUnit.trim()) {
      newErrors.priceUnit = 'Price Unit is required';
    }
    if (!quantity.trim()) {
      newErrors.quantity = 'Quantity';
    }
    if (!total.trim()) {
      newErrors.total = 'Total';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Handle form submission logic here
      setShowAlert(true);
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    // Redirect to /stocks
  };

  return (
    <><Navbar /><div className="product-form-container">
          <h2>Add Orders</h2>
          <form onSubmit={handleSubmit} className="product-form">
              <label htmlFor="productDetail">Product Detail:</label>
              <input
                  type="text"
                  id="productDetail"
                  value={productDetail}
                  onChange={(e) => setProductDetail(e.target.value)} />
              {errors.productDetail && <span className="error">{errors.productDetail}</span>}

              <label htmlFor="priceUnit">Price Unit:</label>
              <input
                  type="text"
                  id="priceUnit"
                  value={priceUnit}
                  onChange={(e) => setPriceUnit(e.target.value)} />
              {errors.priceUnit && <span className="error">{errors.priceUnit}</span>}

              <label htmlFor="quantity">Quantity in Stock:</label>
              <input
                  type="text"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)} />
              {errors.quantity && <span className="error">{errors.quantity}</span>}

              <label htmlFor="total">Value stock in hand:</label>
              <input
                  type="text"
                  id="total"
                  value={total}
                  onChange={(e) => settotal(e.target.value)} />
              {errors.total && <span className="error">{errors.total}</span>}

              <button type="submit">Submit</button>
          </form>

          {showAlert && (
              <div className="success-alert">
                  <p>Order Added successfully!</p>
                  <Link to={'/orders'}>
                  <button onClick={handleAlertClose}>OK</button>
                  </Link>
              </div>
          )}
      </div></>
  );
};

export default OrderForm;

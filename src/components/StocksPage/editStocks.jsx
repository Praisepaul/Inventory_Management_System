import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './addStocks.css';
import Navbar from './Navbar';

const ProductEditForm = () => {
  const [productDetail, setProductDetail] = useState('');
  const [priceUnit, setPriceUnit] = useState('');
  const [quantityInStock, setQuantityInStock] = useState('');
  const [valueStockInHand, setValueStockInHand] = useState('');
  const [quantitySold, setQuantitySold] = useState('');

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
    if (!quantityInStock.trim()) {
      newErrors.quantityInStock = 'Quantity in Stock is required';
    }
    if (!valueStockInHand.trim()) {
      newErrors.valueStockInHand = 'Value stock in hand is required';
    }
    if (!quantitySold.trim()) {
      newErrors.quantitySold = 'Quantity sold is required';
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
          <h2>Edit Stocks</h2>
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

              <label htmlFor="quantityInStock">Quantity in Stock:</label>
              <input
                  type="text"
                  id="quantityInStock"
                  value={quantityInStock}
                  onChange={(e) => setQuantityInStock(e.target.value)} />
              {errors.quantityInStock && <span className="error">{errors.quantityInStock}</span>}

              <label htmlFor="valueStockInHand">Value stock in hand:</label>
              <input
                  type="text"
                  id="valueStockInHand"
                  value={valueStockInHand}
                  onChange={(e) => setValueStockInHand(e.target.value)} />
              {errors.valueStockInHand && <span className="error">{errors.valueStockInHand}</span>}

              <label htmlFor="quantitySold">Quantity sold:</label>
              <input
                  type="text"
                  id="quantitySold"
                  value={quantitySold}
                  onChange={(e) => setQuantitySold(e.target.value)} />
              {errors.quantitySold && <span className="error">{errors.quantitySold}</span>}

              <button type="submit">Save Edit</button>
          </form>

          {showAlert && (
              <div className="success-alert">
                  <p>Product edited successfully!</p>
                  <Link to={'/stocks'}>
                  <button onClick={handleAlertClose}>OK</button>
                  </Link>
              </div>
          )}
      </div></>
  );
};

export default ProductEditForm;

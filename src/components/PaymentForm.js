import React, { useState } from 'react';
import axios from 'axios';

function PaymentForm() {
  const [paymentData, setPaymentData] = useState({
    card_holder_name: '',
    card_number: '',
    expiration_date: '',
    cvv: '',
    amount: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8181/payments', paymentData);
      console.log('Payment submitted:', response.data);
    } catch (error) {
      console.error('Error submitting payment:', error);
    }
  };

  return (
    <div>
      <h2>Submit Payment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Card Holder Name:
          <input
            type="text"
            name="card_holder_name"
            value={paymentData.card_holder_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Card Number:
          <input
            type="text"
            name="card_number"
            value={paymentData.card_number}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Expiration Date:
          <input
            type="text"
            name="expiration_date"
            value={paymentData.expiration_date}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          CVV:
          <input
            type="text"
            name="cvv"
            value={paymentData.cvv}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type="text"
            name="amount"
            value={paymentData.amount}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Status:
          <input
            type="text"
            name="status"
            value={paymentData.status}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default PaymentForm;

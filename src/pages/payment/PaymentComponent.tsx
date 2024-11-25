import React, { useState } from 'react';
import { createOrder, verifyPayment } from '../../api/api'; // Assuming your API functions are imported from a file
import { OrderData, PaymentVerificationData } from './types'; // Define types for the order and payment data

const PaymentComponent = () => {
  // State to handle order and payment data
  const [orderData, setOrderData] = useState<OrderData>({ amount: 0, currency: 'USD' });
  const [paymentData, setPaymentData] = useState<PaymentVerificationData>({ orderId: '', paymentId: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Handle order creation
  const handleCreateOrder = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await createOrder(orderData);
      setSuccess('Order created successfully!');
      console.log(response.data);
    } catch (err) {
      setError('Failed to create order');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle payment verification
  const handleVerifyPayment = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await verifyPayment(paymentData);
      setSuccess('Payment verified successfully!');
      console.log(response.data);
    } catch (err) {
      setError('Failed to verify payment');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Payment Management</h1>

      {/* Order Creation Form */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Create Order</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Amount</label>
          <input
            type="number"
            value={orderData.amount}
            onChange={(e) => setOrderData({ ...orderData, amount: parseFloat(e.target.value) })}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter amount"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Currency</label>
          <input
            type="text"
            value={orderData.currency}
            onChange={(e) => setOrderData({ ...orderData, currency: e.target.value })}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter currency (e.g., USD)"
          />
        </div>
        <button
          onClick={handleCreateOrder}
          disabled={loading}
          className={`w-full p-2 mt-4 bg-blue-600 text-white rounded-md ${loading ? 'opacity-50' : ''}`}
        >
          {loading ? 'Processing...' : 'Create Order'}
        </button>
      </div>

      {/* Payment Verification Form */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Verify Payment</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Order ID</label>
          <input
            type="text"
            value={paymentData.orderId}
            onChange={(e) => setPaymentData({ ...paymentData, orderId: e.target.value })}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter order ID"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Payment ID</label>
          <input
            type="text"
            value={paymentData.paymentId}
            onChange={(e) => setPaymentData({ ...paymentData, paymentId: e.target.value })}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter payment ID"
          />
        </div>
        <button
          onClick={handleVerifyPayment}
          disabled={loading}
          className={`w-full p-2 mt-4 bg-green-600 text-white rounded-md ${loading ? 'opacity-50' : ''}`}
        >
          {loading ? 'Verifying...' : 'Verify Payment'}
        </button>
      </div>

      {/* Displaying success or error messages */}
      {error && <p className="text-red-600 mt-4">{error}</p>}
      {success && <p className="text-green-600 mt-4">{success}</p>}
    </div>
  );
};

export default PaymentComponent;

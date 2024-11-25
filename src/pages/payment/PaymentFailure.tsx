import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentFailure = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate('/dashboard/payment'); // Redirect to retry payment
  };

  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center py-12 px-6 sm:px-12">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 text-center">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Payment Failed!</h2>
        <p className="text-gray-600 mb-6">Unfortunately, there was an issue processing your payment. Please try again.</p>

        <button
          onClick={handleRetry}
          className="py-3 px-6 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Retry Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentFailure;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/dashboard'); // Redirect to dashboard or any other page
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center py-12 px-6 sm:px-12">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 text-center">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">Your payment has been processed successfully. Thank you for your purchase.</p>

        <button
          onClick={handleRedirect}
          className="py-3 px-6 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;

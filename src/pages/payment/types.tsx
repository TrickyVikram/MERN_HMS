// Type for Order Data (for creating an order)
export interface OrderData {
    amount: number;   // The amount for the order (e.g., 100, 50.5)
    currency: string; // The currency of the order (e.g., "USD", "INR")
  }
  
  // Type for Payment Verification Data (for verifying payment)
  export interface PaymentVerificationData {
    orderId: string;  // The order ID that was created
    paymentId: string; // The payment ID received after the transaction
  }
  
// // // import React, { useState } from 'react';
// // // import { loadStripe } from '@stripe/stripe-js';
// // // import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// // // const stripePromise = loadStripe('your-publishable-key-from-stripe');

// // // const PaymentForm = ({ bookingData, onPaymentSuccess }) => {
// // //   const stripe = useStripe();
// // //   const elements = useElements();
// // //   const [error, setError] = useState(null);
// // //   const [loading, setLoading] = useState(false);

// // //   const handleSubmit = async (event) => {
// // //     event.preventDefault();
// // //     setLoading(true);

// // //     if (!stripe || !elements) {
// // //       return;
// // //     }

// // //     const cardElement = elements.getElement(CardElement);

// // //     try {
// // //       const { paymentIntent, error } = await stripe.createPaymentIntent({
// // //         amount: bookingData.cartTotal * 100, // Stripe works with smallest currency unit
// // //         currency: 'usd',
// // //         payment_method: {
// // //           card: cardElement,
// // //         },
// // //         confirmation_method: 'manual',
// // //         confirm: true,
// // //       });

// // //       if (error) {
// // //         setError(`Payment failed: ${error.message}`);
// // //       } else if (paymentIntent.status === 'requires_action' || paymentIntent.status === 'requires_confirmation') {
// // //         const { error: confirmError } = await stripe.confirmCardPayment(paymentIntent.client_secret);
// // //         if (confirmError) {
// // //           setError(`Payment failed: ${confirmError.message}`);
// // //         } else {
// // //           onPaymentSuccess(paymentIntent);
// // //         }
// // //       } else {
// // //         onPaymentSuccess(paymentIntent);
// // //       }
// // //     } catch (error) {
// // //       setError(`Payment failed: ${error.message}`);
// // //     }

// // //     setLoading(false);
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit}>
// // //       <CardElement />
// // //       <button type="submit" disabled={!stripe || loading}>
// // //         {loading ? 'Processing...' : 'Pay Now'}
// // //       </button>
// // //       {error && <div>{error}</div>}
// // //     </form>
// // //   );
// // // };

// // // const Payment = ({ bookingData, onPaymentSuccess }) => (
// // //   <Elements stripe={stripePromise}>
// // //     <PaymentForm bookingData={bookingData} onPaymentSuccess={onPaymentSuccess} />
// // //   </Elements>
// // // );

// // // export default Payment;

// // // import React, { useState } from 'react';

// // // const PaymentModal = ({ onClose, onSuccess, amount }) => {
// // //   const [paymentMethod, setPaymentMethod] = useState('');

// // //   const handlePayment = () => {
// // //     // Mock payment processing
// // //     setTimeout(() => {
// // //       alert('Payment processed successfully!');
// // //       onSuccess();
// // //     }, 1000);
// // //   };

// // //   return (
// // //     <div className="payment-modal">
// // //       <div className="payment-modal-content">
// // //         <h4>Payment</h4>
// // //         <p>Total Amount: ₹ {amount.toLocaleString()}</p>

// // //         <div className="form-group">
// // //           <label htmlFor="payment-method">Select Payment Method:</label>
// // //           <select
// // //             id="payment-method"
// // //             className="form-control"
// // //             value={paymentMethod}
// // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // //           >
// // //             <option value="">Select</option>
// // //             <option value="credit-card">Credit Card</option>
// // //             <option value="debit-card">Debit Card</option>
// // //             <option value="net-banking">Net Banking</option>
// // //             <option value="upi">UPI</option>
// // //           </select>
// // //         </div>

// // //         <button className="btn btn-success" onClick={handlePayment}>
// // //           Pay Now
// // //         </button>
// // //         <button className="btn btn-secondary" onClick={onClose}>
// // //           Cancel
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PaymentModal;

// // // import React, { useState } from 'react';

// // // const PaymentModal = ({ onClose, onSuccess, amount }) => {
// // //   const [paymentMethod, setPaymentMethod] = useState('');

// // //   const handlePayment = () => {
// // //     // Mock payment processing
// // //     setTimeout(() => {
// // //       alert('Payment processed successfully!');
// // //       onSuccess();
// // //     }, 1000);
// // //   };

// // //   return (
// // //     <div className="payment-modal">
// // //       <div className="payment-modal-content">
// // //         <h4>Payment</h4>
// // //         <p>Total Amount: ₹ {amount.toLocaleString()}</p>

// // //         <div className="form-group">
// // //           <label htmlFor="payment-method">Select Payment Method:</label>
// // //           <select
// // //             id="payment-method"
// // //             className="form-control"
// // //             value={paymentMethod}
// // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // //           >
// // //             <option value="">Select</option>
// // //             <option value="credit-card">Credit Card</option>
// // //             <option value="debit-card">Debit Card</option>
// // //             <option value="net-banking">Net Banking</option>
// // //             <option value="upi">UPI</option>
// // //           </select>
// // //         </div>

// // //         <button className="btn btn-success" onClick={handlePayment}>
// // //           Pay Now
// // //         </button>
// // //         <button className="btn btn-secondary" onClick={onClose}>
// // //           Cancel
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PaymentModal;

// // // import React, { useState } from 'react';

// // // const PaymentModal = ({ onClose, onSuccess, amount }) => {
// // //   const [paymentMethod, setPaymentMethod] = useState('');
// // //   const [creditCardDetails, setCreditCardDetails] = useState({
// // //     cardNumber: '',
// // //     cardHolder: '',
// // //     expiryDate: '',
// // //     cvv: '',
// // //   });
// // //   const [debitCardDetails, setDebitCardDetails] = useState({
// // //     cardNumber: '',
// // //     cardHolder: '',
// // //     expiryDate: '',
// // //     cvv: '',
// // //   });
// // //   const [netBankingDetails, setNetBankingDetails] = useState({
// // //     bankName: '',
// // //     accountNumber: '',
// // //     ifscCode: '',
// // //   });
// // //   const [upiDetails, setUpiDetails] = useState({
// // //     upiId: '',
// // //   });

// // //   const handlePayment = () => {
// // //     // Mock payment processing
// // //     setTimeout(() => {
// // //       alert('Payment processed successfully!');
// // //       onSuccess();
// // //     }, 1000);
// // //   };

// // //   const handleInputChange = (setter, field, value) => {
// // //     setter((prevDetails) => ({
// // //       ...prevDetails,
// // //       [field]: value,
// // //     }));
// // //   };

// // //   return (
// // //     <div className="payment-modal">
// // //       <div className="payment-modal-content">
// // //         <h4>Payment</h4>
// // //         <p>Total Amount: ₹ {amount.toLocaleString()}</p>

// // //         <div className="form-group">
// // //           <label htmlFor="payment-method">Select Payment Method:</label>
// // //           <select
// // //             id="payment-method"
// // //             className="form-control"
// // //             value={paymentMethod}
// // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // //           >
// // //             <option value="">Select</option>
// // //             <option value="credit-card">Credit Card</option>
// // //             <option value="debit-card">Debit Card</option>
// // //             <option value="net-banking">Net Banking</option>
// // //             <option value="upi">UPI</option>
// // //           </select>
// // //         </div>

// // //         {paymentMethod === 'credit-card' && (
// // //           <div className="credit-card-details">
// // //             <div className="form-group">
// // //               <label htmlFor="card-number">Card Number:</label>
// // //               <input
// // //                 type="text"
// // //                 id="card-number"
// // //                 className="form-control"
// // //                 value={creditCardDetails.cardNumber}
// // //                 onChange={(e) => handleInputChange(setCreditCardDetails, 'cardNumber', e.target.value)}
// // //                 placeholder="Enter Card Number"
// // //               />
// // //             </div>
// // //             <div className="form-group">
// // //               <label htmlFor="card-holder">Card Holder:</label>
// // //               <input
// // //                 type="text"
// // //                 id="card-holder"
// // //                 className="form-control"
// // //                 value={creditCardDetails.cardHolder}
// // //                 onChange={(e) => handleInputChange(setCreditCardDetails, 'cardHolder', e.target.value)}
// // //                 placeholder="Enter Card Holder Name"
// // //               />
// // //             </div>
// // //             <div className="form-group">
// // //               <label htmlFor="expiry-date">Expiry Date:</label>
// // //               <input
// // //                 type="text"
// // //                 id="expiry-date"
// // //                 className="form-control"
// // //                 value={creditCardDetails.expiryDate}
// // //                 onChange={(e) => handleInputChange(setCreditCardDetails, 'expiryDate', e.target.value)}
// // //                 placeholder="MM/YY"
// // //               />
// // //             </div>
// // //             <div className="form-group">
// // //               <label htmlFor="cvv">CVV:</label>
// // //               <input
// // //                 type="text"
// // //                 id="cvv"
// // //                 className="form-control"
// // //                 value={creditCardDetails.cvv}
// // //                 onChange={(e) => handleInputChange(setCreditCardDetails, 'cvv', e.target.value)}
// // //                 placeholder="Enter CVV"
// // //               />
// // //             </div>
// // //           </div>
// // //         )}

// // //         {paymentMethod === 'debit-card' && (
// // //           <div className="debit-card-details">
// // //             <div className="form-group">
// // //               <label htmlFor="debit-card-number">Card Number:</label>
// // //               <input
// // //                 type="text"
// // //                 id="debit-card-number"
// // //                 className="form-control"
// // //                 value={debitCardDetails.cardNumber}
// // //                 onChange={(e) => handleInputChange(setDebitCardDetails, 'cardNumber', e.target.value)}
// // //                 placeholder="Enter Card Number"
// // //               />
// // //             </div>
// // //             <div className="form-group">
// // //               <label htmlFor="debit-card-holder">Card Holder:</label>
// // //               <input
// // //                 type="text"
// // //                 id="debit-card-holder"
// // //                 className="form-control"
// // //                 value={debitCardDetails.cardHolder}
// // //                 onChange={(e) => handleInputChange(setDebitCardDetails, 'cardHolder', e.target.value)}
// // //                 placeholder="Enter Card Holder Name"
// // //               />
// // //             </div>
// // //             <div className="form-group">
// // //               <label htmlFor="debit-expiry-date">Expiry Date:</label>
// // //               <input
// // //                 type="text"
// // //                 id="debit-expiry-date"
// // //                 className="form-control"
// // //                 value={debitCardDetails.expiryDate}
// // //                 onChange={(e) => handleInputChange(setDebitCardDetails, 'expiryDate', e.target.value)}
// // //                 placeholder="MM/YY"
// // //               />
// // //             </div>
// // //             <div className="form-group">
// // //               <label htmlFor="debit-cvv">CVV:</label>
// // //               <input
// // //                 type="text"
// // //                 id="debit-cvv"
// // //                 className="form-control"
// // //                 value={debitCardDetails.cvv}
// // //                 onChange={(e) => handleInputChange(setDebitCardDetails, 'cvv', e.target.value)}
// // //                 placeholder="Enter CVV"
// // //               />
// // //             </div>
// // //           </div>
// // //         )}

// // //         {paymentMethod === 'net-banking' && (
// // //           <div className="net-banking-details">
// // //             <div className="form-group">
// // //               <label htmlFor="bank-name">Bank Name:</label>
// // //               <input
// // //                 type="text"
// // //                 id="bank-name"
// // //                 className="form-control"
// // //                 value={netBankingDetails.bankName}
// // //                 onChange={(e) => handleInputChange(setNetBankingDetails, 'bankName', e.target.value)}
// // //                 placeholder="Enter Bank Name"
// // //               />
// // //             </div>
// // //             <div className="form-group">
// // //               <label htmlFor="account-number">Account Number:</label>
// // //               <input
// // //                 type="text"
// // //                 id="account-number"
// // //                 className="form-control"
// // //                 value={netBankingDetails.accountNumber}
// // //                 onChange={(e) => handleInputChange(setNetBankingDetails, 'accountNumber', e.target.value)}
// // //                 placeholder="Enter Account Number"
// // //               />
// // //             </div>
// // //             <div className="form-group">
// // //               <label htmlFor="ifsc-code">IFSC Code:</label>
// // //               <input
// // //                 type="text"
// // //                 id="ifsc-code"
// // //                 className="form-control"
// // //                 value={netBankingDetails.ifscCode}
// // //                 onChange={(e) => handleInputChange(setNetBankingDetails, 'ifscCode', e.target.value)}
// // //                 placeholder="Enter IFSC Code"
// // //               />
// // //             </div>
// // //           </div>
// // //         )}

// // //         {paymentMethod === 'upi' && (
// // //           <div className="upi-details">
// // //             <div className="form-group">
// // //               <label htmlFor="upi-id">UPI ID:</label>
// // //               <input
// // //                 type="text"
// // //                 id="upi-id"
// // //                 className="form-control"
// // //                 value={upiDetails.upiId}
// // //                 onChange={(e) => handleInputChange(setUpiDetails, 'upiId', e.target.value)}
// // //                 placeholder="Enter UPI ID"
// // //               />
// // //             </div>
// // //           </div>
// // //         )}

// // //         <button className="btn btn-success" onClick={handlePayment}>
// // //           Pay Now
// // //         </button>
// // //         <button className="btn btn-secondary" onClick={onClose}>
// // //           Cancel
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PaymentModal;


// // import React, { useState } from 'react';

// // const PaymentModal = ({ onClose, onSuccess, amount }) => {
// //   const [paymentMethod, setPaymentMethod] = useState('');
// //   const [creditCardDetails, setCreditCardDetails] = useState({
// //     cardNumber: '',
// //     cardHolder: '',
// //     expiryDate: '',
// //     cvv: '',
// //   });
// //   const [debitCardDetails, setDebitCardDetails] = useState({
// //     cardNumber: '',
// //     cardHolder: '',
// //     expiryDate: '',
// //     cvv: '',
// //   });
// //   const [netBankingDetails, setNetBankingDetails] = useState({
// //     bankName: '',
// //     accountNumber: '',
// //     ifscCode: '',
// //   });
// //   const [upiDetails, setUpiDetails] = useState({
// //     upiId: '',
// //   });

// //   const handlePayment = () => {
// //     // Mock payment processing
// //     setTimeout(() => {
// //       alert('Payment processed successfully!');
// //       onSuccess();
// //     }, 1000);
// //   };

// //   const handleInputChange = (setter, field, value) => {
// //     setter((prevDetails) => ({
// //       ...prevDetails,
// //       [field]: value,
// //     }));
// //   };

// //   return (
//     // <div className="payment-modal">
//     //   <div className="payment-modal-content">
//     //     <h4>Payment</h4>
//     //     <p>Total Amount: ₹ {amount.toLocaleString()}</p>

//     //     <div className="form-group">
//     //       <label htmlFor="payment-method">Select Payment Method:</label>
//     //       <select
//     //         id="payment-method"
//     //         className="form-control"
//     //         value={paymentMethod}
//     //         onChange={(e) => setPaymentMethod(e.target.value)}
//     //       >
//     //         <option value="">Select</option>
//     //         <option value="credit-card">Credit Card</option>
//     //         <option value="debit-card">Debit Card</option>
//     //         <option value="net-banking">Net Banking</option>
//     //         <option value="upi">UPI</option>
//     //       </select>
//     //     </div>

//     //     {paymentMethod === 'credit-card' && (
//     //       <div className="credit-card-details">
//     //         <div className="form-group">
//     //           <label htmlFor="card-number">Card Number:</label>
//     //           <input
//     //             type="text"
//     //             id="card-number"
//     //             className="form-control"
//     //             value={creditCardDetails.cardNumber}
//     //             onChange={(e) => handleInputChange(setCreditCardDetails, 'cardNumber', e.target.value)}
//     //             placeholder="Enter Card Number"
//     //           />
//     //         </div>
//     //         <div className="form-group">
//     //           <label htmlFor="card-holder">Card Holder:</label>
//     //           <input
//     //             type="text"
//     //             id="card-holder"
//     //             className="form-control"
//     //             value={creditCardDetails.cardHolder}
//     //             onChange={(e) => handleInputChange(setCreditCardDetails, 'cardHolder', e.target.value)}
//     //             placeholder="Enter Card Holder Name"
//     //           />
//     //         </div>
//     //         <div className="form-group">
//     //           <label htmlFor="expiry-date">Expiry Date:</label>
//     //           <input
//     //             type="text"
//     //             id="expiry-date"
//     //             className="form-control"
//     //             value={creditCardDetails.expiryDate}
//     //             onChange={(e) => handleInputChange(setCreditCardDetails, 'expiryDate', e.target.value)}
//     //             placeholder="MM/YY"
//     //           />
//     //         </div>
//     //         <div className="form-group">
//     //           <label htmlFor="cvv">CVV:</label>
//     //           <input
//     //             type="text"
//     //             id="cvv"
//     //             className="form-control"
//     //             value={creditCardDetails.cvv}
//     //             onChange={(e) => handleInputChange(setCreditCardDetails, 'cvv', e.target.value)}
//     //             placeholder="Enter CVV"
//     //           />
//     //         </div>
//     //       </div>
//     //     )}

//     //     {paymentMethod === 'debit-card' && (
//     //       <div className="debit-card-details">
//     //         <div className="form-group">
//     //           <label htmlFor="debit-card-number">Card Number:</label>
//     //           <input
//     //             type="text"
//     //             id="debit-card-number"
//     //             className="form-control"
//     //             value={debitCardDetails.cardNumber}
//     //             onChange={(e) => handleInputChange(setDebitCardDetails, 'cardNumber', e.target.value)}
//     //             placeholder="Enter Card Number"
//     //           />
//     //         </div>
//     //         <div className="form-group">
//     //           <label htmlFor="debit-card-holder">Card Holder:</label>
//     //           <input
//     //             type="text"
//     //             id="debit-card-holder"
//     //             className="form-control"
//     //             value={debitCardDetails.cardHolder}
//     //             onChange={(e) => handleInputChange(setDebitCardDetails, 'cardHolder', e.target.value)}
//     //             placeholder="Enter Card Holder Name"
//     //           />
//     //         </div>
//     //         <div className="form-group">
//     //           <label htmlFor="debit-expiry-date">Expiry Date:</label>
//     //           <input
//     //             type="text"
//     //             id="debit-expiry-date"
//     //             className="form-control"
//     //             value={debitCardDetails.expiryDate}
//     //             onChange={(e) => handleInputChange(setDebitCardDetails, 'expiryDate', e.target.value)}
//     //             placeholder="MM/YY"
//     //           />
//     //         </div>
//     //         <div className="form-group">
//     //           <label htmlFor="debit-cvv">CVV:</label>
//     //           <input
//     //             type="text"
//     //             id="debit-cvv"
//     //             className="form-control"
//     //             value={debitCardDetails.cvv}
//     //             onChange={(e) => handleInputChange(setDebitCardDetails, 'cvv', e.target.value)}
//     //             placeholder="Enter CVV"
//     //           />
//     //         </div>
//     //       </div>
//     //     )}

//     //     {paymentMethod === 'net-banking' && (
//     //       <div className="net-banking-details">
//     //         <div className="form-group">
//     //           <label htmlFor="bank-name">Bank Name:</label>
//     //           <input
//     //             type="text"
//     //             id="bank-name"
//     //             className="form-control"
//     //             value={netBankingDetails.bankName}
//     //             onChange={(e) => handleInputChange(setNetBankingDetails, 'bankName', e.target.value)}
//     //             placeholder="Enter Bank Name"
//     //           />
//     //         </div>
//     //         <div className="form-group">
//     //           <label htmlFor="account-number">Account Number:</label>
//     //           <input
//     //             type="text"
//     //             id="account-number"
//     //             className="form-control"
//     //             value={netBankingDetails.accountNumber}
//     //             onChange={(e) => handleInputChange(setNetBankingDetails, 'accountNumber', e.target.value)}
//     //             placeholder="Enter Account Number"
//     //           />
//     //         </div>
//     //         <div className="form-group">
//     //           <label htmlFor="ifsc-code">IFSC Code:</label>
//     //           <input
//     //             type="text"
//     //             id="ifsc-code"
//     //             className="form-control"
//     //             value={netBankingDetails.ifscCode}
//     //             onChange={(e) => handleInputChange(setNetBankingDetails, 'ifscCode', e.target.value)}
//     //             placeholder="Enter IFSC Code"
//     //           />
//     //         </div>
//     //       </div>
//     //     )}

//     //     {paymentMethod === 'upi' && (
//     //       <div className="upi-details">
//     //         <div className="form-group">
//     //           <label htmlFor="upi-id">UPI ID:</label>
//     //           <input
//     //             type="text"
//     //             id="upi-id"
//     //             className="form-control"
//     //             value={upiDetails.upiId}
//     //             onChange={(e) => handleInputChange(setUpiDetails, 'upiId', e.target.value)}
//     //             placeholder="Enter UPI ID"
//     //           />
//     //         </div>
//     //       </div>
//     //     )}

// //         <button className="btn btn-success" onClick={handlePayment}>
// //           Pay Now
// //         </button>
// //         <button className="btn btn-secondary" onClick={onClose}>
// //           Cancel
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PaymentModal;
// // PaymentModal.js
// import React from 'react';
// import { Modal, Button } from 'react-bootstrap';

// const PaymentModal = ({ show, onClose, onGeneratePDF, bookingData, cartTotal }) => {
//   const handlePayment = () => {
//     // Implement payment processing logic here
//     // Once payment is successful, generate the PDF invoice
//     onGeneratePDF(bookingData);
//     onClose();
//   };

//   return (
//     <Modal show={show} onHide={onClose} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>Payment</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Total Amount: ₹ {cartTotal.toLocaleString()}</h4>
//         {/* Add payment form or payment gateway integration here */}
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onClose}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={handlePayment}>
//           Make Payment
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default PaymentModal;

import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const PaymentModal = ({ show, onClose, onGeneratePDF, bookingData, cartTotal }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [creditCardDetails, setCreditCardDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });
  const [debitCardDetails, setDebitCardDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });
  const [netBankingDetails, setNetBankingDetails] = useState({
    bankName: '',
    accountNumber: '',
    ifscCode: '',
  });
  const [upiDetails, setUpiDetails] = useState({
    upiId: '',
  });

  const handleInputChange = (setter, field, value) => {
    setter(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handlePayment = () => {
    // Implement payment processing logic here
    // Once payment is successful, generate the PDF invoice
    onGeneratePDF(bookingData);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Payment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Total Amount: ₹ {cartTotal.toLocaleString()}</h4>
        <div className="form-group">
          <label htmlFor="payment-method">Select Payment Method:</label>
          <select
            id="payment-method"
            className="form-control"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select</option>
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
            <option value="net-banking">Net Banking</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        {paymentMethod === 'credit-card' && (
          <div className="credit-card-details">
            <div className="form-group">
              <label htmlFor="card-number">Card Number:</label>
              <input
                type="text"
                id="card-number"
                className="form-control"
                value={creditCardDetails.cardNumber}
                onChange={(e) => handleInputChange(setCreditCardDetails, 'cardNumber', e.target.value)}
                placeholder="Enter Card Number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="card-holder">Card Holder:</label>
              <input
                type="text"
                id="card-holder"
                className="form-control"
                value={creditCardDetails.cardHolder}
                onChange={(e) => handleInputChange(setCreditCardDetails, 'cardHolder', e.target.value)}
                placeholder="Enter Card Holder Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiry-date">Expiry Date:</label>
              <input
                type="text"
                id="expiry-date"
                className="form-control"
                value={creditCardDetails.expiryDate}
                onChange={(e) => handleInputChange(setCreditCardDetails, 'expiryDate', e.target.value)}
                placeholder="MM/YY"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                className="form-control"
                value={creditCardDetails.cvv}
                onChange={(e) => handleInputChange(setCreditCardDetails, 'cvv', e.target.value)}
                placeholder="Enter CVV"
              />
            </div>
          </div>
        )}

        {paymentMethod === 'debit-card' && (
          <div className="debit-card-details">
            <div className="form-group">
              <label htmlFor="debit-card-number">Card Number:</label>
              <input
                type="text"
                id="debit-card-number"
                className="form-control"
                value={debitCardDetails.cardNumber}
                onChange={(e) => handleInputChange(setDebitCardDetails, 'cardNumber', e.target.value)}
                placeholder="Enter Card Number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="debit-card-holder">Card Holder:</label>
              <input
                type="text"
                id="debit-card-holder"
                className="form-control"
                value={debitCardDetails.cardHolder}
                onChange={(e) => handleInputChange(setDebitCardDetails, 'cardHolder', e.target.value)}
                placeholder="Enter Card Holder Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="debit-expiry-date">Expiry Date:</label>
              <input
                type="text"
                id="debit-expiry-date"
                className="form-control"
                value={debitCardDetails.expiryDate}
                onChange={(e) => handleInputChange(setDebitCardDetails, 'expiryDate', e.target.value)}
                placeholder="MM/YY"
              />
            </div>
            <div className="form-group">
              <label htmlFor="debit-cvv">CVV:</label>
              <input
                type="text"
                id="debit-cvv"
                className="form-control"
                value={debitCardDetails.cvv}
                onChange={(e) => handleInputChange(setDebitCardDetails, 'cvv', e.target.value)}
                placeholder="Enter CVV"
              />
            </div>
          </div>
        )}

        {paymentMethod === 'net-banking' && (
          <div className="net-banking-details">
            <div className="form-group">
              <label htmlFor="bank-name">Bank Name:</label>
              <input
                type="text"
                id="bank-name"
                className="form-control"
                value={netBankingDetails.bankName}
                onChange={(e) => handleInputChange(setNetBankingDetails, 'bankName', e.target.value)}
                placeholder="Enter Bank Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="account-number">Account Number:</label>
              <input
                type="text"
                id="account-number"
                className="form-control"
                value={netBankingDetails.accountNumber}
                onChange={(e) => handleInputChange(setNetBankingDetails, 'accountNumber', e.target.value)}
                placeholder="Enter Account Number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="ifsc-code">IFSC Code:</label>
              <input
                type="text"
                id="ifsc-code"
                className="form-control"
                value={netBankingDetails.ifscCode}
                onChange={(e) => handleInputChange(setNetBankingDetails, 'ifscCode', e.target.value)}
                placeholder="Enter IFSC Code"
              />
            </div>
          </div>
        )}

        {paymentMethod === 'upi' && (
          <div className="upi-details">
            <div className="form-group">
              <label htmlFor="upi-id">UPI ID:</label>
              <input
                type="text"
                id="upi-id"
                className="form-control"
                value={upiDetails.upiId}
                onChange={(e) => handleInputChange(setUpiDetails, 'upiId', e.target.value)}
                placeholder="Enter UPI ID"
              />
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handlePayment}>
          Make Payment
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PaymentModal;

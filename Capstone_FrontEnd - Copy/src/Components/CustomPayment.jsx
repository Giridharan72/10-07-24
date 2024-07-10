// // import React, { useState } from 'react';

// // const CustomPaymentForm = ({ bookingData, onPaymentSuccess }) => {
// //   const [cardNumber, setCardNumber] = useState('');
// //   const [expiryDate, setExpiryDate] = useState('');
// //   const [cvc, setCvc] = useState('');
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     setLoading(true);

// //     // Simulate payment processing
// //     setTimeout(() => {
// //       if (cardNumber && expiryDate && cvc) {
// //         onPaymentSuccess({
// //           status: 'succeeded',
// //           amount: bookingData.cartTotal * 100,
// //         });
// //         setLoading(false);
// //       } else {
// //         setError('Payment failed: Invalid payment details');
// //         setLoading(false);
// //       }
// //     }, 2000);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <div className="form-group">
// //         <label htmlFor="cardNumber">Card Number</label>
// //         <input
// //           type="text"
// //           id="cardNumber"
// //           className="form-control"
// //           value={cardNumber}
// //           onChange={(e) => setCardNumber(e.target.value)}
// //           placeholder="1234 5678 9012 3456"
// //           required
// //         />
// //       </div>
// //       <div className="form-group">
// //         <label htmlFor="expiryDate">Expiry Date</label>
// //         <input
// //           type="text"
// //           id="expiryDate"
// //           className="form-control"
// //           value={expiryDate}
// //           onChange={(e) => setExpiryDate(e.target.value)}
// //           placeholder="MM/YY"
// //           required
// //         />
// //       </div>
// //       <div className="form-group">
// //         <label htmlFor="cvc">CVC</label>
// //         <input
// //           type="text"
// //           id="cvc"
// //           className="form-control"
// //           value={cvc}
// //           onChange={(e) => setCvc(e.target.value)}
// //           placeholder="CVC"
// //           required
// //         />
// //       </div>
// //       <button type="submit" className="btn btn-primary" disabled={loading}>
// //         {loading ? 'Processing...' : 'Pay Now'}
// //       </button>
// //       {error && <div className="error">{error}</div>}
// //     </form>
// //   );
// // };

// // const CustomPayment = ({ bookingData, onPaymentSuccess }) => (
// //   <div className="payment-container">
// //     <h2>Payment</h2>
// //     <CustomPaymentForm bookingData={bookingData} onPaymentSuccess={onPaymentSuccess} />
// //   </div>
// // );

// // export default CustomPayment;
// // import React, { useState } from 'react';
// // import jsPDF from 'jspdf';
// // import 'jspdf-autotable';
// // import { useLocation, useNavigate } from 'react-router-dom';

// // const CustomPayment = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const { bookingData } = location.state || {};
// //   const [cardDetails, setCardDetails] = useState({ cardNumber: '', expiryDate: '', cvv: '' });

// //   const handlePayment = async () => {
// //     // Implement your payment logic here
// //     // For example, you can validate card details and make API calls to process payment

// //     // Generate PDF after payment completion
// //     generatePDF();
// //   };

// //   const generatePDF = () => {
// //     const { customerName, email, address, selectedSeats, passenger_details, cartTotal } = bookingData;

// //     const doc = new jsPDF();
// //     const tableRows = [];

// //     // Add booking details to PDF
// //     doc.text(`Booking Details for ${customerName}`, 14, 10);
// //     doc.autoTable({
// //       startY: 20,
// //       head: [['Customer Name', 'Email', 'Address', 'Selected Seats', 'Passenger Details']],
// //       body: [[customerName, email, address, selectedSeats.join(', '), passenger_details.map(p => `${p.name} (${p.gender}, ${p.age})`).join(', ')]],
// //     });

// //     // Add payment details to PDF
// //     doc.text(`Payment Details`, 14, doc.autoTable.previous.finalY + 10);
// //     doc.autoTable({
// //       startY: doc.autoTable.previous.finalY + 20,
// //       head: [['Card Number', 'Expiry Date', 'CVV', 'Amount']],
// //       body: [[cardDetails.cardNumber, cardDetails.expiryDate, cardDetails.cvv, `₹ ${cartTotal.toLocaleString()}`]],
// //     });

// //     // Save or download PDF
// //     doc.save(`Booking-${customerName}.pdf`);
// //   };

// //   return (
// //     <div className="container">
// //       <h2 className="mb-4">Payment Details</h2>
// //       <div className="mb-3">
// //         <label className="form-label">Card Number</label>
// //         <input
// //           type="text"
// //           className="form-control"
// //           value={cardDetails.cardNumber}
// //           onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
// //         />
// //       </div>
// //       <div className="mb-3">
// //         <label className="form-label">Expiry Date</label>
// //         <input
// //           type="text"
// //           className="form-control"
// //           value={cardDetails.expiryDate}
// //           onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
// //         />
// //       </div>
// //       <div className="mb-3">
// //         <label className="form-label">CVV</label>
// //         <input
// //           type="text"
// //           className="form-control"
// //           value={cardDetails.cvv}
// //           onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
// //         />
// //       </div>
// //       <button className="btn btn-primary me-3" onClick={handlePayment}>
// //         Complete Payment
// //       </button>
// //     </div>
// //   );
// // };

// // export default CustomPayment;

// // import React, { useState } from 'react';
// // import jsPDF from 'jspdf';
// // import 'jspdf-autotable';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import "./CustomPayment"

// // const CustomPayment = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const { bookingData } = location.state || {};
// //   const [cardDetails, setCardDetails] = useState({ cardNumber: '', expiryDate: '', cvv: '' });

// //   const handlePayment = async () => {
// //     // Implement your payment logic here
// //     // For example, you can validate card details and make API calls to process payment

// //     // Generate PDF after payment completion
// //     generatePDF();
// //   };

// //   const generatePDF = () => {
// //     const { customerName, email, address, selectedSeats, passenger_details, cartTotal } = bookingData;

// //     const doc = new jsPDF();
// //     const tableRows = [];

// //     // Add booking details to PDF
// //     doc.text(`Booking Details for ${customerName}`, 14, 10);
// //     doc.autoTable({
// //       startY: 20,
// //       head: [['Customer Name', 'Email', 'Address', 'Selected Seats', 'Passenger Details']],
// //       body: [[customerName, email, address, selectedSeats.join(', '), passenger_details.map(p => `${p.name} (${p.gender}, ${p.age})`).join(', ')]],
// //     });

// //     // Add payment details to PDF
// //     doc.text(`Payment Details`, 14, doc.autoTable.previous.finalY + 10);
// //     doc.autoTable({
// //       startY: doc.autoTable.previous.finalY + 20,
// //       head: [['Card Number', 'Expiry Date', 'CVV', 'Amount']],
// //       body: [[cardDetails.cardNumber, cardDetails.expiryDate, cardDetails.cvv, `₹ ${cartTotal.toLocaleString()}`]],
// //     });

// //     // Save or download PDF
// //     doc.save(`Booking-${customerName}.pdf`);
// //   };

// //   return (
// //     <div className="container">
// //       <h2 className="mb-4">Payment Details</h2>
// //       <div className="row">
// //         <div className="col-md-6">
// //           <div className="form-group mb-3">
// //             <label className="form-label">Card Number</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               value={cardDetails.cardNumber}
// //               onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
// //             />
// //           </div>
// //         </div>
// //         <div className="col-md-3">
// //           <div className="form-group mb-3">
// //             <label className="form-label">Expiry Date</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               value={cardDetails.expiryDate}
// //               onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
// //             />
// //           </div>
// //         </div>
// //         <div className="col-md-3">
// //           <div className="form-group mb-3">
// //             <label className="form-label">CVV</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               value={cardDetails.cvv}
// //               onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
// //             />
// //           </div>
// //         </div>
// //       </div>
// //       <div className="text-center mt-4">
// //         <button className="btn btn-primary" onClick={handlePayment}>
// //           Pay ₹ {bookingData.cartTotal ? bookingData.cartTotal.toLocaleString() : 0}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CustomPayment;

// import React, { useState } from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './CustomPayment.css'; // Create a CSS file for styling

// const CustomPayment = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { bookingData } = location.state || {};
//   const [paymentInfo, setPaymentInfo] = useState({
//     firstName: '',
//     lastName: '',
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//   });
//   const [billingAddress, setBillingAddress] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     country: 'United States',
//     state: '',
//     postalCode: '',
//     address: '',
//     city: '',
//   });

//   const handlePayment = async () => {
//     // Implement your payment logic here
//     // For example, you can validate card details and make API calls to process payment

//     // Generate PDF after payment completion
//     generatePDF();
//   };

//   const generatePDF = () => {
//     const { customerName, email, address, selectedSeats, passenger_details, cartTotal } = bookingData;

//     const doc = new jsPDF();
//     const tableRows = [];

//     // Add booking details to PDF
//     doc.text(`Booking Details for ${customerName}`, 14, 10);
//     doc.autoTable({
//       startY: 20,
//       head: [['Customer Name', 'Email', 'Address', 'Selected Seats', 'Passenger Details']],
//       body: [[customerName, email, address, selectedSeats.join(', '), passenger_details.map(p => `${p.name} (${p.gender}, ${p.age})`).join(', ')]],
//     });

//     // Add payment details to PDF
//     doc.text(`Payment Details`, 14, doc.autoTable.previous.finalY + 10);
//     doc.autoTable({
//       startY: doc.autoTable.previous.finalY + 20,
//       head: [['Card Number', 'Expiry Date', 'CVV', 'Amount']],
//       body: [[paymentInfo.cardNumber, paymentInfo.expiryDate, paymentInfo.cvv, `₹ ${cartTotal.toLocaleString()}`]],
//     });

//     // Save or download PDF
//     doc.save(`Booking-${customerName}.pdf`);
//   };

//   return (
//     <div className="container">
//       <h2 className="mb-4">Payment Details</h2>
//       <div className="payment-info">
//         <div className="form-group">
//           <label>First Name</label>
//           <input
//             type="text"
//             value={paymentInfo.firstName}
//             onChange={(e) => setPaymentInfo({ ...paymentInfo, firstName: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Last Name</label>
//           <input
//             type="text"
//             value={paymentInfo.lastName}
//             onChange={(e) => setPaymentInfo({ ...paymentInfo, lastName: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Card Number</label>
//           <input
//             type="text"
//             value={paymentInfo.cardNumber}
//             onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Expiration Date</label>
//           <input
//             type="text"
//             value={paymentInfo.expiryDate}
//             onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>CVV</label>
//           <input
//             type="text"
//             value={paymentInfo.cvv}
//             onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
//           />
//         </div>
//       </div>

//       <h2 className="mb-4">Billing Address</h2>
//       <div className="billing-address">
//         <div className="form-group">
//           <label>First Name</label>
//           <input
//             type="text"
//             value={billingAddress.firstName}
//             onChange={(e) => setBillingAddress({ ...billingAddress, firstName: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Last Name</label>
//           <input
//             type="text"
//             value={billingAddress.lastName}
//             onChange={(e) => setBillingAddress({ ...billingAddress, lastName: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Email Address</label>
//           <input
//             type="email"
//             value={billingAddress.email}
//             onChange={(e) => setBillingAddress({ ...billingAddress, email: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Phone Number</label>
//           <input
//             type="tel"
//             value={billingAddress.phone}
//             onChange={(e) => setBillingAddress({ ...billingAddress, phone: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Country</label>
//           <input
//             type="text"
//             value={billingAddress.country}
//             readOnly
//           />
//         </div>
//         <div className="form-group">
//           <label>State/Province</label>
//           <input
//             type="text"
//             value={billingAddress.state}
//             onChange={(e) => setBillingAddress({ ...billingAddress, state: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Postal Code</label>
//           <input
//             type="text"
//             value={billingAddress.postalCode}
//             onChange={(e) => setBillingAddress({ ...billingAddress, postalCode: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Address</label>
//           <input
//             type="text"
//             value={billingAddress.address}
//             onChange={(e) => setBillingAddress({ ...billingAddress, address: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>City</label>
//           <input
//             type="text"
//             value={billingAddress.city}
//             onChange={(e) => setBillingAddress({ ...billingAddress, city: e.target.value })}
//           />
//         </div>
//       </div>

//       <div className="text-center mt-4">
//         <button className="btn btn-primary" onClick={handlePayment}>
//           Pay ₹ {bookingData?.cartTotal ? bookingData.cartTotal.toLocaleString() : 0}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomPayment;

// import React, { useState } from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './CustomPayment.css';

// const CustomPayment = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { bookingData } = location.state || {};
//   const [paymentInfo, setPaymentInfo] = useState({
//     firstName: '',
//     lastName: '',
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//   });
//   const [billingAddress, setBillingAddress] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     country: 'United States',
//     state: '',
//     postalCode: '',
//     address: '',
//     city: '',
//   });

//   const handlePayment = async () => {
//     // Implement your payment logic here
//     // For example, you can validate card details and make API calls to process payment

//     // Generate PDF after payment completion
//     generatePDF();
//   };

//   const generatePDF = () => {
//     const { customerName, email, address, selectedSeats, passenger_details, cartTotal } = bookingData;

//     const doc = new jsPDF();
//     const tableRows = [];

//     // Add booking details to PDF
//     doc.text(`Booking Details for ${customerName}`, 14, 10);
//     doc.autoTable({
//       startY: 20,
//       head: [['Customer Name', 'Email', 'Address', 'Selected Seats', 'Passenger Details']],
//       body: [[customerName, email, address, selectedSeats.join(', '), passenger_details.map(p => `${p.name} (${p.gender}, ${p.age})`).join(', ')]],
//     });

//     // Add payment details to PDF
//     doc.text(`Payment Details`, 14, doc.autoTable.previous.finalY + 10);
//     doc.autoTable({
//       startY: doc.autoTable.previous.finalY + 20,
//       head: [['Card Number', 'Expiry Date', 'CVV', 'Amount']],
//       body: [[paymentInfo.cardNumber, paymentInfo.expiryDate, paymentInfo.cvv, `₹ ${cartTotal.toLocaleString()}`]],
//     });

//     // Save or download PDF
//     doc.save(`Booking-${customerName}.pdf`);
//   };

//   return (
//     <div className="container">
//       <h2 className="mb-4">Payment Details</h2>
//       <div className="payment-info">
//         <div className="form-group">
//           <label>First Name</label>
//           <input
//             type="text"
//             value={paymentInfo.firstName}
//             onChange={(e) => setPaymentInfo({ ...paymentInfo, firstName: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Last Name</label>
//           <input
//             type="text"
//             value={paymentInfo.lastName}
//             onChange={(e) => setPaymentInfo({ ...paymentInfo, lastName: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Card Number</label>
//           <input
//             type="text"
//             value={paymentInfo.cardNumber}
//             onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Expiration Date</label>
//           <input
//             type="text"
//             value={paymentInfo.expiryDate}
//             placeholder="MM / YY"
//             onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>CVV</label>
//           <input
//             type="text"
//             value={paymentInfo.cvv}
//             onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
//           />
//         </div>
//       </div>

//       <h2 className="mb-4">Billing Address</h2>
//       <div className="billing-address">
//         <div className="form-group">
//           <label>First Name</label>
//           <input
//             type="text"
//             value={billingAddress.firstName}
//             onChange={(e) => setBillingAddress({ ...billingAddress, firstName: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Last Name</label>
//           <input
//             type="text"
//             value={billingAddress.lastName}
//             onChange={(e) => setBillingAddress({ ...billingAddress, lastName: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Email Address</label>
//           <input
//             type="email"
//             value={billingAddress.email}
//             onChange={(e) => setBillingAddress({ ...billingAddress, email: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Phone Number</label>
//           <input
//             type="tel"
//             value={billingAddress.phone}
//             onChange={(e) => setBillingAddress({ ...billingAddress, phone: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Country</label>
//           <input
//             type="text"
//             value={billingAddress.country}
//             readOnly
//           />
//         </div>
//         <div className="form-group">
//           <label>State/Province</label>
//           <input
//             type="text"
//             value={billingAddress.state}
//             onChange={(e) => setBillingAddress({ ...billingAddress, state: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Postal Code</label>
//           <input
//             type="text"
//             value={billingAddress.postalCode}
//             onChange={(e) => setBillingAddress({ ...billingAddress, postalCode: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Address</label>
//           <input
//             type="text"
//             value={billingAddress.address}
//             onChange={(e) => setBillingAddress({ ...billingAddress, address: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>City</label>
//           <input
//             type="text"
//             value={billingAddress.city}
//             onChange={(e) => setBillingAddress({ ...billingAddress, city: e.target.value })}
//           />
//         </div>
//       </div>

//       <div className="text-center mt-4">
//         <button className="btn btn-primary" onClick={handlePayment}>
//           Pay ₹ {bookingData?.cartTotal ? bookingData.cartTotal.toLocaleString() : 0}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomPayment;

// import React, { useState } from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './CustomPayment.css';

// const CustomPayment = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { bookingData } = location.state || {};
//   const [paymentInfo, setPaymentInfo] = useState({
//     firstName: '',
//     lastName: '',
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//   });
//   const [billingAddress, setBillingAddress] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     country: 'United States',
//     state: '',
//     postalCode: '',
//     address: '',
//     city: '',
//   });

//   const handlePayment = async () => {
//     // Implement your payment logic here
//     // For example, you can validate card details and make API calls to process payment

//     // Generate PDF after payment completion
//     generatePDF();
//   };

//   const generatePDF = () => {
//     const { customerName, email, address, selectedSeats, passenger_details, cartTotal } = bookingData;

//     const doc = new jsPDF();
//     const tableRows = [];

//     // Add booking details to PDF
//     doc.text(`Booking Details for ${customerName}`, 14, 10);
//     doc.autoTable({
//       startY: 20,
//       head: [['Customer Name', 'Email', 'Address', 'Selected Seats', 'Passenger Details']],
//       body: [[customerName, email, address, selectedSeats.join(', '), passenger_details.map(p => `${p.name} (${p.gender}, ${p.age})`).join(', ')]],
//     });

//     // Add payment details to PDF
//     doc.text(`Payment Details`, 14, doc.autoTable.previous.finalY + 10);
//     doc.autoTable({
//       startY: doc.autoTable.previous.finalY + 20,
//       head: [['Card Number', 'Expiry Date', 'CVV', 'Amount']],
//       body: [[paymentInfo.cardNumber, paymentInfo.expiryDate, paymentInfo.cvv, `₹ ${cartTotal.toLocaleString()}`]],
//     });

//     // Save or download PDF
//     doc.save(`Booking-${customerName}.pdf`);
//   };

//   return (
//     <div className="container">
//       <h2 className="mb-4 text-center">Payment Details</h2>
//       <div className="payment-form">
//         <div className="form-group">
//           <label>First Name</label>
//           <input
//             type="text"
//             value={paymentInfo.firstName}
//             onChange={(e) => setPaymentInfo({ ...paymentInfo, firstName: e.target.value })}
//             placeholder="Enter your first name"
//           />
//         </div>
//         <div className="form-group">
//           <label>Last Name</label>
//           <input
//             type="text"
//             value={paymentInfo.lastName}
//             onChange={(e) => setPaymentInfo({ ...paymentInfo, lastName: e.target.value })}
//             placeholder="Enter your last name"
//           />
//         </div>
//         <div className="form-group">
//           <label>Card Number</label>
//           <input
//             type="text"
//             value={paymentInfo.cardNumber}
//             onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
//             placeholder="1234 5678 9012 3456"
//           />
//         </div>
//         <div className="form-group">
//           <label>Expiration Date</label>
//           <input
//             type="text"
//             value={paymentInfo.expiryDate}
//             placeholder="MM / YY"
//             onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>CVV</label>
//           <input
//             type="text"
//             value={paymentInfo.cvv}
//             onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
//             placeholder="123"
//           />
//         </div>
//       </div>

//       <h2 className="mb-4 text-center">Billing Address</h2>
//       <div className="billing-address">
//         <div className="form-group">
//           <label>First Name</label>
//           <input
//             type="text"
//             value={billingAddress.firstName}
//             onChange={(e) => setBillingAddress({ ...billingAddress, firstName: e.target.value })}
//             placeholder="Enter your first name"
//           />
//         </div>
//         <div className="form-group">
//           <label>Last Name</label>
//           <input
//             type="text"
//             value={billingAddress.lastName}
//             onChange={(e) => setBillingAddress({ ...billingAddress, lastName: e.target.value })}
//             placeholder="Enter your last name"
//           />
//         </div>
//         <div className="form-group">
//           <label>Email Address</label>
//           <input
//             type="email"
//             value={billingAddress.email}
//             onChange={(e) => setBillingAddress({ ...billingAddress, email: e.target.value })}
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="form-group">
//           <label>Phone Number</label>
//           <input
//             type="tel"
//             value={billingAddress.phone}
//             onChange={(e) => setBillingAddress({ ...billingAddress, phone: e.target.value })}
//             placeholder="Enter your phone number"
//           />
//         </div>
//         <div className="form-group">
//           <label>Country</label>
//           <input
//             type="text"
//             value={billingAddress.country}
//             readOnly
//           />
//         </div>
//         <div className="form-group">
//           <label>State/Province</label>
//           <input
//             type="text"
//             value={billingAddress.state}
//             onChange={(e) => setBillingAddress({ ...billingAddress, state: e.target.value })}
//             placeholder="Enter your state/province"
//           />
//         </div>
//         <div className="form-group">
//           <label>Postal Code</label>
//           <input
//             type="text"
//             value={billingAddress.postalCode}
//             onChange={(e) => setBillingAddress({ ...billingAddress, postalCode: e.target.value })}
//             placeholder="Enter your postal code"
//           />
//         </div>
//         <div className="form-group">
//           <label>Address</label>
//           <input
//             type="text"
//             value={billingAddress.address}
//             onChange={(e) => setBillingAddress({ ...billingAddress, address: e.target.value })}
//             placeholder="Enter your address"
//           />
//         </div>
//         <div className="form-group">
//           <label>City</label>
//           <input
//             type="text"
//             value={billingAddress.city}
//             onChange={(e) => setBillingAddress({ ...billingAddress, city: e.target.value })}
//             placeholder="Enter your city"
//           />
//         </div>
//       </div>

//       <div className="summary">
//         <h3>Booking Summary</h3>
//         <p>Customer Name: {bookingData?.customerName}</p>
//         <p>Selected Seats: {bookingData?.selectedSeats.join(', ')}</p>
//         <p>Total Amount: ₹ {bookingData?.cartTotal.toLocaleString()}</p>
//       </div>

//       <div className="text-center mt-4">
//         <button className="btn btn-primary" onClick={handlePayment}>
//           Pay ₹ {bookingData?.cartTotal ? bookingData.cartTotal.toLocaleString() : 0}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomPayment;

import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useLocation, useNavigate } from 'react-router-dom';
import './CustomPayment.css';
import InputMask from 'react-input-mask';

const CustomPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingData } = location.state || {};
  const [paymentInfo, setPaymentInfo] = useState({
    firstName: '',
    lastName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [billingAddress, setBillingAddress] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'United States',
    state: '',
    postalCode: '',
    address: '',
    city: '',
  });

  const handlePayment = async () => {
    // Implement your payment logic here
    // For example, you can validate card details and make API calls to process payment

    // Generate PDF after payment completion
    generatePDF();
  };

  const generatePDF = () => {
    const { customerName, email, address, selectedSeats, passenger_details, cartTotal } = bookingData;

    const doc = new jsPDF();
    const tableRows = [];

    // Add booking details to PDF
    doc.text(`Booking Details for ${customerName}`, 14, 10);
    doc.autoTable({
      startY: 20,
      head: [['Customer Name', 'Email', 'Address', 'Selected Seats', 'Passenger Details']],
      body: [[customerName, email, address, selectedSeats.join(', '), passenger_details.map(p => `${p.name} (${p.gender}, ${p.age})`).join(', ')]],
    });

    // Add payment details to PDF
    doc.text(`Payment Details`, 14, doc.autoTable.previous.finalY + 10);
    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 20,
      head: [['Card Number', 'Expiry Date', 'CVV', 'Amount']],
      body: [[paymentInfo.cardNumber, paymentInfo.expiryDate, paymentInfo.cvv, `₹ ${cartTotal.toLocaleString()}`]],
    });

    // Save or download PDF
    doc.save(`Booking-${customerName}.pdf`);
  };

  return (
    <div className="container">
      <h2 className="mb-4">Payment Details</h2>
      <div className="payment-form">
        <div className="form-group">
          <InputMask
            mask="9999 9999 9999 9999"
            value={paymentInfo.cardNumber}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
          >
            {() => (
              <input
                type="text"
                placeholder=" "
              />
            )}
          </InputMask>
          <label>Card Number</label>
        </div>
        <div className="form-group">
          <InputMask
            mask="99/99"
            value={paymentInfo.expiryDate}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })}
          >
            {() => (
              <input
                type="text"
                placeholder=" "
              />
            )}
          </InputMask>
          <label>Expiration Date (MM/YY)</label>
        </div>
        <div className="form-group">
          <InputMask
            mask="999"
            value={paymentInfo.cvv}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
          >
            {() => (
              <input
                type="text"
                placeholder=" "
              />
            )}
          </InputMask>
          <label>CVV</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            value={paymentInfo.firstName}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, firstName: e.target.value })}
            placeholder=" "
          />
          <label>First Name</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            value={paymentInfo.lastName}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, lastName: e.target.value })}
            placeholder=" "
          />
          <label>Last Name</label>
        </div>
      </div>

      
      <div className="summary">
        <h3>Booking Summary</h3>
        <p><strong>Customer Name:</strong> {bookingData?.customerName}</p>
        <p><strong>Email:</strong> {bookingData?.email}</p>
        <p><strong>Address:</strong> {bookingData?.address}</p>
        <p><strong>Selected Seats:</strong> {bookingData?.selectedSeats.join(', ')}</p>
        <p><strong>Passenger Details:</strong> {bookingData?.passenger_details.map(p => `${p.name} (${p.gender}, ${p.age})`).join(', ')}</p>
        <p><strong>Total Amount:</strong> ₹ {bookingData?.cartTotal ? bookingData.cartTotal.toLocaleString() : 0}</p>
      </div>

      <div className="text-center mt-4">
        <button className="btn" onClick={handlePayment}>
          Pay ₹ {bookingData?.cartTotal ? bookingData.cartTotal.toLocaleString() : 0}
        </button>
      </div>
    </div>
  );
};

export default CustomPayment;

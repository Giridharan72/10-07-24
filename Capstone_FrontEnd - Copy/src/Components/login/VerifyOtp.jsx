// // // // VerifyOtp.jsx
// // // import React, { useState } from "react";
// // // import { Link, Navigate } from "react-router-dom";

// // // const VerifyOtp = () => {
// // //   const [otpData, setOtpData] = useState({
// // //     otp: "",
// // //     roleName: "",
// // //     age: "",
// // //     gender: "",
// // //     companyName: "",
// // //     licenceNumber: "",
// // //     address1: "",
// // //     address2: "",
// // //     postalCode: "",
// // //   });
// // //   const [otpVerified, setOtpVerified] = useState(false);

// // //   const handleOtpChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setOtpData({
// // //       ...otpData,
// // //       [name]: value,
// // //     });
// // //   };

// // //   const handleOtpSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await fetch(`http://localhost:3000/register/verifyOtp`, {
// // //         method: "POST",
// // //         body: JSON.stringify({
// // //           email: localStorage.getItem('email'),
// // //           otp: otpData.otp,
// // //           role: otpData.roleName,
// // //           age: otpData.age,
// // //           gender: otpData.gender,
// // //           companyName: otpData.companyName,
// // //           licenceNumber: otpData.licenceNumber,
// // //           address1: otpData.address1,
// // //           address2: otpData.address2,
// // //           postalCode: otpData.postalCode,
// // //         }),
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //       });
// // //       if (response.status === 200) {
// // //         alert("OTP verified successfully. You can now log in.");
// // //         setOtpVerified(true);  // Update state to indicate OTP verification success
// // //       } else {
// // //         alert("Invalid OTP. Please try again.");
// // //       }
// // //     } catch (err) {
// // //       console.log(err);
// // //       alert("Error while verifying OTP");
// // //     }
// // //   };

// // //   if (otpVerified) {
// // //     return <Navigate to='/login' replace />;
// // //   }

// // //   return (
// // //     <div
// // //       style={{
// // //         backgroundImage: 'url("/highway.jpg")',
// // //         backgroundSize: 'cover',
// // //         backgroundPosition: 'center',
// // //         minHeight: '100vh',
// // //         backgroundColor: '#d1e0e0', // Fallback color if image fails to load
// // //       }}
// // //     >
// // //       <nav className="navbar navbar-expand-lg " variant="dark" style={{  width: '100%', backgroundColor: ' #334d4d', position: 'fixed', zIndex: '110', top: '0' }}>
// // //         <div className="container-fluid">
// // //           <h2 className="navbar-brand" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#141f1f' }}>JourneyJet Bus Booking</h2>
// // //           <div className="ml-auto">
// // //             <Link to='/login' className="btn btn-light" style={{ marginRight: '10px' }}>Log In</Link>
// // //             <Link to='/register' className="btn btn-light">Sign Up</Link>
// // //           </div>
// // //         </div>
// // //       </nav>

// // //       <div className="container mt-5">
// // //         <div className="row justify-content-center mt-5">
// // //           <div className="col-md-6">
// // //             <div className="card transparent-form" style={{ borderRadius: '8px' }}>
// // //               <div className="card-body">
// // //                 <h3 className="card-title mb-4 text-center">Verify OTP</h3>
// // //                 <form onSubmit={handleOtpSubmit}>
// // //                   <div className="form-group mb-3">
// // //                     <label htmlFor="otp">OTP:</label>
// // //                     <input
// // //                       type="text"
// // //                       className="form-control"
// // //                       id="otp"
// // //                       name="otp"
// // //                       value={otpData.otp}
// // //                       onChange={handleOtpChange}
// // //                       required
// // //                     />
// // //                   </div>
// // //                   <div className="form-group mb-3">
// // //                     <label htmlFor="roleName">Role:</label>
// // //                     <select
// // //                       className="form-control"
// // //                       id="roleName"
// // //                       name="roleName"
// // //                       value={otpData.roleName}
// // //                       onChange={handleOtpChange}
// // //                       required
// // //                     >
// // //                       <option value="user">User</option>
// // //                       <option value="admin">Admin</option>
// // //                     </select>
// // //                   </div>
// // //                   <div className="form-group mb-3">
// // //                     <label htmlFor="companyName">Company Name:</label>
// // //                     <input
// // //                       type="text"
// // //                       className="form-control"
// // //                       id="companyName"
// // //                       name="companyName"
// // //                       value={otpData.companyName}
// // //                       onChange={handleOtpChange}
// // //                       required
// // //                     />
// // //                   </div>
// // //                   <div className="form-group mb-3">
// // //                     <label htmlFor="licenceNumber">Licence Number:</label>
// // //                     <input
// // //                       type="text"
// // //                       className="form-control"
// // //                       id="licenceNumber"
// // //                       name="licenceNumber"
// // //                       value={otpData.licenceNumber}
// // //                       onChange={handleOtpChange}
// // //                       required
// // //                     />
// // //                   </div>
// // //                   <div className="form-group mb-3">
// // //                     <label htmlFor="address1">Address Line 1:</label>
// // //                     <input
// // //                       type="text"
// // //                       className="form-control"
// // //                       id="address1"
// // //                       name="address1"
// // //                       value={otpData.address1}
// // //                       onChange={handleOtpChange}
// // //                       required
// // //                     />
// // //                   </div>
// // //                   <div className="form-group mb-3">
// // //                     <label htmlFor="address2">Address Line 2:</label>
// // //                     <input
// // //                       type="text"
// // //                       className="form-control"
// // //                       id="address2"
// // //                       name="address2"
// // //                       value={otpData.address2}
// // //                       onChange={handleOtpChange}
// // //                       required
// // //                     />
// // //                   </div>
// // //                   <div className="form-group mb-3">
// // //                     <label htmlFor="postalCode">Postal Code:</label>
// // //                     <input
// // //                       type="text"
// // //                       className="form-control"
// // //                       id="postalCode"
// // //                       name="postalCode"
// // //                       value={otpData.postalCode}
// // //                       onChange={handleOtpChange}
// // //                       required
// // //                     />
// // //                   </div>
// // //                   <button type="submit" className="btn btn-primary w-100 mt-3">
// // //                     Verify OTP
// // //                   </button>
// // //                 </form>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default VerifyOtp;

// // // VerifyOtp.jsx
// // // VerifyOtp.jsx
// // import React, { useState } from "react";
// // import { Link, Navigate } from "react-router-dom";

// // const VerifyOtp = () => {
// //   const [otpData, setOtpData] = useState({
// //     email: localStorage.getItem('email'),
// //     otp: "",
// //     roleName: "",
// //     age: "",
// //     gender: "",
// //     companyName: "",
// //     licenceNumber: "",
// //     address1: "",
// //     address2: "",
// //     postalCode: "",
// //   });
// //   const [otpVerified, setOtpVerified] = useState(false);

// //   const handleOtpChange = (e) => {
// //     const { name, value } = e.target;
// //     setOtpData({
// //       ...otpData,
// //       [name]: value,
// //     });
// //   };

// //   const handleOtpSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch(`http://localhost:3000/register/verifyOtp`, {
// //         method: "POST",
// //         body: JSON.stringify(otpData),
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       });
// //       if (response.status === 200) {
// //         alert("OTP verified successfully. You can now log in.");
// //         setOtpVerified(true);
// //       } else {
// //         alert("Invalid OTP. Please try again.");
// //       }
// //     } catch (err) {
// //       console.error("Error verifying OTP:", err);
// //       alert("Error while verifying OTP");
// //     }
// //   };

// //   if (otpVerified) {
// //     return <Navigate to="/login" replace />;
// //   }

// //   return (
// //     <div
// //       style={{
// //         backgroundImage: 'url("/highway.jpg")',
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //         minHeight: '100vh',
// //         backgroundColor: '#d1e0e0', // Fallback color if image fails to load
// //       }}
// //     >
// //       <nav className="navbar navbar-expand-lg " variant="dark" style={{  width: '100%', backgroundColor: ' #334d4d', position: 'fixed', zIndex: '110', top: '0' }}>
// //         <div className="container-fluid">
// //           <h2 className="navbar-brand" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#141f1f' }}>JourneyJet Bus Booking</h2>
// //           <div className="ml-auto">
// //             <Link to='/login' className="btn btn-light" style={{ marginRight: '10px' }}>Log In</Link>
// //             <Link to='/register' className="btn btn-light">Sign Up</Link>
// //           </div>
// //         </div>
// //       </nav>

// //       <div className="container mt-5">
// //         <div className="row justify-content-center mt-5">
// //           <div className="col-md-6">
// //             <div className="card transparent-form" style={{ borderRadius: '8px' }}>
// //               <div className="card-body">
// //                 <h3 className="card-title mb-4 text-center">Verify OTP</h3>
// //                 <form onSubmit={handleOtpSubmit}>
// //                   <div className="form-group mb-3">
// //                     <label htmlFor="email">Email:</label>
// //                     <input
// //                       type="email"
// //                       className="form-control"
// //                       id="email"
// //                       name="email"
// //                       value={otpData.email}
// //                       readOnly // Prevent user from editing email field
// //                     />
// //                   </div>
// //                   <div className="form-group mb-3">
// //                     <label htmlFor="otp">OTP:</label>
// //                     <input
// //                       type="text"
// //                       className="form-control"
// //                       id="otp"
// //                       name="otp"
// //                       value={otpData.otp}
// //                       onChange={handleOtpChange}
// //                       required
// //                     />
// //                   </div>
// //                   <div className="form-group mb-3">
// //                     <label htmlFor="roleName">Role:</label>
// //                     <select
// //                       className="form-control"
// //                       id="roleName"
// //                       name="roleName"
// //                       value={otpData.roleName}
// //                       onChange={handleOtpChange}
// //                       required
// //                     >
// //                       <option value="user">User</option>
// //                       <option value="admin">Admin</option>
// //                     </select>
// //                   </div>
// //                   <div className="form-group mb-3">
// //                     <label htmlFor="companyName">Company Name:</label>
// //                     <input
// //                       type="text"
// //                       className="form-control"
// //                       id="companyName"
// //                       name="companyName"
// //                       value={otpData.companyName}
// //                       onChange={handleOtpChange}
// //                       required
// //                     />
// //                   </div>
// //                   <div className="form-group mb-3">
// //                     <label htmlFor="licenceNumber">Licence Number:</label>
// //                     <input
// //                       type="text"
// //                       className="form-control"
// //                       id="licenceNumber"
// //                       name="licenceNumber"
// //                       value={otpData.licenceNumber}
// //                       onChange={handleOtpChange}
// //                       required
// //                     />
// //                   </div>
// //                   <div className="form-group mb-3">
// //                     <label htmlFor="address1">Address Line 1:</label>
// //                     <input
// //                       type="text"
// //                       className="form-control"
// //                       id="address1"
// //                       name="address1"
// //                       value={otpData.address1}
// //                       onChange={handleOtpChange}
// //                       required
// //                     />
// //                   </div>
// //                   <div className="form-group mb-3">
// //                     <label htmlFor="address2">Address Line 2:</label>
// //                     <input
// //                       type="text"
// //                       className="form-control"
// //                       id="address2"
// //                       name="address2"
// //                       value={otpData.address2}
// //                       onChange={handleOtpChange}
// //                       required
// //                     />
// //                   </div>
// //                   <div className="form-group mb-3">
// //                     <label htmlFor="postalCode">Postal Code:</label>
// //                     <input
// //                       type="text"
// //                       className="form-control"
// //                       id="postalCode"
// //                       name="postalCode"
// //                       value={otpData.postalCode}
// //                       onChange={handleOtpChange}
// //                       required
// //                     />
// //                   </div>
// //                   <button type="submit" className="btn btn-primary w-100 mt-3">
// //                     Verify OTP
// //                   </button>
// //                 </form>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VerifyOtp;

// // import React, { useState } from "react";
// // import { Link, Navigate } from "react-router-dom";

// // const VerifyOtp = () => {
// //   const [otpData, setOtpData] = useState({
// //     email: localStorage.getItem('email') || "",
// //     otp: "",
// //     roleName: "user", // Default role is 'user'
// //     age: "",
// //     gender: "",
// //     companyName: "",
// //     licenceNumber: "",
// //     address1: "",
// //     address2: "",
// //     postalCode: "",
// //   });
// //   const [otpVerified, setOtpVerified] = useState(false);

// //   const handleOtpChange = (e) => {
// //     const { name, value } = e.target;
// //     setOtpData({
// //       ...otpData,
// //       [name]: value,
// //     });
// //   };

// //   const handleOtpSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch("http://localhost:3000/register/verifyOtp", {
// //         method: "POST",
// //         body: JSON.stringify(otpData),
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       });

// //       if (response.status === 200) {
// //         alert("OTP verified successfully. You can now log in.");
// //         setOtpVerified(true);
// //       } else {
// //         alert("Invalid OTP. Please try again.");
// //       }
// //     } catch (err) {
// //       console.error("Error verifying OTP:", err);
// //       alert("Error while verifying OTP");
// //     }
// //   };

// //   if (otpVerified) {
// //     return <Navigate to="/login" replace />;
// //   }

// //   return (
// //     <div style={{
// //       backgroundImage: 'url("/highway.jpg")',
// //       backgroundSize: 'cover',
// //       backgroundPosition: 'center',
// //       minHeight: '100vh',
// //       backgroundColor: '#d1e0e0', // Fallback color if image fails to load
// //     }}>
// //       <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#334d4d', position: 'fixed', zIndex: '110', top: '0', width: '100%' }}>
// //         <div className="container-fluid">
// //           <h2 className="navbar-brand" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#141f1f' }}>JourneyJet Bus Booking</h2>
// //           <div className="ml-auto">
// //             <Link to='/login' className="btn btn-light" style={{ marginRight: '10px' }}>Log In</Link>
// //             <Link to='/register' className="btn btn-light">Sign Up</Link>
// //           </div>
// //         </div>
// //       </nav>

// //       <div className="container mt-5" style={{ marginTop: '100px' }}>
// //         <div className="row justify-content-center">
// //           <div className="col-md-6">
// //             <div className="card" style={{ borderRadius: '8px', background: 'rgba(255, 255, 255, 0.8)' }}>
// //               <div className="card-body">
// //                 <h3 className="card-title mb-4 text-center">Verify OTP</h3>
// //                 <form onSubmit={handleOtpSubmit}>
// //                   <div className="form-group mb-3">
// //                     <label htmlFor="email">Email:</label>
// //                     <input
// //                       type="email"
// //                       className="form-control"
// //                       id="email"
// //                       name="email"
// //                       value={otpData.email}
// //                       readOnly
// //                     />
// //                   </div>
// //                   <div className="form-group mb-3">
// //                     <label htmlFor="otp">OTP:</label>
// //                     <input
// //                       type="text"
// //                       className="form-control"
// //                       id="otp"
// //                       name="otp"
// //                       value={otpData.otp}
// //                       onChange={handleOtpChange}
// //                       required
// //                     />
// //                   </div>
// //                   <div className="form-group mb-3">
// //                     <label htmlFor="roleName">Role:</label>
// //                     <select
// //                       className="form-control"
// //                       id="roleName"
// //                       name="roleName"
// //                       value={otpData.roleName}
// //                       onChange={handleOtpChange}
// //                       required
// //                     >
// //                       <option value="user">User</option>
// //                       <option value="admin">Admin</option>
// //                     </select>
// //                   </div>
// //                   {otpData.roleName === "admin" && (
// //                     <>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="age">Age:</label>
// //                         <input
// //                           type="number"
// //                           className="form-control"
// //                           id="age"
// //                           name="age"
// //                           value={otpData.age}
// //                           onChange={handleOtpChange}
// //                           required
// //                         />
// //                       </div>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="gender">Gender:</label>
// //                         <select
// //                           className="form-control"
// //                           id="gender"
// //                           name="gender"
// //                           value={otpData.gender}
// //                           onChange={handleOtpChange}
// //                           required
// //                         >
// //                           <option value="male">Male</option>
// //                           <option value="female">Female</option>
// //                           <option value="other">Other</option>
// //                         </select>
// //                       </div>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="companyName">Company Name:</label>
// //                         <input
// //                           type="text"
// //                           className="form-control"
// //                           id="companyName"
// //                           name="companyName"
// //                           value={otpData.companyName}
// //                           onChange={handleOtpChange}
// //                           required
// //                         />
// //                       </div>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="licenceNumber">Licence Number:</label>
// //                         <input
// //                           type="text"
// //                           className="form-control"
// //                           id="licenceNumber"
// //                           name="licenceNumber"
// //                           value={otpData.licenceNumber}
// //                           onChange={handleOtpChange}
// //                           required
// //                         />
// //                       </div>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="address1">Address Line 1:</label>
// //                         <input
// //                           type="text"
// //                           className="form-control"
// //                           id="address1"
// //                           name="address1"
// //                           value={otpData.address1}
// //                           onChange={handleOtpChange}
// //                           required
// //                         />
// //                       </div>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="address2">Address Line 2:</label>
// //                         <input
// //                           type="text"
// //                           className="form-control"
// //                           id="address2"
// //                           name="address2"
// //                           value={otpData.address2}
// //                           onChange={handleOtpChange}
// //                         />
// //                       </div>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="postalCode">Postal Code:</label>
// //                         <input
// //                           type="text"
// //                           className="form-control"
// //                           id="postalCode"
// //                           name="postalCode"
// //                           value={otpData.postalCode}
// //                           onChange={handleOtpChange}
// //                           required
// //                         />
// //                       </div>
// //                     </>
// //                   )}
// //                   <button type="submit" className="btn btn-primary w-100 mt-3">
// //                     Verify OTP
// //                   </button>
// //                 </form>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VerifyOtp;

// // import React, { useState } from "react";
// // import { Link, Navigate } from "react-router-dom";

// // const VerifyOtp = () => {
// //   const [otpData, setOtpData] = useState({
// //     email: localStorage.getItem('email') || "",
// //     otp: "",
// //     roleName: "user", // Default role is 'user'
// //     age: "",
// //     gender: "",
// //     companyName: "",
// //     licenceNumber: "",
// //     address1: "",
// //     address2: "",
// //     postalCode: "",
// //   });
// //   const [otpVerified, setOtpVerified] = useState(false);
// //   const [error, setError] = useState(null);

// //   const handleOtpChange = (e) => {
// //     const { name, value } = e.target;
// //     setOtpData({
// //       ...otpData,
// //       [name]: value,
// //     });
// //   };

// //   const handleOtpSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch("http://localhost:3000/register/verifyOtp", {
// //         method: "POST",
// //         body: JSON.stringify(otpData),
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       });

// //       const responseData = await response.json(); // Assuming backend returns JSON

// //       if (response.ok) {
// //         alert("OTP verified successfully. You can now log in.");
// //         setOtpVerified(true);
// //       } else {
// //         setError(responseData.message || "Invalid OTP. Please try again.");
// //       }
// //     } catch (err) {
// //       console.error("Error verifying OTP:", err);
// //       setError("Error while verifying OTP");
// //     }
// //   };

// //   if (otpVerified) {
// //     return <Navigate to="/login" replace />;
// //   }

// //   return (
// //     <div style={{
// //       backgroundImage: 'url("/highway.jpg")',
// //       backgroundSize: 'cover',
// //       backgroundPosition: 'center',
// //       minHeight: '100vh',
// //       backgroundColor: '#d1e0e0', // Fallback color if image fails to load
// //     }}>
// //       <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#334d4d', position: 'fixed', zIndex: '110', top: '0', width: '100%' }}>
// //         <div className="container-fluid">
// //           <h2 className="navbar-brand" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#141f1f' }}>JourneyJet Bus Booking</h2>
// //           <div className="ml-auto">
// //             <Link to='/login' className="btn btn-light" style={{ marginRight: '10px' }}>Log In</Link>
// //             <Link to='/register' className="btn btn-light">Sign Up</Link>
// //           </div>
// //         </div>
// //       </nav>

// //       <div className="container mt-5" style={{ marginTop: '100px' }}>
// //         <div className="row justify-content-center">
// //           <div className="col-md-6">
// //             <div className="card" style={{ borderRadius: '8px', background: 'rgba(255, 255, 255, 0.8)' }}>
// //               <div className="card-body">
// //                 <h3 className="card-title mb-4 text-center">Verify OTP</h3>
// //                 {error && <div className="alert alert-danger">{error}</div>}
// //                 <form onSubmit={handleOtpSubmit}>
// //                   <div className="form-group mb-3">
// //                     <label htmlFor="email">Email:</label>
// //                     <input
// //                       type="email"
// //                       className="form-control"
// //                       id="email"
// //                       name="email"
// //                       value={otpData.email}
// //                       readOnly
// //                     />
// //                   </div>
// //                   <div className="form-group mb-3">
// //                     <label htmlFor="otp">OTP:</label>
// //                     <input
// //                       type="text"
// //                       className="form-control"
// //                       id="otp"
// //                       name="otp"
// //                       value={otpData.otp}
// //                       onChange={handleOtpChange}
// //                       required
// //                     />
// //                   </div>
// //                   <div className="form-group mb-3">
// //                     <label htmlFor="roleName">Role:</label>
// //                     <select
// //                       className="form-control"
// //                       id="roleName"
// //                       name="roleName"
// //                       value={otpData.roleName}
// //                       onChange={handleOtpChange}
// //                       required
// //                     >
// //                       <option value="user">User</option>
// //                       <option value="admin">Admin</option>
// //                     </select>
// //                   </div>
// //                   {otpData.roleName === "admin" && (
// //                     <>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="age">Age:</label>
// //                         <input
// //                           type="number"
// //                           className="form-control"
// //                           id="age"
// //                           name="age"
// //                           value={otpData.age}
// //                           onChange={handleOtpChange}
// //                           required
// //                         />
// //                       </div>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="gender">Gender:</label>
// //                         <select
// //                           className="form-control"
// //                           id="gender"
// //                           name="gender"
// //                           value={otpData.gender}
// //                           onChange={handleOtpChange}
// //                           required
// //                         >
// //                           <option value="male">Male</option>
// //                           <option value="female">Female</option>
// //                           <option value="other">Other</option>
// //                         </select>
// //                       </div>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="companyName">Company Name:</label>
// //                         <input
// //                           type="text"
// //                           className="form-control"
// //                           id="companyName"
// //                           name="companyName"
// //                           value={otpData.companyName}
// //                           onChange={handleOtpChange}
// //                           required
// //                         />
// //                       </div>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="licenceNumber">Licence Number:</label>
// //                         <input
// //                           type="text"
// //                           className="form-control"
// //                           id="licenceNumber"
// //                           name="licenceNumber"
// //                           value={otpData.licenceNumber}
// //                           onChange={handleOtpChange}
// //                           required
// //                         />
// //                       </div>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="address1">Address Line 1:</label>
// //                         <input
// //                           type="text"
// //                           className="form-control"
// //                           id="address1"
// //                           name="address1"
// //                           value={otpData.address1}
// //                           onChange={handleOtpChange}
// //                           required
// //                         />
// //                       </div>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="address2">Address Line 2:</label>
// //                         <input
// //                           type="text"
// //                           className="form-control"
// //                           id="address2"
// //                           name="address2"
// //                           value={otpData.address2}
// //                           onChange={handleOtpChange}
// //                         />
// //                       </div>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="postalCode">Postal Code:</label>
// //                         <input
// //                           type="text"
// //                           className="form-control"
// //                           id="postalCode"
// //                           name="postalCode"
// //                           value={otpData.postalCode}
// //                           onChange={handleOtpChange}
// //                           required
// //                         />
// //                       </div>
// //                     </>
// //                   )}
// //                   <button type="submit" className="btn btn-primary w-100 mt-3">
// //                     Verify OTP
// //                   </button>
// //                 </form>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VerifyOtp;

// // import React, { useState } from "react";
// // import { Link, Navigate } from "react-router-dom";

// // const VerifyOtp = () => {
// //   const [otpData, setOtpData] = useState({
// //     email: localStorage.getItem('email') || "",
// //     otp: "",
// //     role: "user", // Ensure this matches the backend field name
// //     age: "",
// //     gender: "",
// //     companyName: "",
// //     licenceNumber: "",
// //     address1: "",
// //     address2: "",
// //     postalCode: "",
// //   });
// //   const [otpVerified, setOtpVerified] = useState(false);
// //   const [error, setError] = useState(null);

// //   const handleOtpChange = (e) => {
// //     const { name, value } = e.target;
// //     setOtpData({
// //       ...otpData,
// //       [name]: value,
// //     });
// //   };

// //   const handleOtpSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch("http://localhost:3000/register/verifyOtp", {
// //         method: "POST",
// //         body: JSON.stringify(otpData),
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       });

// //       const responseData = await response.json();

// //       if (response.ok) {
// //         alert("OTP verified successfully. You can now log in.");
// //         setOtpVerified(true);
// //       } else {
// //         setError(responseData.message || "Invalid OTP. Please try again.");
// //       }
// //     } catch (err) {
// //       console.error("Error verifying OTP:", err);
// //       setError("Error while verifying OTP");
// //     }
// //   };

// //   if (otpVerified) {
// //     return <Navigate to="/login" replace />;
// //   }

// //   return (
// //     <div style={{
// //       backgroundImage: 'url("/highway.jpg")',
// //       backgroundSize: 'cover',
// //       backgroundPosition: 'center',
// //       minHeight: '100vh',
// //       backgroundColor: '#d1e0e0', // Fallback color if image fails to load
// //     }}>
// //       <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#334d4d', position: 'fixed', zIndex: '110', top: '0', width: '100%' }}>
// //         <div className="container-fluid">
// //           <h2 className="navbar-brand" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#141f1f' }}>JourneyJet Bus Booking</h2>
// //           <div className="ml-auto">
// //             <Link to='/login' className="btn btn-light" style={{ marginRight: '10px' }}>Log In</Link>
// //             <Link to='/register' className="btn btn-light">Sign Up</Link>
// //           </div>
// //         </div>
// //       </nav>

// //       <div className="container mt-5" style={{ marginTop: '100px' }}>
// //         <div className="row justify-content-center">
// //           <div className="col-md-6">
// //             <div className="card" style={{ borderRadius: '8px', background: 'rgba(255, 255, 255, 0.8)' }}>
// //               <div className="card-body">
// //                 <h3 className="card-title mb-4 text-center">Verify OTP</h3>
// //                 {error && <div className="alert alert-danger">{error}</div>}
// //                 <form onSubmit={handleOtpSubmit}>
// //                   <div className="form-group mb-3">
// //                     <label htmlFor="email">Email:</label>
// //                     <input
// //                       type="email"
// //                       className="form-control"
// //                       id="email"
// //                       name="email"
// //                       value={otpData.email}
// //                       readOnly
// //                     />
// //                   </div>
// //                   <div className="form-group mb-3">
// //                     <label htmlFor="otp">OTP:</label>
// //                     <input
// //                       type="text"
// //                       className="form-control"
// //                       id="otp"
// //                       name="otp"
// //                       value={otpData.otp}
// //                       onChange={handleOtpChange}
// //                       required
// //                     />
// //                   </div>
// //                   <div className="form-group mb-3">
// //                     <label htmlFor="role">Role:</label>
// //                     <select
// //                       className="form-control"
// //                       id="role"
// //                       name="role"
// //                       value={otpData.role}
// //                       onChange={handleOtpChange}
// //                       required
// //                     >
// //                       <option value="user">User</option>
// //                       <option value="admin">Admin</option>
// //                     </select>
// //                   </div>
// //                   {otpData.role === "admin" && (
// //                     <>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="age">Age:</label>
// //                         <input
// //                           type="number"
// //                           className="form-control"
// //                           id="age"
// //                           name="age"
// //                           value={otpData.age}
// //                           onChange={handleOtpChange}
// //                           required
// //                         />
// //                       </div>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="gender">Gender:</label>
// //                         <select
// //                           className="form-control"
// //                           id="gender"
// //                           name="gender"
// //                           value={otpData.gender}
// //                           onChange={handleOtpChange}
// //                           required
// //                         >
// //                           <option value="male">Male</option>
// //                           <option value="female">Female</option>
// //                           <option value="other">Other</option>
// //                         </select>
// //                       </div>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="companyName">Company Name:</label>
// //                         <input
// //                           type="text"
// //                           className="form-control"
// //                           id="companyName"
// //                           name="companyName"
// //                           value={otpData.companyName}
// //                           onChange={handleOtpChange}
// //                           required
// //                         />
// //                       </div>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="licenceNumber">Licence Number:</label>
// //                         <input
// //                           type="text"
// //                           className="form-control"
// //                           id="licenceNumber"
// //                           name="licenceNumber"
// //                           value={otpData.licenceNumber}
// //                           onChange={handleOtpChange}
// //                           required
// //                         />
// //                       </div>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="address1">Address Line 1:</label>
// //                         <input
// //                           type="text"
// //                           className="form-control"
// //                           id="address1"
// //                           name="address1"
// //                           value={otpData.address1}
// //                           onChange={handleOtpChange}
// //                           required
// //                         />
// //                       </div>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="address2">Address Line 2:</label>
// //                         <input
// //                           type="text"
// //                           className="form-control"
// //                           id="address2"
// //                           name="address2"
// //                           value={otpData.address2}
// //                           onChange={handleOtpChange}
// //                         />
// //                       </div>
// //                       <div className="form-group mb-3">
// //                         <label htmlFor="postalCode">Postal Code:</label>
// //                         <input
// //                           type="text"
// //                           className="form-control"
// //                           id="postalCode"
// //                           name="postalCode"
// //                           value={otpData.postalCode}
// //                           onChange={handleOtpChange}
// //                           required
// //                         />
// //                       </div>
// //                     </>
// //                   )}
// //                   <button type="submit" className="btn btn-primary w-100 mt-3">
// //                     Verify OTP
// //                   </button>
// //                 </form>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VerifyOtp;

// import React, { useState } from "react";
// import { Link, Navigate } from "react-router-dom";

// const VerifyOtp = () => {
//   const [otpData, setOtpData] = useState({
//     email: localStorage.getItem('email') || "",
//     otp: "",
//     role: "user", // Ensure this matches the backend field name
//     age: "",
//     gender: "",
//     companyName: "",
//     licenceNumber: "",
//     address1: "",
//     address2: "",
//     postalCode: "",
//   });
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [error, setError] = useState(null);

//   const handleOtpChange = (e) => {
//     const { name, value } = e.target;
//     setOtpData({
//       ...otpData,
//       [name]: value,
//     });
//   };

//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:3000/register/verifyOtp", {
//         method: "POST",
//         body: JSON.stringify(otpData),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       const responseData = await response.json();

//       if (response.status === 200) {
//         alert("OTP verified successfully. You can now log in.");
//         setOtpVerified(true);
//       } else {
//         setError(responseData.message || "Invalid OTP. Please try again.");
//       }
//     } catch (err) {
//       console.error("Error verifying OTP:", err);
//       setError("Error while verifying OTP");
//     }
//   };

//   if (otpVerified) {
//     return <Navigate to="/login" replace />;
//   }

//   return (
//     <div style={{
//       backgroundImage: 'url("/highway.jpg")',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       minHeight: '100vh',
//       backgroundColor: '#d1e0e0', // Fallback color if image fails to load
//     }}>
//       <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#334d4d', position: 'fixed', zIndex: '110', top: '0', width: '100%' }}>
//         <div className="container-fluid">
//           <h2 className="navbar-brand" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#141f1f' }}>JourneyJet Bus Booking</h2>
//           <div className="ml-auto">
//             <Link to='/login' className="btn btn-light" style={{ marginRight: '10px' }}>Log In</Link>
//             <Link to='/register' className="btn btn-light">Sign Up</Link>
//           </div>
//         </div>
//       </nav>

//       <div className="container mt-5" style={{ marginTop: '100px' }}>
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <div className="card" style={{ borderRadius: '8px', background: 'rgba(255, 255, 255, 0.8)' }}>
//               <div className="card-body">
//                 <h3 className="card-title mb-4 text-center">Verify OTP</h3>
//                 {error && <div className="alert alert-danger">{error}</div>}
//                 <form onSubmit={handleOtpSubmit}>
//                   <div className="form-group mb-3">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       name="email"
//                       value={otpData.email}
//                       readOnly
//                     />
//                   </div>
//                   <div className="form-group mb-3">
//                     <label htmlFor="otp">OTP:</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="otp"
//                       name="otp"
//                       value={otpData.otp}
//                       onChange={handleOtpChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group mb-3">
//                     <label htmlFor="role">Role:</label>
//                     <select
//                       className="form-control"
//                       id="role"
//                       name="role"
//                       value={otpData.role}
//                       onChange={handleOtpChange}
//                       required
//                     >
//                       <option value="user">User</option>
//                       <option value="admin">Admin</option>
//                     </select>
//                   </div>
//                   {otpData.role === "admin" && (
//                     <>
//                       <div className="form-group mb-3">
//                         <label htmlFor="age">Age:</label>
//                         <input
//                           type="number"
//                           className="form-control"
//                           id="age"
//                           name="age"
//                           value={otpData.age}
//                           onChange={handleOtpChange}
//                           required
//                         />
//                       </div>
//                       <div className="form-group mb-3">
//                         <label htmlFor="gender">Gender:</label>
//                         <select
//                           className="form-control"
//                           id="gender"
//                           name="gender"
//                           value={otpData.gender}
//                           onChange={handleOtpChange}
//                           required
//                         >
//                           <option value="male">Male</option>
//                           <option value="female">Female</option>
//                           <option value="other">Other</option>
//                         </select>
//                       </div>
//                       <div className="form-group mb-3">
//                         <label htmlFor="companyName">Company Name:</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="companyName"
//                           name="companyName"
//                           value={otpData.companyName}
//                           onChange={handleOtpChange}
//                           required
//                         />
//                       </div>
//                       <div className="form-group mb-3">
//                         <label htmlFor="licenceNumber">Licence Number:</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="licenceNumber"
//                           name="licenceNumber"
//                           value={otpData.licenceNumber}
//                           onChange={handleOtpChange}
//                           required
//                         />
//                       </div>
//                       <div className="form-group mb-3">
//                         <label htmlFor="address1">Address Line 1:</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="address1"
//                           name="address1"
//                           value={otpData.address1}
//                           onChange={handleOtpChange}
//                           required
//                         />
//                       </div>
//                       <div className="form-group mb-3">
//                         <label htmlFor="address2">Address Line 2:</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="address2"
//                           name="address2"
//                           value={otpData.address2}
//                           onChange={handleOtpChange}
//                         />
//                       </div>
//                       <div className="form-group mb-3">
//                         <label htmlFor="postalCode">Postal Code:</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="postalCode"
//                           name="postalCode"
//                           value={otpData.postalCode}
//                           onChange={handleOtpChange}
//                           required
//                         />
//                       </div>
//                     </>
//                   )}
//                   <button type="submit" className="btn btn-primary w-100 mt-3">
//                     Verify OTP
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerifyOtp;

// import React, { useState, useEffect } from "react";
// import { Link, Navigate } from "react-router-dom";

// const VerifyOtp = () => {
//   const [otpData, setOtpData] = useState({
//     email: localStorage.getItem('email') || "",
//     otp: "",
//     role: "user", // Ensure this matches the backend field name
//     age: "",
//     gender: "",
//     companyName: "",
//     licenceNumber: "",
//     address1: "",
//     address2: "",
//     postalCode: "",
//   });
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const storedEmail = localStorage.getItem('email');
//     if (storedEmail) {
//       setOtpData({ ...otpData, email: storedEmail });
//     }
//   }, []); // Run only once on component mount

//   const handleOtpChange = (e) => {
//     const { name, value } = e.target;
//     setOtpData({
//       ...otpData,
//       [name]: value,
//     });
//   };

//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:3000/register/verifyOtp", {
//         method: "POST",
//         body: JSON.stringify(otpData),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       const responseData = await response.json();

//       if (response.status === 200) {
//         alert("OTP verified successfully. You can now log in.");
//         setOtpVerified(true);
//       } else {
//         setError(responseData.message || "Invalid OTP. Please try again.");
//       }
//     } catch (err) {
//       console.error("Error verifying OTP:", err);
//       setError("Error while verifying OTP");
//     }
//   };

//   if (otpVerified) {
//     return <Navigate to="/login" replace />;
//   }

//   return (
//     <div style={{
//       backgroundImage: 'url("/highway.jpg")',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       minHeight: '100vh',
//       backgroundColor: '#d1e0e0', // Fallback color if image fails to load
//     }}>
//       <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#334d4d', position: 'fixed', zIndex: '110', top: '0', width: '100%' }}>
//         <div className="container-fluid">
//           <h2 className="navbar-brand" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#141f1f' }}>JourneyJet Bus Booking</h2>
//           <div className="ml-auto">
//             <Link to='/login' className="btn btn-light" style={{ marginRight: '10px' }}>Log In</Link>
//             <Link to='/register' className="btn btn-light">Sign Up</Link>
//           </div>
//         </div>
//       </nav>

//       <div className="container mt-5" style={{ marginTop: '100px' }}>
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <div className="card" style={{ borderRadius: '8px', background: 'rgba(255, 255, 255, 0.8)' }}>
//               <div className="card-body">
//                 <h3 className="card-title mb-4 text-center">Verify OTP</h3>
//                 {error && <div className="alert alert-danger">{error}</div>}
//                 <form onSubmit={handleOtpSubmit}>
//                   <div className="form-group mb-3">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       name="email"
//                       value={otpData.email}
//                       readOnly
//                     />
//                   </div>
//                   <div className="form-group mb-3">
//                     <label htmlFor="otp">OTP:</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="otp"
//                       name="otp"
//                       value={otpData.otp}
//                       onChange={handleOtpChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group mb-3">
//                     <label htmlFor="role">Role:</label>
//                     <select
//                       className="form-control"
//                       id="role"
//                       name="role"
//                       value={otpData.role}
//                       onChange={handleOtpChange}
//                       required
//                     >
//                       <option value="user">User</option>
//                       <option value="admin">Admin</option>
//                     </select>
//                   </div>
//                   {otpData.role === "admin" && (
//                     <>
//                       <div className="form-group mb-3">
//                         <label htmlFor="age">Age:</label>
//                         <input
//                           type="number"
//                           className="form-control"
//                           id="age"
//                           name="age"
//                           value={otpData.age}
//                           onChange={handleOtpChange}
//                           required
//                         />
//                       </div>
//                       <div className="form-group mb-3">
//                         <label htmlFor="gender">Gender:</label>
//                         <select
//                           className="form-control"
//                           id="gender"
//                           name="gender"
//                           value={otpData.gender}
//                           onChange={handleOtpChange}
//                           required
//                         >
//                           <option value="male">Male</option>
//                           <option value="female">Female</option>
//                           <option value="other">Other</option>
//                         </select>
//                       </div>
//                       <div className="form-group mb-3">
//                         <label htmlFor="companyName">Company Name:</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="companyName"
//                           name="companyName"
//                           value={otpData.companyName}
//                           onChange={handleOtpChange}
//                           required
//                         />
//                       </div>
//                       <div className="form-group mb-3">
//                         <label htmlFor="licenceNumber">Licence Number:</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="licenceNumber"
//                           name="licenceNumber"
//                           value={otpData.licenceNumber}
//                           onChange={handleOtpChange}
//                           required
//                         />
//                       </div>
//                       <div className="form-group mb-3">
//                         <label htmlFor="address1">Address Line 1:</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="address1"
//                           name="address1"
//                           value={otpData.address1}
//                           onChange={handleOtpChange}
//                           required
//                         />
//                       </div>
//                       <div className="form-group mb-3">
//                         <label htmlFor="address2">Address Line 2:</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="address2"
//                           name="address2"
//                           value={otpData.address2}
//                           onChange={handleOtpChange}
//                         />
//                       </div>
//                       <div className="form-group mb-3">
//                         <label htmlFor="postalCode">Postal Code:</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="postalCode"
//                           name="postalCode"
//                           value={otpData.postalCode}
//                           onChange={handleOtpChange}
//                           required
//                         />
//                       </div>
//                     </>
//                   )}
//                   <button type="submit" className="btn btn-primary w-100 mt-3">
//                     Verify OTP
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerifyOtp;

import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

const VerifyOtp = () => {
  const [otpData, setOtpData] = useState({
    email: localStorage.getItem('email') || "",
    otp: "",
    role: "user", // Ensure this matches the backend field name
    age: "",
    gender: "",
    companyName: "",
    licenceNumber: "",
    address1: "",
    address2: "",
    postalCode: "",
  });
  const [otpVerified, setOtpVerified] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setOtpData({ ...otpData, email: storedEmail });
    }
  }, []); // Run only once on component mount

  const handleOtpChange = (e) => {
    const { name, value } = e.target;
    setOtpData({
      ...otpData,
      [name]: value,
    });
  };

//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:3000/verifyOtp", {
//         method: "POST",
//         body: JSON.stringify({
//           ...otpData,
//           email: otpData.email  // Ensure email is included in the body
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       const responseData = await response.json();

//       if (response.status === 200) {
//         alert("OTP verified successfully. You can now log in.");
//         setOtpVerified(true);
//       } else {
//         setError(responseData.message || "Invalid OTP. Please try again.");
//       }
//     } catch (err) {
//       console.error("Error verifying OTP:", err);
//       setError("Error while verifying OTP");
//     }
//   };

const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/verifyOtp", {
        method: "POST",
        body: JSON.stringify({
          email: otpData.email,
          otp: otpData.otp,
          role: otpData.role,
          age: otpData.age,
          gender: otpData.gender,
          companyName: otpData.companyName,
          licenceNumber: otpData.licenceNumber,
          address1: otpData.address1,
          address2: otpData.address2,
          postalCode: otpData.postalCode,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const responseData = await response.json();
  
      if (response.status === 200) {
        alert("OTP verified successfully. You can now log in.");
        setOtpVerified(true);
      } else {
        setError(responseData.message || "Invalid OTP. Please try again.");
      }
    } catch (err) {
      console.error("Error verifying OTP:", err);
      setError("Error while verifying OTP");
    }
  };

  if (otpVerified) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div style={{
      backgroundImage: 'url("/highway.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      backgroundColor: '#d1e0e0', // Fallback color if image fails to load
    }}>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#334d4d', position: 'fixed', zIndex: '110', top: '0', width: '100%' }}>
        <div className="container-fluid">
          <h2 className="navbar-brand" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#141f1f' }}>JourneyJet Bus Booking</h2>
          <div className="ml-auto">
            <Link to='/login' className="btn btn-light" style={{ marginRight: '10px' }}>Log In</Link>
            <Link to='/register' className="btn btn-light">Sign Up</Link>
          </div>
        </div>
      </nav>

      <div className="container mt-5" style={{ marginTop: '100px' }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card" style={{ borderRadius: '8px', background: 'rgba(255, 255, 255, 0.8)' }}>
              <div className="card-body">
                <h3 className="card-title mb-4 text-center">Verify OTP</h3>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleOtpSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={otpData.email}
                      readOnly
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="otp">OTP:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="otp"
                      name="otp"
                      value={otpData.otp}
                      onChange={handleOtpChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="role">Role:</label>
                    <select
                      className="form-control"
                      id="role"
                      name="role"
                      value={otpData.role}
                      onChange={handleOtpChange}
                      required
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  {otpData.role === "admin" && (
                    <>
                      <div className="form-group mb-3">
                        <label htmlFor="age">Age:</label>
                        <input
                          type="number"
                          className="form-control"
                          id="age"
                          name="age"
                          value={otpData.age}
                          onChange={handleOtpChange}
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="gender">Gender:</label>
                        <select
                          className="form-control"
                          id="gender"
                          name="gender"
                          value={otpData.gender}
                          onChange={handleOtpChange}
                          required
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="companyName">Company Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="companyName"
                          name="companyName"
                          value={otpData.companyName}
                          onChange={handleOtpChange}
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="licenceNumber">Licence Number:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="licenceNumber"
                          name="licenceNumber"
                          value={otpData.licenceNumber}
                          onChange={handleOtpChange}
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="address1">Address Line 1:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="address1"
                          name="address1"
                          value={otpData.address1}
                          onChange={handleOtpChange}
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="address2">Address Line 2:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="address2"
                          name="address2"
                          value={otpData.address2}
                          onChange={handleOtpChange}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="postalCode">Postal Code:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="postalCode"
                          name="postalCode"
                          value={otpData.postalCode}
                          onChange={handleOtpChange}
                          required
                        />
                      </div>
                    </>
                  )}
                  <button type="submit" className="btn btn-primary w-100 mt-3">
                    Verify OTP
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;

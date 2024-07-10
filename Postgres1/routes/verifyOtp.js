
const express = require('express');
const { Register } = require('../db/registerModel');

const verifyOtpRoute = express.Router();

// verifyOtpRoute.post("/", async (req, res) => {
//   const { email, otp } = req.body;
//   try {
//     const user = await Register.findOne({ where: { email, otp } });

//     if (user) {
//       await Register.update({ otp: null, status: 'active' }, { where: { email } });
//       res.send("OTP verified successfully. Account is now active.");
//     } else {
//       res.status(400).send("Invalid OTP.");
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error verifying OTP.");
//   }
// });

module.exports = verifyOtpRoute;

verifyOtpRoute.post("/verifyOtp", async (req, res) => {
  const { email, otp, role, age, gender, companyName, licenceNumber, address1, address2, postalCode } = req.body;
  
  try {
    // Find user by email and OTP
    let user = await Register.findOne({ where: { email, otp } });

    // If user not found with provided email and OTP
    if (!user) {
      return res.status(400).send("Invalid OTP");
    }

    // Update user details
    user.role = role;
    user.age = age;
    user.gender = gender;
    user.status = 'active';  // Update status to active after successful OTP verification
    user.otp = null;  // Set OTP to null after verification

    // If user role is admin, verify and save bus company details
    if (role === 'admin' && companyName && licenceNumber && address1 && postalCode) {
      // Check if user already has a company associated
      if (!user.companyId) {
        // Create a new BusCompany record
        const newCompany = await BusCompany.create({
          companyId: uuidv4(),
          companyName: companyName,
          licenceNumber: licenceNumber,
          address1: address1,
          address2: address2 || null,
          postalCode: postalCode,
        });
        // Assign companyId to user
        user.companyId = newCompany.companyId;
      } else {
        // Update existing BusCompany record (if needed)
        let existingCompany = await BusCompany.findByPk(user.companyId);
        if (!existingCompany) {
          // Create a new BusCompany record if none found (should not happen ideally)
          existingCompany = await BusCompany.create({
            companyId: uuidv4(),
            companyName: companyName,
            licenceNumber: licenceNumber,
            address1: address1,
            address2: address2 || null,
            postalCode: postalCode,
          });
          // Assign companyId to user
          user.companyId = existingCompany.companyId;
        } else {
          // Update existing BusCompany record
          existingCompany.companyName = companyName;
          existingCompany.licenceNumber = licenceNumber;
          existingCompany.address1 = address1;
          existingCompany.address2 = address2 || null;
          existingCompany.postalCode = postalCode;
          await existingCompany.save();
        }
      }
    }

    // Save updated user details
    await user.save();

    // Generate JWT token
    const tokenPayload = {
      userId: user.registerId,
      role: user.role,
    };
    const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

    // Send response
    res.json({ message: "OTP verified successfully. User details updated.", token });

  } catch (error) {
    console.error('Error during OTP verification:', error);
    res.status(500).send("Error while verifying OTP");
  }
});

module.exports = verifyOtpRoute;
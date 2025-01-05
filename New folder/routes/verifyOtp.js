
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
    
    let user = await Register.findOne({ where: { email, otp } });

   
    if (!user) {
      return res.status(400).send("Invalid OTP");
    }

    user.role = role;
    user.age = age;
    user.gender = gender;
    user.status = 'active';  
    user.otp = null;  
   
    if (role === 'admin' && companyName && licenceNumber && address1 && postalCode) {
 
      if (!user.companyId) {
        
        const newCompany = await BusCompany.create({
          companyId: uuidv4(),
          companyName: companyName,
          licenceNumber: licenceNumber,
          address1: address1,
          address2: address2 || null,
          postalCode: postalCode,
        });
  
        user.companyId = newCompany.companyId;
      } else {
       
        let existingCompany = await BusCompany.findByPk(user.companyId);
        if (!existingCompany) {
     
          existingCompany = await BusCompany.create({
            companyId: uuidv4(),
            companyName: companyName,
            licenceNumber: licenceNumber,
            address1: address1,
            address2: address2 || null,
            postalCode: postalCode,
          });
          
          user.companyId = existingCompany.companyId;
        } else {
          
          existingCompany.companyName = companyName;
          existingCompany.licenceNumber = licenceNumber;
          existingCompany.address1 = address1;
          existingCompany.address2 = address2 || null;
          existingCompany.postalCode = postalCode;
          await existingCompany.save();
        }
      }
    }


    await user.save();

    
    const tokenPayload = {
      userId: user.registerId,
      role: user.role,
    };
    const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

   
    res.json({ message: "OTP verified successfully. User details updated.", token });

  } catch (error) {
    console.error('Error during OTP verification:', error);
    res.status(500).send("Error while verifying OTP");
  }
});

module.exports = verifyOtpRoute;
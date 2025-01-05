// // const express = require('express');
// // const { Register } = require('../db/registerModel');
// // const { v4: uuidv4 } = require('uuid');
// // const bcrypt = require('bcrypt');
// // const { transporter, mailOptions } = require('../utils/nodemailerConfig');

// // const registerRoute = express.Router();

// // registerRoute.get("/", (req, res) => {
// //   res.send("register page");
// // });

// // registerRoute.post("/", async (req, res) => {
// //   const data = req.body;
// //   try {
// //     const existingUser = await Register.findOne({
// //       where: { email: data.email },
// //       attributes: ['userName', 'email', 'phoneNumber', 'password']
// //     });

// //     if (existingUser) {
// //       res.status(409).send("User already registered");
// //       return;
// //     }

// //     bcrypt.hash(data.password, 10, async (err, hash) => {
// //       if (err) {
// //         res.status(500).send("Error in registering");
// //         return;
// //       }

// //       const otp = Math.floor(100000 + Math.random() * 900000);

// //       await Register.create({
// //         registerId: uuidv4(),
// //         userName: data.userName,
// //         email: data.email,
// //         phoneNumber: data.phoneNumber,
// //         password: hash,
// //         otp,
// //         status: 'pending',
// //         age: data.age,
// //         gender: data.gender,
// //       });

// //       const emailOptions = {
// //         ...mailOptions,
// //         to: data.email,
// //         text: `Your OTP for account verification is: ${otp}`,
// //       };

// //       try {
// //         await transporter.sendMail(emailOptions);
// //         res.send("User registered successfully. OTP sent to email.");
// //       } catch (error) {
// //         console.error('Error sending OTP email:', error);
// //         res.status(500).send("User registered but failed to send OTP email.");
// //       }
// //     });

// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).send("Error while user registration");
// //   }
// // });

// // module.exports = registerRoute;

// // registerRoute.js

// // registerRoute.js

// // const express = require('express');
// // const { Register } = require('../db/registerModel');
// // const { v4: uuidv4 } = require('uuid');
// // const bcrypt = require('bcrypt');
// // const { transporter, mailOptions } = require('./nodemailerConfig');
// // const jwt = require('jsonwebtoken');

// // const registerRoute = express.Router();

// // registerRoute.get("/", (req, res) => {
// //   res.send("register page");
// // });

// // registerRoute.post("/", async (req, res) => {
// //   const data = req.body;
// //   try {
// //     const existingUser = await Register.findOne({
// //       where: { email: data.email },
// //       attributes: ['userName', 'email', 'phoneNumber', 'password','role','age','gender']
// //     });

// //     if (existingUser) {
// //       return res.status(409).send("User already registered");
// //     }

// //     const hash = await bcrypt.hash(data.password, 10);

// //     const otp = Math.floor(100000 + Math.random() * 900000);

// //     const newUser = await Register.create({
// //       registerId: uuidv4(),
// //       userName: data.userName,
// //       email: data.email,
// //       phoneNumber: data.phoneNumber,
// //       password: hash,
// //       otp,
// //       status: 'pending',
// //       age: data.age,
// //       gender: data.gender,
// //       role: 'user',  // Default role for new users
// //     });

// //     // Generate JWT token with userId and role in payload
// //     const tokenPayload = {
// //       userId: newUser.registerId,
// //       role: newUser.role,
// //     };

// //     const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

// //     const emailOptions = {
// //       ...mailOptions,
// //       to: data.email,
// //       text: `Your OTP for account verification is: ${otp}`,
// //     };

// //     await transporter.sendMail(emailOptions);

// //     res.json({ message: "User registered successfully. OTP sent to email.", token });

// //   } catch (error) {
// //     console.error('Error during registration:', error);
// //     res.status(500).send("Error while user registration");
// //   }
// // });

// // module.exports = registerRoute;

// // const express = require('express');
// // const { Register } = require('../db/registerModel');
// // const { v4: uuidv4 } = require('uuid');
// // const bcrypt = require('bcrypt');
// // const { transporter, mailOptions } = require('./nodemailerConfig');
// // const jwt = require('jsonwebtoken');

// // const registerRoute = express.Router();

// // registerRoute.get("/", (req, res) => {
// //   res.send("register page");
// // });

// // registerRoute.post("/", async (req, res) => {
// //   const data = req.body;
// //   try {
// //     const existingUser = await Register.findOne({
// //       where: { email: data.email },
// //       attributes: ['userName', 'email', 'phoneNumber', 'password', 'role', 'age', 'gender']
// //     });

// //     if (existingUser) {
// //       return res.status(409).send("User already registered");
// //     }

// //     const hash = await bcrypt.hash(data.password, 10);

// //     const otp = Math.floor(100000 + Math.random() * 900000);

// //     const newUser = await Register.create({
// //       registerId: uuidv4(),
// //       userName: data.userName,
// //       email: data.email,
// //       phoneNumber: data.phoneNumber,
// //       password: hash,
// //       otp,
// //       status: 'pending',
// //       age: data.age,
// //       gender: data.gender,
// //       role: 'user',  // Default role for new users
// //     });

// //     console.log('New user created:', newUser);

// //     // Generate JWT token with userId and role in payload
// //     const tokenPayload = {
// //       userId: newUser.registerId,
// //       role: newUser.role,
// //     };

// //     const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

// //     const emailOptions = {
// //       ...mailOptions,
// //       to: data.email,
// //       text: `Your OTP for account verification is: ${otp}`,
// //     };

// //     await transporter.sendMail(emailOptions);

// //     res.json({ message: "User registered successfully. OTP sent to email.", token });

// //   } catch (error) {
// //     console.error('Error during registration:', error);
// //     res.status(500).send("Error while user registration");
// //   }
// // });

// // module.exports = registerRoute;

// // const express = require('express');
// // const { Register } = require('../db/registerModel');
// // const { BusCompany } = require('../db/BusCompany');
// // const { v4: uuidv4 } = require('uuid');
// // const bcrypt = require('bcrypt');
// // const { transporter, mailOptions } = require('./nodemailerConfig');
// // const jwt = require('jsonwebtoken');

// // const registerRoute = express.Router();

// // registerRoute.get("/", (req, res) => {
// //   res.send("register page");
// // });

// // // Initial registration
// // registerRoute.post("/", async (req, res) => {
// //   const data = req.body;
// //   try {
// //     const existingUser = await Register.findOne({
// //       where: { email: data.email },
// //       attributes: ['userName', 'email', 'phoneNumber', 'password']
// //     });

// //     if (existingUser) {
// //       return res.status(409).send("User already registered");
// //     }

// //     const hash = await bcrypt.hash(data.password, 10);
// //     const otp = Math.floor(100000 + Math.random() * 900000);
// //     let companyId = null;

// //     if (data.role === 'admin') {
// //       if (!data.companyName || !data.licenceNumber || !data.address1 || !data.postalCode) {
// //         return res.status(400).send("Missing bus company details for admin registration");
// //       }

// //       const newCompany = await BusCompany.create({
// //         companyId: uuidv4(),
// //         companyName: data.companyName,
// //         licenceNumber: data.licenceNumber,
// //         address1: data.address1,
// //         address2: data.address2,
// //         postalCode: data.postalCode,
// //       });
// //       companyId = newCompany.companyId;
// //     }

// //     const newUser = await Register.create({
// //       registerId: uuidv4(),
// //       userName: data.userName,
// //       email: data.email,
// //       phoneNumber: data.phoneNumber,
// //       password: hash,
// //       otp,
// //       status: 'pending',
// //       role: data.role,
// //       companyId,
// //     });

// //     const tokenPayload = {
// //       userId: newUser.registerId,
// //     };

// //     const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

// //     const emailOptions = {
// //       ...mailOptions,
// //       to: data.email,
// //       text: `Your OTP for account verification is: ${otp}`,
// //     };

// //     await transporter.sendMail(emailOptions);

// //     res.json({ message: "User registered successfully. OTP sent to email.", token });

// //   } catch (error) {
// //     console.error('Error during registration:', error);
// //     res.status(500).send("Error while user registration");
// //   }
// // });

// // // Verify OTP and update role, age, gender
// // registerRoute.post("/verifyOtp", async (req, res) => {
// //   const { email, otp, role, age, gender } = req.body;
// //   try {
// //     const user = await Register.findOne({ where: { email, otp } });

// //     if (!user) {
// //       return res.status(400).send("Invalid OTP");
// //     }

// //     user.role = role;
// //     user.age = age;
// //     user.gender = gender;
// //     user.status = 'active';  // Update status to active after successful OTP verification
// //     await user.save();

// //     const tokenPayload = {
// //       userId: user.registerId,
// //       role: user.role,
// //     };

// //     const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

// //     res.json({ message: "OTP verified successfully. User details updated.", token });

// //   } catch (error) {
// //     console.error('Error during OTP verification:', error);
// //     res.status(500).send("Error while verifying OTP");
// //   }
// // });

// // // Fetch all registered users
// // registerRoute.get("/all", async (req, res) => {
// //   try {
// //     const users = await Register.findAll({
// //       attributes: ['userName', 'email', 'phoneNumber', 'role', 'age', 'gender', 'status'],
// //       include: {
// //         model: BusCompany,
// //         attributes: ['companyName', 'licenceNumber', 'address1', 'address2', 'postalCode'],
// //       },
// //     });

// //     res.json(users);
// //   } catch (error) {
// //     console.error('Error fetching all users:', error);
// //     res.status(500).send("Error while fetching all users");
// //   }
// // });

// // module.exports = registerRoute;


// // const express = require('express');
// // const { Register } = require('../db/registerModel');
// // const { BusCompany } = require('../db/BusCompany');
// // const { v4: uuidv4 } = require('uuid');
// // const bcrypt = require('bcrypt');
// // const { transporter, mailOptions } = require('./nodemailerConfig');
// // const jwt = require('jsonwebtoken');

// // const registerRoute = express.Router();

// // registerRoute.get("/", (req, res) => {
// //   res.send("register page");
// // });

// // // Initial registration
// // registerRoute.post("/", async (req, res) => {
// //   const data = req.body;
// //   try {
// //     const existingUser = await Register.findOne({
// //       where: { email: data.email },
// //       attributes: ['userName', 'email', 'phoneNumber', 'password']
// //     });

// //     if (existingUser) {
// //       return res.status(409).send("User already registered");
// //     }

// //     const hash = await bcrypt.hash(data.password, 10);
// //     const otp = Math.floor(100000 + Math.random() * 900000);
// //     let companyId = null;

// //     if (data.role === 'admin') {
// //       if (!data.companyName || !data.licenceNumber || !data.address1 || !data.postalCode) {
// //         return res.status(400).send("Missing bus company details for admin registration");
// //       }

// //       const newCompany = await BusCompany.create({
// //         companyId: uuidv4(),
// //         companyName: data.companyName,
// //         licenceNumber: data.licenceNumber,
// //         address1: data.address1,
// //         address2: data.address2,
// //         postalCode: data.postalCode,
// //       });
// //       companyId = newCompany.companyId;
// //     }

// //     const newUser = await Register.create({
// //       registerId: uuidv4(),
// //       userName: data.userName,
// //       email: data.email,
// //       phoneNumber: data.phoneNumber,
// //       password: hash,
// //       otp,
// //       status: 'pending',
// //       role: data.role,
// //       companyId,
// //     });

// //     const tokenPayload = {
// //       userId: newUser.registerId,
// //     };

// //     const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

// //     const emailOptions = {
// //       ...mailOptions,
// //       to: data.email,
// //       text: `Your OTP for account verification is: ${otp}`,
// //     };

// //     await transporter.sendMail(emailOptions);

// //     res.json({ message: "User registered successfully. OTP sent to email.", token });

// //   } catch (error) {
// //     console.error('Error during registration:', error);
// //     res.status(500).send("Error while user registration");
// //   }
// // });

// // // Verify OTP and update role, age, gender
// // registerRoute.post("/verifyOtp", async (req, res) => {
// //   const { email, otp, role, age, gender } = req.body;
// //   try {
// //     // Find user by email and OTP
// //     const user = await Register.findOne({ where: { email, otp } });

// //     if (!user) {
// //       return res.status(400).send("Invalid OTP");
// //     }

// //     // Update user details
// //     user.role = role;
// //     user.age = age;
// //     user.gender = gender;
// //     user.status = 'active';  // Update status to active after successful OTP verification
// //     await user.save();

// //     const tokenPayload = {
// //       userId: user.registerId,
// //       role: user.role,
// //     };

// //     const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

// //     res.json({ message: "OTP verified successfully. User details updated.", token });

// //   } catch (error) {
// //     console.error('Error during OTP verification:', error);
// //     res.status(500).send("Error while verifying OTP");
// //   }
// // });

// // // Fetch all registered users with company details if applicable
// // registerRoute.get("/all", async (req, res) => {
// //   try {
// //     const users = await Register.findAll({
// //       attributes: ['userName', 'email', 'phoneNumber', 'role', 'age', 'gender', 'status'],
// //       include: {
// //         model: BusCompany,
// //         attributes: ['companyName', 'licenceNumber', 'address1', 'address2', 'postalCode'],
// //       },
// //     });

// //     res.json(users);
// //   } catch (error) {
// //     console.error('Error fetching all users:', error);
// //     res.status(500).send("Error while fetching all users");
// //   }
// // });

// // module.exports = registerRoute;

// // const express = require('express');
// // const { Register } = require('../db/registerModel');
// // const { BusCompany } = require('../db/BusCompany');
// // const { v4: uuidv4 } = require('uuid');
// // const bcrypt = require('bcrypt');
// // const { transporter, mailOptions } = require('./nodemailerConfig');
// // const jwt = require('jsonwebtoken');

// // const registerRoute = express.Router();

// // registerRoute.get("/", (req, res) => {
// //   res.send("register page");
// // });

// // // Initial registration
// // registerRoute.post("/", async (req, res) => {
// //   const data = req.body;
// //   try {
// //     const existingUser = await Register.findOne({
// //       where: { email: data.email },
// //       attributes: ['userName', 'email', 'phoneNumber', 'password']
// //     });

// //     if (existingUser) {
// //       return res.status(409).send("User already registered");
// //     }

// //     const hash = await bcrypt.hash(data.password, 10);
// //     const otp = Math.floor(100000 + Math.random() * 900000);
// //     let companyId = null;

// //     if (data.role === 'admin') {
// //       if (!data.companyName || !data.licenceNumber || !data.address1 || !data.postalCode) {
// //         return res.status(400).send("Missing bus company details for admin registration");
// //       }

// //       const newCompany = await BusCompany.create({
// //         companyId: uuidv4(),
// //         companyName: data.companyName,
// //         licenceNumber: data.licenceNumber,
// //         address1: data.address1,
// //         address2: data.address2,
// //         postalCode: data.postalCode,
// //       });
// //       companyId = newCompany.companyId;
// //     }

// //     const newUser = await Register.create({
// //       registerId: uuidv4(),
// //       userName: data.userName,
// //       email: data.email,
// //       phoneNumber: data.phoneNumber,
// //       password: hash,
// //       otp,
// //       status: 'pending',
// //       role: data.role,
// //       age: data.age,
// //       gender: data.gender,
// //       companyId,
// //     });

// //     const tokenPayload = {
// //       userId: newUser.registerId,
// //     };

// //     const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

// //     const emailOptions = {
// //       ...mailOptions,
// //       to: data.email,
// //       text: `Your OTP for account verification is: ${otp}`,
// //     };

// //     await transporter.sendMail(emailOptions);

// //     res.json({ message: "User registered successfully. OTP sent to email.", token });

// //   } catch (error) {
// //     console.error('Error during registration:', error);
// //     res.status(500).send("Error while user registration");
// //   }
// // });

// // // Verify OTP and update role, age, gender, and bus company details for admin
// // registerRoute.post("/verifyOtp", async (req, res) => {
// //   const { email, otp, role, age, gender, companyName, licenceNumber, address1, address2, postalCode } = req.body;
// //   try {
// //     const user = await Register.findOne({ where: { email, otp } });

// //     if (!user) {
// //       return res.status(400).send("Invalid OTP");
// //     }

// //     user.role = role;
// //     user.age = age;
// //     user.gender = gender;
// //     user.status = 'active';  // Update status to active after successful OTP verification
// //     await user.save();

// //     if (user.role === 'admin') {
// //       if (!companyName || !licenceNumber || !address1 || !postalCode) {
// //         return res.status(400).send("Missing bus company details for admin verification");
// //       }

// //       const existingCompany = await BusCompany.findOne({ where: { companyId: user.companyId } });

// //       if (existingCompany) {
// //         existingCompany.companyName = companyName;
// //         existingCompany.licenceNumber = licenceNumber;
// //         existingCompany.address1 = address1;
// //         existingCompany.address2 = address2;
// //         existingCompany.postalCode = postalCode;
// //         await existingCompany.save();
// //       } else {
// //         return res.status(400).send("Bus company details not found for admin");
// //       }
// //     }

// //     const tokenPayload = {
// //       userId: user.registerId,
// //       role: user.role,
// //     };

// //     const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

// //     res.json({ message: "OTP verified successfully. User details updated.", token });

// //   } catch (error) {
// //     console.error('Error during OTP verification:', error);
// //     res.status(500).send("Error while verifying OTP");
// //   }
// // });

// // // Fetch all registered users
// // registerRoute.get("/all", async (req, res) => {
// //   try {
// //     const users = await Register.findAll({
// //       attributes: ['userName', 'email', 'phoneNumber', 'role', 'age', 'gender', 'status'],
// //       include: {
// //         model: BusCompany,
// //         attributes: ['companyName', 'licenceNumber', 'address1', 'address2', 'postalCode'],
// //       },
// //     });

// //     res.json(users);
// //   } catch (error) {
// //     console.error('Error fetching all users:', error);
// //     res.status(500).send("Error while fetching all users");
// //   }
// // });

// // module.exports = registerRoute;

// // const express = require('express');
// // const { Register } = require('../db/registerModel');
// // const { BusCompany } = require('../db/BusCompany');
// // const { v4: uuidv4 } = require('uuid');
// // const bcrypt = require('bcrypt');
// // const { transporter, mailOptions } = require('./nodemailerConfig');
// // const jwt = require('jsonwebtoken');

// // const registerRoute = express.Router();

// // registerRoute.get("/", (req, res) => {
// //   res.send("register page");
// // });

// // // Initial registration
// // registerRoute.post("/", async (req, res) => {
// //   const data = req.body;
// //   try {
// //     const existingUser = await Register.findOne({
// //       where: { email: data.email },
// //       attributes: ['userName', 'email', 'phoneNumber', 'password']
// //     });

// //     if (existingUser) {
// //       return res.status(409).send("User already registered");
// //     }

// //     const hash = await bcrypt.hash(data.password, 10);
// //     const otp = Math.floor(100000 + Math.random() * 900000);
// //     let companyId = null;

// //     if (data.role === 'admin') {
// //       if (!data.companyName || !data.licenceNumber || !data.address1 || !data.postalCode) {
// //         return res.status(400).send("Missing bus company details for admin registration");
// //       }

// //       const newCompany = await BusCompany.create({
// //         companyId: uuidv4(),
// //         companyName: data.companyName,
// //         licenceNumber: data.licenceNumber,
// //         address1: data.address1,
// //         address2: data.address2,
// //         postalCode: data.postalCode,
// //       });
// //       companyId = newCompany.companyId;
// //     }

// //     const newUser = await Register.create({
// //       registerId: uuidv4(),
// //       userName: data.userName,
// //       email: data.email,
// //       phoneNumber: data.phoneNumber,
// //       password: hash,
// //       otp,
// //       status: 'pending',
// //       role: data.role,
// //       age: data.age,
// //       gender: data.gender,
// //       companyId,
// //     });

// //     const tokenPayload = {
// //       userId: newUser.registerId,
// //     };

// //     const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

// //     const emailOptions = {
// //       ...mailOptions,
// //       to: data.email,
// //       text: `Your OTP for account verification is: ${otp}`,
// //     };

// //     await transporter.sendMail(emailOptions);

// //     res.json({ message: "User registered successfully. OTP sent to email.", token });

// //   } catch (error) {
// //     console.error('Error during registration:', error);
// //     res.status(500).send("Error while user registration");
// //   }
// // });

// // // Verify OTP and update role, age, gender, and bus company details for admin
// // registerRoute.post("/verifyOtp", async (req, res) => {
// //   const { email, otp, role, age, gender, companyName, licenceNumber, address1, address2, postalCode } = req.body;
// //   try {
// //     const user = await Register.findOne({ where: { email, otp } });

// //     if (!user) {
// //       return res.status(400).send("Invalid OTP");
// //     }

// //     // Update user details
// //     user.role = role;
// //     user.age = age;
// //     user.gender = gender;
// //     user.status = 'active';  // Update status to active after successful OTP verification
// //     user.otp = null;  // Set OTP to null after verification

// //     // Check if the user is an admin and update bus company details if necessary
// //     if (role === 'admin' && user.companyId) {
// //       if (!companyName || !licenceNumber || !address1 || !postalCode) {
// //         return res.status(400).send("Missing bus company details for admin verification");
// //       }

// //       const company = await BusCompany.findOne({ where: { companyId: user.companyId } });
// //       if (company) {
// //         company.companyName = companyName;
// //         company.licenceNumber = licenceNumber;
// //         company.address1 = address1;
// //         company.address2 = address2;
// //         company.postalCode = postalCode;
// //         await company.save();
// //       } else {
// //         return res.status(400).send("Bus company details not found for admin");
// //       }
// //     }

// //     await user.save();

// //     const tokenPayload = {
// //       userId: user.registerId,
// //       role: user.role,
// //     };

// //     const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

// //     res.json({ message: "OTP verified successfully. User details updated.", token });

// //   } catch (error) {
// //     console.error('Error during OTP verification:', error);
// //     res.status(500).send("Error while verifying OTP");
// //   }
// // });

// // // Fetch all registered users
// registerRoute.get("/all", async (req, res) => {
//   try {
//     const users = await Register.findAll({
//       attributes: ['userName', 'email', 'phoneNumber', 'role', 'age', 'gender', 'status'],
//       include: {
//         model: BusCompany,
//         attributes: ['companyName', 'licenceNumber', 'address1', 'address2', 'postalCode'],
//       },
//     });

//     res.json(users);
//   } catch (error) {
//     console.error('Error fetching all users:', error);
//     res.status(500).send("Error while fetching all users");
//   }
// });

// // module.exports = registerRoute;


// const express = require('express');
// const { Register } = require('../db/registerModel');
// const { BusCompany } = require('../db/BusCompany');
// const { v4: uuidv4 } = require('uuid');
// const bcrypt = require('bcrypt');
// const { transporter, mailOptions } = require('./nodemailerConfig');
// const jwt = require('jsonwebtoken');

// const registerRoute = express.Router();

// registerRoute.get("/", (req, res) => {
//   res.send("register page");
// });

// // Initial registration
// registerRoute.post("/", async (req, res) => {
//   const data = req.body;
//   try {
//     const existingUser = await Register.findOne({
//       where: { email: data.email },
//       attributes: ['userName', 'email', 'phoneNumber', 'password']
//     });

//     if (existingUser) {
//       return res.status(409).send("User already registered");
//     }

//     const hash = await bcrypt.hash(data.password, 10);
//     const otp = Math.floor(100000 + Math.random() * 900000);

//     const newUser = await Register.create({
//       registerId: uuidv4(),
//       userName: data.userName,
//       email: data.email,
//       phoneNumber: data.phoneNumber,
//       password: hash,
//       otp,
//       status: 'pending',
//       role: data.role,
//       age: null,
//       gender: null,
//       companyId: null,
//     });

//     const tokenPayload = {
//       userId: newUser.registerId,
//     };

//     const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

//     const emailOptions = {
//       ...mailOptions,
//       to: data.email,
//       text: `Your OTP for account verification is: ${otp}`,
//     };

//     await transporter.sendMail(emailOptions);

//     res.json({ message: "User registered successfully. OTP sent to email.", token });

//   } catch (error) {
//     console.error('Error during registration:', error);
//     res.status(500).send("Error while user registration");
//   }
// });

// // Verify OTP and update user details
// registerRoute.post("/verifyOtp", async (req, res) => {
//   const { email, otp, role, age, gender, companyName, licenceNumber, address1, address2, postalCode } = req.body;
//   try {
//     const user = await Register.findOne({ where: { email, otp } });

//     if (!user) {
//       return res.status(400).send("Invalid OTP");
//     }

//     // Update user details
//     user.role = role;
//     user.age = age;
//     user.gender = gender;
//     user.status = 'active';  // Update status to active after successful OTP verification
//     user.otp = null;  // Set OTP to null after verification

//     if (role === 'admin') {
//       if (!companyName || !licenceNumber || !address1 || !postalCode) {
//         return res.status(400).send("Missing bus company details for admin verification");
//       }

//       const newCompany = await BusCompany.create({
//         companyId: uuidv4(),
//         companyName: companyName,
//         licenceNumber: licenceNumber,
//         address1: address1,
//         address2: address2,
//         postalCode: postalCode,
//       });
//       user.companyId = newCompany.companyId;
//     }

//     await user.save();

//     const tokenPayload = {
//       userId: user.registerId,
//       role: user.role,
//     };

//     const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

//     res.json({ message: "OTP verified successfully. User details updated.", token });

//   } catch (error) {
//     console.error('Error during OTP verification:', error);
//     res.status(500).send("Error while verifying OTP");
//   }
// });

// module.exports = registerRoute;



// const express = require('express');
// const { Register } = require('../db/registerModel');
// const { BusCompany } = require('../db/BusCompany');
// const { v4: uuidv4 } = require('uuid');
// const bcrypt = require('bcrypt');
// const { transporter, mailOptions } = require('./nodemailerConfig');
// const jwt = require('jsonwebtoken');

// const registerRoute = express.Router();

// registerRoute.get("/", (req, res) => {
//   res.send("register page");
// });

// // Initial registration
// registerRoute.post("/", async (req, res) => {
//   const data = req.body;
//   try {
//     const existingUser = await Register.findOne({
//       where: { email: data.email },
//       attributes: ['userName', 'email', 'phoneNumber', 'password']
//     });

//     if (existingUser) {
//       return res.status(409).send("User already registered");
//     }

//     const hash = await bcrypt.hash(data.password, 10);
//     const otp = Math.floor(100000 + Math.random() * 900000);

//     const newUser = await Register.create({
//       registerId: uuidv4(),
//       userName: data.userName,
//       email: data.email,
//       phoneNumber: data.phoneNumber,
//       password: hash,
//       otp,
//       status: 'pending',
//       role: data.role,
//     });

//     const tokenPayload = {
//       userId: newUser.registerId,
//     };

//     const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

//     const emailOptions = {
//       ...mailOptions,
//       to: data.email,
//       text: `Your OTP for account verification is: ${otp}`,
//     };

//     await transporter.sendMail(emailOptions);

//     res.json({ message: "User registered successfully. OTP sent to email.", token });

//   } catch (error) {
//     console.error('Error during registration:', error);
//     res.status(500).send("Error while user registration");
//   }
// });

// // Verify OTP and update user details
// registerRoute.post("/verifyOtp", async (req, res) => {
//   const { email, otp, role, age, gender, companyName, licenceNumber, address1, address2, postalCode } = req.body;
//   try {
//     const user = await Register.findOne({ where: { email, otp } });

//     if (!user) {
//       return res.status(400).send("Invalid OTP");
//     }

//     // Update user details
//     user.role = role;
//     user.age = age;
//     user.gender = gender;
//     user.status = 'active';  // Update status to active after successful OTP verification
//     user.otp = null;  // Set OTP to null after verification

//     if (role === 'admin') {
//       if (!companyName || !licenceNumber || !address1 || !postalCode) {
//         return res.status(400).send("Missing bus company details for admin verification");
//       }

//       const newCompany = await BusCompany.create({
//         companyId: uuidv4(),
//         companyName: companyName,
//         licenceNumber: licenceNumber,
//         address1: address1,
//         address2: address2,
//         postalCode: postalCode,
//       });
//       user.companyId = newCompany.companyId;
//     }

//     await user.save();

//     const tokenPayload = {
//       userId: user.registerId,
//       role: user.role,
//     };

//     const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

//     res.json({ message: "OTP verified successfully. User details updated.", token });

//   } catch (error) {
//     console.error('Error during OTP verification:', error);
//     res.status(500).send("Error while verifying OTP");
//   }
// });

// module.exports = registerRoute;


// const express = require('express');
// const { Register } = require('../db/registerModel');
// const { BusCompany } = require('../db/BusCompany');
// const { v4: uuidv4 } = require('uuid');
// const bcrypt = require('bcrypt');
// const { transporter, mailOptions } = require('./nodemailerConfig');
// const jwt = require('jsonwebtoken');

// const registerRoute = express.Router();

// // Route: GET /register
// registerRoute.get("/", (req, res) => {
//   res.send("Register page");
// });

// // Route: POST /register
// // Initial registration
// registerRoute.post("/", async (req, res) => {
//   const data = req.body;
//   try {
//     const existingUser = await Register.findOne({
//       where: { email: data.email },
//       attributes: ['userName', 'email', 'phoneNumber', 'password']
//     });

//     if (existingUser) {
//       return res.status(409).send("User already registered");
//     }

//     const hash = await bcrypt.hash(data.password, 10);
//     const otp = Math.floor(100000 + Math.random() * 900000);

//     const newUser = await Register.create({
//       registerId: uuidv4(),
//       userName: data.userName,
//       email: data.email,
//       phoneNumber: data.phoneNumber,
//       password: hash,
//       otp,
//       status: 'pending',
//       role: data.role,
//       age: null,
//       gender: null,
//       companyId: null,
//     });

//     const tokenPayload = {
//       userId: newUser.registerId,
//     };

//     const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

//     const emailOptions = {
//       ...mailOptions,
//       to: data.email,
//       text: `Your OTP for account verification is: ${otp}`,
//     };

//     await transporter.sendMail(emailOptions);

//     res.json({ message: "User registered successfully. OTP sent to email.", token });

//   } catch (error) {
//     console.error('Error during registration:', error);
//     res.status(500).send("Error while user registration");
//   }
// });

// // Route: POST /register/verifyOtp
// // Verify OTP and update user details
// registerRoute.post("/verifyOtp", async (req, res) => {
//   const { email, otp, role, age, gender, companyName, licenceNumber, address1, address2, postalCode } = req.body;
//   try {
//     const user = await Register.findOne({ where: { email, otp } });

//     if (!user) {
//       return res.status(400).send("Invalid OTP");
//     }

//     // Update user details
//     user.role = role;
//     user.age = age;
//     user.gender = gender;
//     user.status = 'active';  // Update status to active after successful OTP verification
//     user.otp = null;  // Set OTP to null after verification

//     if (role === 'admin') {
//       // Check for missing company details
//       if (!companyName || !licenceNumber || !address1 || !postalCode) {
//         return res.status(400).send("Missing bus company details for admin verification");
//       }

//       // Create new bus company
//       const newCompany = await BusCompany.create({
//         companyId: uuidv4(),
//         companyName: companyName,
//         licenceNumber: licenceNumber,
//         address1: address1,
//         address2: address2,
//         postalCode: postalCode,
//       });

//       // Assign companyId to the user
//       user.companyId = newCompany.companyId;
//     }

//     // Save user changes
//     await user.save();

//     const tokenPayload = {
//       userId: user.registerId,
//       role: user.role,
//     };

//     const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

//     res.json({ message: "OTP verified successfully. User details updated.", token });

//   } catch (error) {
//     console.error('Error during OTP verification:', error);
//     res.status(500).send("Error while verifying OTP");
//   }
// });

// module.exports = registerRoute;






// // Import required modules
// const express = require('express');
// const { Register } = require('../db/registerModel'); // Assuming this is your Sequelize Register model
// const { BusCompany } = require('../db/BusCompany'); // Assuming this is your Sequelize BusCompany model
// const { v4: uuidv4 } = require('uuid');
// const bcrypt = require('bcrypt');
// const { transporter, mailOptions } = require('./nodemailerConfig'); // Assuming you have nodemailer configured
// const jwt = require('jsonwebtoken');

// // Initialize Express router
// const registerRoute = express.Router();

// // Define route for initial registration (POST /register)
// registerRoute.post("/", async (req, res) => {
//   const data = req.body;
//   try {
//     // Check if user already exists
//     const existingUser = await Register.findOne({
//       where: { email: data.email },
//       attributes: ['userName', 'email', 'phoneNumber', 'password']
//     });

//     if (existingUser) {
//       return res.status(409).send("User already registered");
//     }

//     // Hash password
//     const hash = await bcrypt.hash(data.password, 10);
//     // Generate OTP
//     const otp = Math.floor(100000 + Math.random() * 900000);

//     // Create new user record
//     const newUser = await Register.create({
//       registerId: uuidv4(),
//       userName: data.userName,
//       email: data.email,
//       phoneNumber: data.phoneNumber,
//       password: hash,
//       otp,
//       status: 'pending',
//       role: data.role,
//       age: null,
//       gender: null,
//       companyId: null, // Assuming companyId is a foreign key to BusCompany table
//     });

//     // Generate JWT token
//     const tokenPayload = {
//       userId: newUser.registerId,
//     };
//     const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

//     // Configure email options
//     const emailOptions = {
//       ...mailOptions,
//       to: data.email,
//       text: `Your OTP for account verification is: ${otp}`,
//     };

//     // Send OTP via email
//     await transporter.sendMail(emailOptions);

//     // Send response
//     res.json({ message: "User registered successfully. OTP sent to email.", token });

//   } catch (error) {
//     console.error('Error during registration:', error);
//     res.status(500).send("Error while user registration");
//   }
// });

// // Define route for OTP verification and user details update (POST /register/verifyOtp)
// registerRoute.post("/verifyOtp", async (req, res) => {
//   const { email, otp, role, age, gender, companyName, licenceNumber, address1, address2, postalCode } = req.body;
  
//   try {
//     // Find user by email and OTP
//     const user = await Register.findOne({ where: { email, otp } });

//     // If user not found with provided email and OTP
//     if (!user) {
//       return res.status(400).send("Invalid OTP");
//     }

//     // Update user details
//     user.role = role;
//     user.age = age;
//     user.gender = gender;
//     user.status = 'active';  // Update status to active after successful OTP verification
//     user.otp = null;  // Set OTP to null after verification

//     // If user role is admin, verify and save bus company details
//     if (role === 'admin') {
//       // Check if all admin details are provided
//       if (!companyName || !licenceNumber || !address1 || !postalCode) {
//         return res.status(400).send("Missing bus company details for admin verification");
//       }

//       // Create a new BusCompany record
//       const newCompany = await BusCompany.create({
//         companyId: uuidv4(),
//         companyName: companyName,
//         licenceNumber: licenceNumber,
//         address1: address1,
//         address2: address2 || null,
//         postalCode: postalCode,
//       });
//       user.companyId = newCompany.companyId;
//     }

//     // Save updated user details
//     await user.save();

//     // Generate JWT token
//     const tokenPayload = {
//       userId: user.registerId,
//       role: user.role,
//     };
//     const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

//     // Send response
//     res.json({ message: "OTP verified successfully. User details updated.", token });

//   } catch (error) {
//     console.error('Error during OTP verification:', error);
//     res.status(500).send("Error while verifying OTP");
//   }
// });

// // Export the router for use in the main Express application
// module.exports = registerRoute;

const express = require('express');
const { Register } = require('../db/registerModel');
const { BusCompany } = require('../db/BusCompany');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const { transporter, mailOptions } = require('./nodemailerConfig');
const jwt = require('jsonwebtoken');

const registerRoute = express.Router();


registerRoute.post("/", async (req, res) => {
  const data = req.body;
  try {
   
    const existingUser = await Register.findOne({
      where: { email: data.email },
      attributes: ['userName', 'email', 'phoneNumber', 'password']
    });

    if (existingUser) {
      return res.status(409).send("User already registered");
    }


    const hash = await bcrypt.hash(data.password, 10);
    
    const otp = Math.floor(100000 + Math.random() * 900000);


    const newUser = await Register.create({
      registerId: uuidv4(),
      userName: data.userName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: hash,
      otp,
      status: 'pending',
      role: data.role,
      age: null,
      gender: null,
      companyId: null, 
    });

   
    const tokenPayload = {
      userId: newUser.registerId,
    };
    const token = jwt.sign(tokenPayload, 'your_jwt_secret_key', { expiresIn: '1h' });

 
    const emailOptions = {
      ...mailOptions,
      to: data.email,
      text: `Your OTP for account verification is: ${otp}`,
    };

    
    await transporter.sendMail(emailOptions);


    res.json({ message: "User registered successfully. OTP sent to email.", token });

  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send("Error while user registration");
  }
});


registerRoute.post("/verifyOtp", async (req, res) => {
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

registerRoute.get("/all", async (req, res) => {
  try {
    const users = await Register.findAll({
      attributes: ['userName', 'email', 'phoneNumber', 'role', 'age', 'gender', 'status'],
      include: {
        model: BusCompany,
        attributes: ['companyName', 'licenceNumber', 'address1', 'address2', 'postalCode'],
      },
    });

    res.json(users);
  } catch (error) {
    console.error('Error fetching all users:', error);
    res.status(500).send("Error while fetching all users");
  }
});

module.exports = registerRoute;

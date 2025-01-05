// // routes/bookingRoutes.js

// const express = require('express');
// const router = express.Router();
// const { getUserBookings, getBusBookings, search, create, cancel } = require('../controllers/booking');

// // Middleware to protect routes, if needed
// // const authenticate = require('../middleware/authenticate');

// // GET user's bookings
// // router.get('/user-bookings', authenticate, getUserBookings);
// router.get('/user-bookings', getUserBookings);

// // GET bookings for a specific bus
// router.get('/bus-bookings/:busId', getBusBookings);

// // POST search for buses based on route, date, and availability
// router.post('/search', search);

// // POST create a new booking
// // router.post('/create', authenticate, create);
// router.post('/create',create);

// // PUT cancel a booking
// // router.put('/cancel/:bookingId', authenticate, cancel);
// router.put('/cancel/:bookingId', cancel);

// module.exports = router;

const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking');


router.post('/', bookingController.createBooking);


router.get('/', bookingController.getAllBookings);


router.get(':id', bookingController.getBookingById);

module.exports = router;


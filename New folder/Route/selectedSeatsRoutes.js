

const express = require('express');
const router = express.Router();
const selectedSeatsController = require('../controllers/SelectedSeatsController');


router.post('/', selectedSeatsController.createBooking);


router.get('/:busId', selectedSeatsController.getBookingsByBusId);

router.get('/seats/:busId', selectedSeatsController.getSelectedSeatsByBusId);


router.delete('/:busId/:selectedSeat', selectedSeatsController.deleteBookingsByBusIdAndSelectedSeat);



router.get('/', selectedSeatsController.getAllBookings);

module.exports = router;

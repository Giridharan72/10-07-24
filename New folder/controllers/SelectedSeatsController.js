// // controllers/selectedSeatsController.js

// const {SelectedSeats} = require('../db/SelectedSeats');

// // Controller methods
// const createBooking = async (req, res) => {
//   try {
//     const { busId, from, to, selectedSeats, bookingDate } = req.body;
//     const booking = await SelectedSeats.create({
//       busId,
//       from,
//       to,
//       selectedSeats,
//       bookingDate,
//       gender,
//     });
//     res.status(201).json(booking);
//   } catch (error) {
//     console.error('Error creating booking:', error);
//     res.status(500).json({ error: 'Failed to create booking' });
//   }
// };

// const getBookingsByBusId = async (req, res) => {
//   const { busId } = req.params;
//   try {
//     const bookings = await SelectedSeats.findAll({
//       where: {
//         busId: busId,
//       },
//     });
//     res.status(200).json(bookings);
//   } catch (error) {
//     console.error('Error fetching bookings by busId:', error);
//     res.status(500).json({ error: 'Failed to fetch bookings' });
//   }
// };

// const getSelectedSeatsByBusId = async (req, res) => {
//     const { busId } = req.params;
//     try {
//       const selectedSeats = await SelectedSeats.findAll({
//         where: { busId },
//         attributes: ['from', 'to', 'selectedSeats', 'bookingDate'],
//       });
//       res.status(200).json(selectedSeats);
//     } catch (error) {
//       console.error('Error fetching selected seats by busId:', error);
//       res.status(500).json({ error: 'Failed to fetch selected seats' });
//     }
//   };
  

// module.exports = {
//   createBooking,
//   getBookingsByBusId,
//   getSelectedSeatsByBusId
// };

// controllers/selectedSeatsController.js

// const { SelectedSeats } = require('../db/SelectedSeats'); // Adjust the path as per your project structure

// // Controller methods
// const createBooking = async (req, res) => {
//   try {
//     const { busId, from, to, selectedSeats, bookingDate, gender } = req.body; // Include gender from req.body
//     const booking = await SelectedSeats.create({
//       busId,
//       from,
//       to,
//       selectedSeats,
//       bookingDate,
//       gender,
//     });
//     res.status(201).json(booking);
//   } catch (error) {
//     console.error('Error creating booking:', error);
//     res.status(500).json({ error: 'Failed to create booking' });
//   }
// };

// const getBookingsByBusId = async (req, res) => {
//   const { busId } = req.params;
//   try {
//     const bookings = await SelectedSeats.findAll({
//       where: {
//         busId: busId,
//       },
//     });
//     res.status(200).json(bookings);
//   } catch (error) {
//     console.error('Error fetching bookings by busId:', error);
//     res.status(500).json({ error: 'Failed to fetch bookings' });
//   }
// };

// const getSelectedSeatsByBusId = async (req, res) => {
//   const { busId } = req.params;
//   try {
//     const selectedSeats = await SelectedSeats.findAll({
//       where: { busId },
//       attributes: ['from', 'to', 'selectedSeats', 'bookingDate'],
//     });
//     res.status(200).json(selectedSeats);
//   } catch (error) {
//     console.error('Error fetching selected seats by busId:', error);
//     res.status(500).json({ error: 'Failed to fetch selected seats' });
//   }
// };

// module.exports = {
//   createBooking,
//   getBookingsByBusId,
//   getSelectedSeatsByBusId
// };


const { SelectedSeats } = require('../db/SelectedSeats'); 
const { Sequelize, DataTypes, Op } = require('sequelize');

const createBooking = async (req, res) => {
  try {
    const { busId, from, to, selectedSeats, bookingDate, gender } = req.body; 
    const booking = await SelectedSeats.create({
      busId,
      from,
      to,
      selectedSeats,
      bookingDate,
      gender,
    });
    res.status(201).json(booking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
};

const getBookingsByBusId = async (req, res) => {
  const { busId } = req.params;
  try {
    const bookings = await SelectedSeats.findAll({
      where: {
        busId: busId,
      },
    });
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings by busId:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};

const getSelectedSeatsByBusId = async (req, res) => {
  const { busId } = req.params;
  try {
    const selectedSeats = await SelectedSeats.findAll({
      where: { busId },
      attributes: ['from', 'to', 'selectedSeats', 'bookingDate','gender'],
    });
    res.status(200).json(selectedSeats);
  } catch (error) {
    console.error('Error fetching selected seats by busId:', error);
    res.status(500).json({ error: 'Failed to fetch selected seats' });
  }
};

// const deleteBookingsByBusIdAndSelectedSeat = async (req, res) => {
//   const { busId, selectedSeat } = req.params;
//   try {
//     const deletedRows = await SelectedSeats.deleteByBusIdAndSelectedSeat(busId, selectedSeat);
//     res.status(200).json({ deletedRows });
//   } catch (error) {
//     console.error(`Error deleting bookings for busId ${busId} and selectedSeat ${selectedSeat}:`, error);
//     res.status(500).json({ error: 'Failed to delete bookings' });
//   }
// };
  // Controller method to delete bookings by busId and selectedSeat
// const deleteBookingsByBusIdAndSelectedSeat = async (req, res) => {
//   const { busId, selectedSeat } = req.params;
//   try {
//     const deletedRows = await SelectedSeats.destroy({
//       where: {
//         busId,
//         selectedSeats: { [sequelize.Sequelize.Op.contains]: [selectedSeat] }
//       }
//     });
//     res.status(200).json({ deletedRows });
//   } catch (error) {
//     console.error(`Error deleting bookings for busId ${busId} and selectedSeat ${selectedSeat}:`, error);
//     res.status(500).json({ error: 'Failed to delete bookings' });
//   }
// };
// Controller method to delete bookings by busId and selectedSeat
// const deleteBookingsByBusIdAndSelectedSeat = async (req, res) => {
//   const { busId, selectedSeats } = req.params;
//   try {
//     const deletedRows = await SelectedSeats.destroy({
//       where: {
//         busId,
//         selectedSeats: { [Sequelize.Op.contains]: [selectedSeat] }
//       }
//     });
//     res.status(200).json({ deletedRows });
//   } catch (error) {
//     console.error(`Error deleting bookings for busId ${busId} and selectedSeat ${selectedSeat}:`, error);
//     res.status(500).json({ error: 'Failed to delete bookings' });
//   }
// };

// Controller method to delete bookings by busId and selectedSeat
// Controller method to delete bookings by busId and selectedSeat

// Controller method to delete bookings by busId and selectedSeat
// const deleteBookingsByBusIdAndSelectedSeat = async (req, res) => {
//   const { busId, selectedSeat } = req.params;
//   console.log(`Attempting to delete booking with busId: ${busId} and selectedSeat: ${selectedSeat}`);
  
//   try {
//     const deletedRows = await SelectedSeats.destroy({
//       where: {
//         busId,
//         selectedSeats: { [Sequelize.Op.contains]: [selectedSeat] }
//       }
//     });

//     if (deletedRows === 0) {
//       console.log(`No bookings found to delete for busId: ${busId} and selectedSeat: ${selectedSeat}`);
//       return res.status(404).json({ message: 'No bookings found to delete' });
//     }
    
//     console.log(`Successfully deleted ${deletedRows} bookings for busId: ${busId} and selectedSeat: ${selectedSeat}`);
//     res.status(200).json({ deletedRows });
//   } catch (error) {
//     console.error(`Error deleting bookings for busId ${busId} and selectedSeat ${selectedSeat}:`, error);
//     res.status(500).json({ error: 'Failed to delete bookings' });
//   }
// };
// Controller method to delete bookings by busId and selectedSeat
const deleteBookingsByBusIdAndSelectedSeat = async (req, res) => {
  const { busId, selectedSeat } = req.params;
  console.log(`Attempting to delete booking with busId: ${busId} and selectedSeat: ${selectedSeat}`);
  
  try {
    const deletedRows = await SelectedSeats.destroy({
      where: {
        busId,
        selectedSeats: { [Op.contains]: [selectedSeat] }
      }
    });

    if (deletedRows === 0) {
      console.log(`No bookings found to delete for busId: ${busId} and selectedSeat: ${selectedSeat}`);
      return res.status(404).json({ message: 'No bookings found to delete' });
    }
    
    console.log(`Successfully deleted ${deletedRows} bookings for busId: ${busId} and selectedSeat: ${selectedSeat}`);
    res.status(200).json({ deletedRows });
  } catch (error) {
    console.error(`Error deleting bookings for busId ${busId} and selectedSeat ${selectedSeat}:`, error);
    res.status(500).json({ error: 'Failed to delete bookings' });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await SelectedSeats.findAll();
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching all bookings:', error);
    res.status(500).json({ error: 'Failed to fetch all bookings' });
  }
};

module.exports = {
  createBooking,
  getBookingsByBusId,
  getSelectedSeatsByBusId,
  deleteBookingsByBusIdAndSelectedSeat,
  getAllBookings
};



// const { Bus } = require('../db/bus');
// const { Route } = require('../db/route_Model');
// const { Facility } = require('../db/facilityModel');
// const { Review } = require('../db/reviewModel');
// const { Availability } = require('../db/availabilityModel');
// const { Op } = require('sequelize');

// // Create a new bus record
// const createBus = async (req, res) => {
//   const {
//     busName,
//     busNumber,
//     capacity,
//     busType,
//     numberOfSeats,
//     contactNumber,
//     fare,
//     from,
//     to,
//     busRoute,
//     busRouteTimes,
//     busRouteFares,
//     runsOnDays,
//     departure,
//     arrival,
//     facilities,
//     reviews,
//     datesAvailable
//   } = req.body;

//   try {
//     // Check if required fields are present in the request body
//     if (!busName || !busNumber || !capacity || !busType || !numberOfSeats) {
//       return res.status(400).json({ error: 'busName, busNumber, capacity, busType, and numberOfSeats are required fields' });
//     }

//     // Proceed with creating the new bus record
//     const newBus = await Bus.create({
//       busName,
//       busNumber,
//       capacity,
//       busType,
//       numberOfSeats,
//       contactNumber,
//       fare
//     });

//     const route = await Route.create({
//       busId: newBus.busId,
//       from,
//       to,
//       busRoute,
//       busRouteTimes,
//       busRouteFares,
//       runsOnDays,
//       departure,
//       arrival
//     });

//     const facility = await Facility.create({
//       busId: newBus.busId,
//       facilities
//     });

//     const review = await Review.create({
//       busId: newBus.busId,
//       reviews
//     });

//     const availability = await Availability.create({
//       busId: newBus.busId,
//       datesAvailable
//     });

//     res.status(201).json({ bus: newBus, route, facility, review, availability });
//   } catch (error) {
//     console.error('Error creating bus record:', error);
//     res.status(500).json({ error: 'Error creating bus record' });
//   }
// };

// // Function to check bus availability based on from and to stops
// function isBusAvailable(from, to, routes) {
//   const fromIndex = routes.indexOf(from);
//   const toIndex = routes.indexOf(to);

//   // Check if both stops are in the route and 'from' stop comes before 'to' stop
//   return fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex;
// }

// // Get all bus records or search buses by query parameters
// const getAllBuses = async (req, res) => {
//   const { from, to, datesAvailable } = req.query;

//   try {
//     let buses;

//     // Fetch buses based on datesAvailable if provided
//     if (datesAvailable) {
//       buses = await Bus.findAll({
//         include: [
//           {
//             model: Availability,
//             where: {
//               datesAvailable: { [Op.contains]: [datesAvailable] }
//             }
//           },
//           Route,
//           Facility,
//           Review
//         ]
//       });
//     } else {
//       // Fetch all buses
//       buses = await Bus.findAll({
//         include: [Route, Facility, Review, Availability]
//       });
//     }

//     // Further filter buses based on the availability of the route
//     if (from && to) {
//       buses = buses.filter(bus => bus.Route && isBusAvailable(from, to, bus.Route.busRoute));
//     }

//     res.status(200).json(buses);
//   } catch (error) {
//     console.error('Error fetching buses:', error);
//     res.status(500).json({ error: 'Error fetching bus records' });
//   }
// };

// // Get a single bus record by ID
// const getBusById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const bus = await Bus.findByPk(id, { include: [Route, Facility, Review, Availability] });
//     if (!bus) {
//       return res.status(404).json({ error: 'Bus not found' });
//     }
//     res.status(200).json(bus);
//   } catch (error) {
//     console.error('Error fetching bus by ID:', error);
//     res.status(500).json({ error: 'Error fetching bus record' });
//   }
// };

// // Update a bus record by ID
// const updateBusById = async (req, res) => {
//   const { id } = req.params;
//   const {
//     busName,
//     busNumber,
//     capacity,
//     busType,
//     numberOfSeats,
//     contactNumber,
//     fare,
//     from,
//     to,
//     busRoute,
//     busRouteTimes,
//     busRouteFares,
//     runsOnDays,
//     departure,
//     arrival,
//     facilities,
//     reviews,
//     datesAvailable
//   } = req.body;

//   try {
//     const bus = await Bus.findByPk(id);
//     if (!bus) {
//       return res.status(404).json({ error: 'Bus not found' });
//     }

//     await bus.update({
//       busName,
//       busNumber,
//       capacity,
//       busType,
//       numberOfSeats,
//       contactNumber,
//       fare
//     });

//     await Route.update({
//       from,
//       to,
//       busRoute,
//       busRouteTimes,
//       busRouteFares,
//       runsOnDays,
//       departure,
//       arrival
//     }, { where: { busId: id } });

//     await Facility.update({
//       facilities
//     }, { where: { busId: id } });

//     await Review.update({
//       reviews
//     }, { where: { busId: id } });

//     await Availability.update({
//       datesAvailable
//     }, { where: { busId: id } });

//     res.status(200).json({ message: 'Bus updated successfully', bus });
//   } catch (error) {
//     console.error('Error updating bus by ID:', error);
//     res.status(500).json({ error: 'Error updating bus record' });
//   }
// };

// // Delete a bus record by ID
// const deleteBusById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const bus = await Bus.findByPk(id);
//     if (!bus) {
//       return res.status(404).json({ error: 'Bus not found' });
//     }

//     await Route.destroy({ where: { busId: id } });
//     await Facility.destroy({ where: { busId: id } });
//     await Review.destroy({ where: { busId: id } });
//     await Availability.destroy({ where: { busId: id } });
//     await bus.destroy();

//     res.status(200).json({ message: 'Bus deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting bus by ID:', error);
//     res.status(500).json({ error: 'Error deleting bus record' });
//   }
// };

// module.exports = {
//   createBus,
//   getAllBuses,
//   getBusById,
//   updateBusById,
//   deleteBusById
// };


// const { Bus } = require('../db/bus');
// const { Route } = require('../db/route_Model');
// const { Facility } = require('../db/facilityModel');
// const { Review } = require('../db/reviewModel');
// const { Availability } = require('../db/availabilityModel');
// const { Op, DataTypes } = require('sequelize');
// const { sequelize } = require('../db/dbConnectionsModel');

// // Function to calculate total fare between 'from' and 'to' stops
// function calculateTotalFare(from, to, routes) {
//   const fromIndex = routes.indexOf(from);
//   const toIndex = routes.indexOf(to);

//   // Check if both stops are in the route and 'from' stop comes before 'to' stop
//   if (fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex) {
//     let totalFare = 0;
//     for (let i = fromIndex; i < toIndex; i++) {
//       totalFare += routes.busRouteFares[i]; // Summing up fares based on indices
//     }
//     return totalFare;
//   } else {
//     return null; // Invalid route or stops
//   }
// }

// // Create a new bus record
// const createBus = async (req, res) => {
//   const {
//     busName,
//     busNumber,
//     capacity,
//     busType,
//     numberOfSeats,
//     contactNumber,
//     fare,
//     from,
//     to,
//     busRoute,
//     busRouteTimes,
//     busRouteFares,
//     runsOnDays,
//     departure,
//     arrival,
//     facilities,
//     reviews,
//     datesAvailable
//   } = req.body;

//   let transaction;
//   try {
//     transaction = await sequelize.transaction();

//     // Check if required fields are present in the request body
//     if (!busName || !busNumber || !capacity || !busType || !numberOfSeats) {
//       return res.status(400).json({ error: 'busName, busNumber, capacity, busType, and numberOfSeats are required fields' });
//     }

//     // Proceed with creating the new bus record
//     const newBus = await Bus.create({
//       busName,
//       busNumber,
//       capacity,
//       busType,
//       numberOfSeats,
//       contactNumber,
//       fare
//     }, { transaction });

//     const route = await Route.create({
//       busId: newBus.busId,
//       from,
//       to,
//       busRoute,
//       busRouteTimes,
//       busRouteFares,
//       runsOnDays,
//       departure,
//       arrival
//     }, { transaction });

//     const facility = await Facility.create({
//       busId: newBus.busId,
//       facilities
//     }, { transaction });

//     const review = await Review.create({
//       busId: newBus.busId,
//       reviews
//     }, { transaction });

//     const availability = await Availability.create({
//       busId: newBus.busId,
//       datesAvailable
//     }, { transaction });

//     await transaction.commit();

//     res.status(201).json({ bus: newBus, route, facility, review, availability });
//   } catch (error) {
//     if (transaction) await transaction.rollback();
//     console.error('Error creating bus record:', error);
//     res.status(500).json({ error: 'Error creating bus record' });
//   }
// };

// // Function to check bus availability based on from and to stops
// function isBusAvailable(from, to, routes) {
//   const fromIndex = routes.indexOf(from);
//   const toIndex = routes.indexOf(to);

//   // Check if both stops are in the route and 'from' stop comes before 'to' stop
//   return fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex;
// }

// // Get all bus records or search buses by query parameters
// const getAllBuses = async (req, res) => {
//   const { from, to, datesAvailable } = req.query;

//   try {
//     let buses;

//     // Fetch buses based on datesAvailable if provided
//     if (datesAvailable) {
//       buses = await Bus.findAll({
//         include: [
//           {
//             model: Availability,
//             where: {
//               datesAvailable: { [Op.contains]: [datesAvailable] }
//             }
//           },
//           Route,
//           Facility,
//           Review
//         ]
//       });
//     } else {
//       // Fetch all buses
//       buses = await Bus.findAll({
//         include: [Route, Facility, Review, Availability]
//       });
//     }

//     // Further filter buses based on the availability of the route and calculate fare
//     if (from && to) {
//       buses = buses.filter(bus => {
//         if (bus.Route && isBusAvailable(from, to, bus.Route.busRoute)) {
//           bus.dataValues.totalFare = calculateTotalFare(from, to, bus.Route); // Calculate and add total fare
//           return true;
//         } else {
//           return false;
//         }
//       });
//     }

//     res.status(200).json(buses);
//   } catch (error) {
//     console.error('Error fetching buses:', error);
//     res.status(500).json({ error: 'Error fetching bus records' });
//   }
// };

// // Get a single bus record by ID
// const getBusById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const bus = await Bus.findByPk(id, { include: [Route, Facility, Review, Availability] });
//     if (!bus) {
//       return res.status(404).json({ error: 'Bus not found' });
//     }
//     res.status(200).json(bus);
//   } catch (error) {
//     console.error('Error fetching bus by ID:', error);
//     res.status(500).json({ error: 'Error fetching bus record' });
//   }
// };

// // Update a bus record by ID
// const updateBusById = async (req, res) => {
//   const { id } = req.params;
//   const {
//     busName,
//     busNumber,
//     capacity,
//     busType,
//     numberOfSeats,
//     contactNumber,
//     fare,
//     from,
//     to,
//     busRoute,
//     busRouteTimes,
//     busRouteFares,
//     runsOnDays,
//     departure,
//     arrival,
//     facilities,
//     reviews,
//     datesAvailable
//   } = req.body;

//   let transaction;
//   try {
//     transaction = await sequelize.transaction();

//     const bus = await Bus.findByPk(id, { transaction });
//     if (!bus) {
//       return res.status(404).json({ error: 'Bus not found' });
//     }

//     await bus.update({
//       busName,
//       busNumber,
//       capacity,
//       busType,
//       numberOfSeats,
//       contactNumber,
//       fare
//     }, { transaction });

//     await Route.update({
//       from,
//       to,
//       busRoute,
//       busRouteTimes,
//       busRouteFares,
//       runsOnDays,
//       departure,
//       arrival
//     }, { where: { busId: id }, transaction });

//     await Facility.update({
//       facilities
//     }, { where: { busId: id }, transaction });

//     await Review.update({
//       reviews
//     }, { where: { busId: id }, transaction });

//     await Availability.update({
//       datesAvailable
//     }, { where: { busId: id }, transaction });

//     await transaction.commit();

//     res.status(200).json({ message: 'Bus updated successfully' });
//   } catch (error) {
//     if (transaction) await transaction.rollback();
//     console.error('Error updating bus by ID:', error);
//     res.status(500).json({ error: 'Error updating bus record' });
//   }
// };

// // Delete a bus record by ID
// const deleteBusById = async (req, res) => {
//   const { id } = req.params;
//   let transaction;
//   try {
//     transaction = await sequelize.transaction();

//     const bus = await Bus.findByPk(id, { transaction });
//     if (!bus) {
//       return res.status(404).json({ error: 'Bus not found' });
//     }

//     await Route.destroy({ where: { busId: id }, transaction });
//     await Facility.destroy({ where: { busId: id }, transaction });
//     await Review.destroy({ where: { busId: id }, transaction });
//     await Availability.destroy({ where: { busId: id }, transaction });
//     await bus.destroy({ transaction });

//     await transaction.commit();

//     res.status(200).json({ message: 'Bus deleted successfully' });
//   } catch (error) {
//     if (transaction) await transaction.rollback();
//     console.error('Error deleting bus by ID:', error);
//     res.status(500).json({ error: 'Error deleting bus record' });
//   }
// };

// module.exports = {
//   createBus,
//   getAllBuses,
//   getBusById,
//   updateBusById,
//   deleteBusById
// };

const { Bus } = require('../db/bus');
const { Route } = require('../db/route_Model');
const { Facility } = require('../db/facilityModel');
const { Review } = require('../db/reviewModel');
const { Availability } = require('../db/availabilityModel');
const { Op } = require('sequelize');


function isBusAvailable(from, to, routes) {
  const fromIndex = routes.indexOf(from);
  const toIndex = routes.indexOf(to);

 
  return fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex;
}

function calculateTotalFare(from, to, route) {
  const fromIndex = route.busRoute.indexOf(from);
  const toIndex = route.busRoute.indexOf(to);

  if (fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex) {
    let totalFare = 0;
    for (let i = fromIndex; i < toIndex; i++) {
      totalFare += route.busRouteFares[i];
    }
    return totalFare;
  } else {
    return null; 
  }
}


const getAllBuses = async (req, res) => {
  const { from, to, date } = req.query;

  try {
    let buses;

   
    if (date && from && to) {
      buses = await Bus.findAll({
        include: [
          {
            model: Availability,
            where: {
              datesAvailable: { [Op.contains]: [date] }
            }
          },
          Route,
          Facility,
          Review
        ]
      });

     
      buses = buses.filter(bus => {
        if (bus.Route && isBusAvailable(from, to, bus.Route.busRoute)) {
          bus.dataValues.totalFare = calculateTotalFare(from, to, bus.Route); 
          return true;
        } else {
          return false;
        }
      });
    } else {
      
      buses = await Bus.findAll({
        include: [Route, Facility, Review, Availability]
      });
    }

    res.status(200).json(buses);
  } catch (error) {
    console.error('Error fetching buses:', error);
    res.status(500).json({ error: 'Error fetching bus records' });
  }
};


const getBusById = async (req, res) => {
  const { id } = req.params;
  try {
    const bus = await Bus.findByPk(id, {
      include: [Route, Facility, Review, Availability]
    });
    if (!bus) {
      return res.status(404).json({ error: 'Bus not found' });
    }
    res.status(200).json(bus);
  } catch (error) {
    console.error('Error fetching bus by ID:', error);
    res.status(500).json({ error: 'Error fetching bus record' });
  }
};


const createBus = async (req, res) => {
  const {
    busName,
    busNumber,
    capacity,
    busType,
    numberOfSeats,
    contactNumber,
    fare,
    from,
    to,
    busRoute,
    busRouteTimes,
    busRouteFares,
    runsOnDays,
    departure,
    arrival,
    facilities,
    reviews,
    datesAvailable
  } = req.body;

  try {
   
    if (!busName || !busNumber || !capacity || !busType || !numberOfSeats) {
      return res.status(400).json({ error: 'busName, busNumber, capacity, busType, and numberOfSeats are required fields' });
    }

 
    const newBus = await Bus.create({
      busName,
      busNumber,
      capacity,
      busType,
      numberOfSeats,
      contactNumber,
      fare
    });

    const route = await Route.create({
      busId: newBus.busId,
      from,
      to,
      busRoute,
      busRouteTimes,
      busRouteFares,
      runsOnDays,
      departure,
      arrival
    });

    const facility = await Facility.create({
      busId: newBus.busId,
      facilities
    });

    const review = await Review.create({
      busId: newBus.busId,
      reviews
    });

    const availability = await Availability.create({
      busId: newBus.busId,
      datesAvailable
    });

    res.status(201).json({ bus: newBus, route, facility, review, availability });
  } catch (error) {
    console.error('Error creating bus record:', error);
    res.status(500).json({ error: 'Error creating bus record' });
  }
};


const updateBusById = async (req, res) => {
  const { id } = req.params;
  const {
    busName,
    busNumber,
    capacity,
    busType,
    numberOfSeats,
    contactNumber,
    fare,
    from,
    to,
    busRoute,
    busRouteTimes,
    busRouteFares,
    runsOnDays,
    departure,
    arrival,
    facilities,
    reviews,
    datesAvailable
  } = req.body;

  try {
    const bus = await Bus.findByPk(id);
    if (!bus) {
      return res.status(404).json({ error: 'Bus not found' });
    }

    await bus.update({
      busName,
      busNumber,
      capacity,
      busType,
      numberOfSeats,
      contactNumber,
      fare
    });

    await Route.update({
      from,
      to,
      busRoute,
      busRouteTimes,
      busRouteFares,
      runsOnDays,
      departure,
      arrival
    }, { where: { busId: id } });

    await Facility.update({
      facilities
    }, { where: { busId: id } });

    await Review.update({
      reviews
    }, { where: { busId: id } });

    await Availability.update({
      datesAvailable
    }, { where: { busId: id } });

    res.status(200).json({ message: 'Bus updated successfully', bus });
  } catch (error) {
    console.error('Error updating bus by ID:', error);
    res.status(500).json({ error: 'Error updating bus record' });
  }
};


const deleteBusById = async (req, res) => {
  const { id } = req.params;
  try {
    const bus = await Bus.findByPk(id);
    if (!bus) {
      return res.status(404).json({ error: 'Bus not found' });
    }

    await Route.destroy({ where: { busId: id } });
    await Facility.destroy({ where: { busId: id } });
    await Review.destroy({ where: { busId: id } });
    await Availability.destroy({ where: { busId: id } });
    await bus.destroy();

    res.status(200).json({ message: 'Bus deleted successfully' });
  } catch (error) {
    console.error('Error deleting bus by ID:', error);
    res.status(500).json({ error: 'Error deleting bus record' });
  }
};

module.exports = {
  getAllBuses,
  getBusById,
  createBus,
  updateBusById,
  deleteBusById
};

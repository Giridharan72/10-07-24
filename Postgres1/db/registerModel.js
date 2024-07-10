// const { DataTypes } = require('sequelize');
// const { sequelize } = require('./dbConnectionsModel'); // Import the shared Sequelize instance

// const Register = sequelize.define('Register', {
//   registerId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   userName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   phoneNumber: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   otp: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   status: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     defaultValue: 'pending',
//   },
//   age: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//   },
//   gender: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
// });

// sequelize.sync()
//   .then(() => console.log('Database synced'))
//   .catch(err => console.error('Failed to sync database:', err));

// module.exports = { Register };


// registerModel.js

// const { DataTypes } = require('sequelize');
// const { sequelize } = require('./dbConnectionsModel'); // Assuming this is correctly defined

// const Register = sequelize.define('Register', {
//   registerId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   userName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   phoneNumber: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   role: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     defaultValue: 'user',
//   },
//   otp: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   status: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     defaultValue: 'pending',
//   },
//   age: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//   },
//   gender: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
// });

// module.exports = { Register };


// registerModel.js

// registerModel.js

// const { DataTypes } = require('sequelize');
// const { sequelize } = require('./dbConnectionsModel'); // Assuming this is correctly defined
// const { BusCompany } = require('./BusCompany');

// const Register = sequelize.define('Register', {
//   registerId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   userName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   phoneNumber: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   otp: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   status: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     defaultValue: 'pending',
//   },
//   age: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//   },
//   gender: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   role: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     defaultValue: 'user', // Default role is 'user'
//   },
//   companyId: {
//     type: DataTypes.UUID,
//     allowNull: true,
//     references: {
//       model: BusCompany,
//       key: 'companyId',
//     },
//   },
// });

// Register.belongsTo(BusCompany, { foreignKey: 'companyId' });
 
// Register.sync()
//   .then(() => console.log('seatselected table synced'))
//   .catch(err => console.error('Failed to sync seatselected table:', err));
// module.exports = { Register };

const { DataTypes } = require('sequelize');
const { sequelize } = require('./dbConnectionsModel');
const { BusCompany } = require('./BusCompany');

const Register = sequelize.define('Register', {
  registerId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  otp: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pending',
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user', // Default role is 'user'
  },
  companyId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: BusCompany,
      key: 'companyId',
    },
  },
});

Register.belongsTo(BusCompany, { foreignKey: 'companyId' });

Register.sync()
  .then(() => console.log('Register table synced'))
  .catch(err => console.error('Failed to sync Register table:', err));

module.exports = { Register };

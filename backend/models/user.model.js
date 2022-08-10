// Utils
const { db, DataTypes } = require('../utils/database.util');

const User = db.define('user', {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		unique: true,
		type: DataTypes.STRING,
		allowNull: false
	},
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'active'
	}
});

module.exports = { User };
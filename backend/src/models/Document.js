const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Document = sequelize.define(
  "Document",
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Document;

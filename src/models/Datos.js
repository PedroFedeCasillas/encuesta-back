const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  sequelize.define(
    "datos",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: () => uuidv4(),
        allowNull: false,
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      preferred_language: {
        type: DataTypes.ENUM("english", "spanish", "french", "german"),
        allowNull: false,
      },
      how_found: {
        type: DataTypes.ENUM("friends", "online_search", "advertisement"),
        allowNull: false,
      },
      newsletter_subscription: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};

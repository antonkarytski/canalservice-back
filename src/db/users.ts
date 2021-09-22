import { STRING } from "sequelize";
import { sequelize } from "./index";

export const Users = sequelize.define("Users", {
  firstName: {
    type: STRING,
    allowNull: false,
  },
  lastName: {
    type: STRING,
    allowNull: true,
  },
});

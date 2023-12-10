import { sequelize } from "@src/configuration/init-sequelize";
import { USER } from "@src/configuration/table-name";
import {
  DataTypes,
  ModelDefined
} from "sequelize";

import {
  baseModel, IBaseDao
} from "./base-model";

export interface UserDao extends IBaseDao{
  username: string,
  email: string,
  password: string
}

const userModel: ModelDefined<UserDao, {}> = sequelize.define(
  "User",
  {
    username: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    ...baseModel
  },
  {
    tableName: USER,
    underscored: true,
    freezeTableName: true
  }
);

type TUserModel = typeof userModel;

export {
  TUserModel, userModel
};

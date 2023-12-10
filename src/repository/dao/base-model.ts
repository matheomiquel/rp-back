import { DataTypes } from "sequelize";

export interface IBaseDao {
  id:number,
  createdAt: Date;
  updatedAt: Date;
}

export const baseModel = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
};

import { Sequelize } from "sequelize";

import { configuration } from "./data-base";

export const sequelize = new Sequelize(configuration);

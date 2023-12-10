import {
  configuration
} from "@src/configuration/data-base";
import { userModel } from "@src/repository/dao/user";
import * as mysql from "mysql2/promise";

(async () => {
  const connection = await mysql.createConnection({
    host: configuration.host,
    port: configuration.port,
    user: configuration.username,
    password: configuration.password
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${configuration.database}\`;`);
  await userModel.sync();
  process.exit(0);
})();

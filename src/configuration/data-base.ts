import {
  DatabaseOption,
  env, EnvironmentName
} from "./env";

const config: env = {
  development: {
    username: "root",
    password: "root",
    database: "rp",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
    port: 3306
  },
  test: {
    username: "root",
    password: "root",
    database: "messenger_test",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
    port: 3306
  },
  production: {
    username: "root",
    password: "enNMNHWgOjyfoWF9ngQZ",
    database: "railway",
    host: "containers-us-west-27.railway.app",
    dialect: "mysql",
    port: 7071,
    logging: false
  }
};

const environment = process.env.NODE_ENV as EnvironmentName ?? "development";
const configuration: DatabaseOption = config[environment];

export {
  configuration, environment
};

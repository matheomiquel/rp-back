import { UserController } from "@controller/route/user";
import { config } from "dotenv";
import Fastify from "fastify";

import { UserDomain } from "./domain/user/implementation/user";
import { UserRepoSitory } from "./repository/service/user";

const fastify = Fastify({
  logger: true
});

let path = ".env";
// if (process.env.APP_ENV) {
//   path = `${path}.${process.env.APP_ENV}`;
// }
if (process.env.APP_ENV) { path = `${path}.${process.env.APP_ENV}`; }
config({ path: path });
const PORT = Number(process.env.PORT) ?? 3000;

const userRepoSitory = new UserRepoSitory();
const userDomain = new UserDomain({ userRepoSitory });
const userController = new UserController({ server: fastify, userDomain });
userController.init();

fastify.listen({ port: PORT });

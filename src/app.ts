import { UserController } from "@controller/service";
import { UserDomain } from "@domain/user/implementation/user";
import { userModel } from "@repository/dao/user";
import { UserRepoSitory } from "@repository/service/user";
import { config } from "dotenv";
import Fastify from "fastify";

import { CreateRoute } from "./controller/route/create-route";
import { UserRoute } from "./controller/route/user";

const app = Fastify({ logger: true });

let path = ".env";

if (process.env.APP_ENV) {
  path = `${path}.${process.env.APP_ENV}`;
}
config({ path: path });
const PORT = Number(process.env.PORT) ?? 3000;

const createRoute = new CreateRoute({ app });

const userRepoSitory = new UserRepoSitory({ userModel });
const userDomain = new UserDomain({ userRepoSitory });
const userController = new UserController({ userDomain });
const userRoute = new UserRoute({ createRoute, userController });

userRoute.init();
app.listen({ port: PORT });

import { UserController } from "@controller/route/user";
import Fastify from "fastify";

const fastify = Fastify({
  logger: false
});

const userController = new UserController({ server: fastify });
userController.init();

fastify.listen({ port: 3000 });

import { UserController } from "@controller/route/user";
import Fastify from "fastify";

const fastify = Fastify({
  logger: true
});

const userController = new UserController({ server: fastify });
userController.init();

fastify.listen({ port: 3000 });

console.log("nopa lalaaaa");

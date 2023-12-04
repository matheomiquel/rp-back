import { UserController } from "@controller/route";
import Fastify from "fastify";
const fastify = Fastify({
  logger: true
});
const userController = new UserController({ server: fastify });
userController.init();
// Run the server!
fastify.listen({ port: 3000 }, (err) => {
  if (err) throw err;
  // Server is now listening on ${address}
});

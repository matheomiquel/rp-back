import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import { TController } from "./type";

export class UserController implements TController {
  private readonly server: FastifyInstance;

  constructor({ server }: { server: FastifyInstance }) {
    this.server = server;
  }

  init(): void {
    this.server.get("/", (request: FastifyRequest, reply: FastifyReply) => {
      console.log("tutu")
      reply.code(200).send({ message: "el toto" });
    });
  }
}

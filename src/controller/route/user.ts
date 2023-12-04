import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import { RouteFunction } from "./type";

export class UserController implements RouteFunction {
  private readonly server: FastifyInstance;

  constructor({ server }: { server: FastifyInstance }) {
    this.server = server;
  }

  init() {
    this.server.get("/", (request: FastifyRequest, reply: FastifyReply) => {
      console.warn(request.url);
      reply.send({ hello: "world" });
    });
  }
}

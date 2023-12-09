import { UserDomain } from "@src/domain/user/implementation/user";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import { IController } from "../interface";

export class UserController implements IController {
  private readonly server: FastifyInstance;

  private readonly userDomain: UserDomain;

  constructor({ server, userDomain }: { server: FastifyInstance, userDomain: UserDomain }) {
    this.server = server;
    this.userDomain = userDomain;
  }

  init(): void {
    this.server.get("/", (_request: FastifyRequest, reply: FastifyReply) => {
      reply.code(200).send(this.userDomain.getUser());
    });
  }
}

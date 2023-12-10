/* eslint class-methods-use-this: 0 */
import * as services from "@controller/service";
import { Error } from "@src/error";
import {
  FastifyInstance, FastifyReply,
  FastifyRequest,
  preHandlerHookHandler,
  preValidationHookHandler
} from "fastify";
import {
  ZodError, ZodIssue
} from "zod";

import { FunctionType } from "../type/function-type";
import { HTTPMethods } from "../type/http-method";
type ControllerServiceType = InstanceType<typeof services[keyof typeof services]>
export class CreateRoute {
  private readonly app: FastifyInstance;

  constructor({ app }: { app: FastifyInstance }) {
    this.app = app;
  }

  async createHttpRoute({ method, preValidation = [], preHandler = [], handler, path, context }:
    {
      method: Lowercase<HTTPMethods>,
      preValidation: preValidationHookHandler[],
      preHandler: preHandlerHookHandler[],
      handler: FunctionType,
      path: string,
      context: ControllerServiceType
    }):
    Promise<void> {
    const newHandler = handler.bind({ ...context });

    this.app[method](
      path,
      { preValidation, preHandler },
      (request: FastifyRequest, reply: FastifyReply) => {
        const requestWithToken = {
          body: request.body,
          query: request.query,
          params: request.params,
          token: String(request.headers.token)
        };

        this.handlerFunction(requestWithToken, reply, newHandler);
      }
    );
  }

  async handlerFunction(
    req: any,
    reply: FastifyReply,
    handler: FunctionType
  ):
    Promise<FastifyReply> {
    try {
      const result = await handler(req);

      return reply.code(result.status).send(result.data);
    } catch (e) {
      if (e instanceof ZodError) {
        const message = e.errors.map((error: ZodIssue) => error.message);

        return reply.code(400).send({ message });
      }
      if (e instanceof Error) {
        return reply.code(e.status).send({ message: e.message });
      }
      // eslint-disable-next-line no-console
      console.log(e);
      return reply.code(500).send({ message: "erreur inconnue" });
    }
  }
}

export type TCreateRoute = InstanceType<typeof CreateRoute>

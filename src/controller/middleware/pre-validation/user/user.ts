import { userCreateSchema } from "@src/controller/schema/user/create-user";
import { Validator } from "@src/controller/validator";
import {
  FastifyReply, FastifyRequest, HookHandlerDoneFunction
} from "fastify";
import {
  ZodError, ZodIssue
} from "zod";

export class UserPreValidation {
  static createUser(request: FastifyRequest, reply: FastifyReply, next: HookHandlerDoneFunction)
    : any | void {
    try {
      Validator.valideSchemaBody(request, userCreateSchema);
      next();
    } catch (e: unknown) {
      if (e instanceof ZodError) {
        const message = e.errors.map((error: ZodIssue) => error.message);

        return reply.code(400).send({ message });
      }
      return reply.code(400).send({ message: "el toto" });
    }
  }
}

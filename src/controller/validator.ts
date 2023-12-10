import { UserDto } from "@src/domain/dto/user";
import { FastifyRequest } from "fastify";
import { ZodSchema } from "zod";

export class Validator {
  static valideSchemaBody(request: FastifyRequest, schema: ZodSchema): Promise<UserDto> {
    return schema.parse(request.body);
  }
}

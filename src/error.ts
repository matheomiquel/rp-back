import { HttpCodes } from "fastify/types/utils";

export class Error {
  status: HttpCodes;

  message: string;

  constructor({ status, message }: { status: HttpCodes, message: string }) {
    this.status = status;
    this.message = message;
  }
}

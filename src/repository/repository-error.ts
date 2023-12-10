import { Error } from "@src/error";

export class RepositoryError {
  static createConflictError(message: string): Error {
    return new Error({
      message,
      status: 409
    });
  }
}

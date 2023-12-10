import { z } from "zod";

const userCreateSchema = z.object({
  username: z.string({ required_error: "username is required" }),
  email: z.string({ required_error: "email is required" }).email({ message: "not an email" }),
  password: z.string({ required_error: "password is required" }).min(8, { message: "the password must contain at least 8 characters" })
});

export { userCreateSchema };

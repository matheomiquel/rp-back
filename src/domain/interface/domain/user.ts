import { UserDto } from "@domain/dto/user";

export interface IUserDomain {
  getUser(): UserDto
}

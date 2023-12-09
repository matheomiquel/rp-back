import { UserDto } from "@domain/dto/user";

export interface IUserRepository {
  getUser(): UserDto
}

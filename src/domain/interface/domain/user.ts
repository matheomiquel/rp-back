import { UserDto } from "@domain/dto/user";

export interface IUserDomain {
  getUser(userDto: UserDto): Promise<UserDto>;
}

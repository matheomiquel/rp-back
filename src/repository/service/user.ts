import { UserDto } from "@src/domain/dto/user";
import { IUserRepository } from "@src/domain/interface";

export class UserRepoSitory implements IUserRepository {
  private readonly firstName = "Mathéo";

  getUser(): UserDto {
    return {
      firstName: this.firstName,
      lastName: "Miquel",
      email: "matheo.miquel@gmail.com",
      password: "password"
    };
  }
}

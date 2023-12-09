import { UserDto } from "@src/domain/dto/user";
import { IUserDomain } from "@src/domain/interface/domain/user";
import { UserRepoSitory } from "@src/repository/service/user";

export class UserDomain implements IUserDomain {
  private readonly userRepoSitory: UserRepoSitory;

  constructor({ userRepoSitory }: { userRepoSitory: UserRepoSitory }) {
    this.userRepoSitory = userRepoSitory;
  }

  getUser(): UserDto {
    return this.userRepoSitory.getUser();
  }
}

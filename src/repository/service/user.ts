import { UserDto } from "@src/domain/dto/user";
import { IUserRepository } from "@src/domain/interface";

import { TUserModel } from "../dao/user";
import { RepositoryError } from "../repository-error";

export class UserRepoSitory implements IUserRepository {
  private readonly userModel: TUserModel;

  constructor({ userModel }: { userModel: TUserModel }) {
    this.userModel = userModel;
  }

  async getUser(userDto: UserDto): Promise<UserDto> {
    const [user, created] = await this.userModel.findOrCreate({
      where: { email: userDto.email },
      defaults: userDto
    });

    if (!created) {
      throw RepositoryError.createConflictError("already existing email");
    }
    return user.dataValues;
  }
}

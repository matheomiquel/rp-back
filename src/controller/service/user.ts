/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import { UserDto } from "@src/domain/dto/user";
import { UserDomain } from "@src/domain/user/implementation/user";

import {
  RequestType, ResponseType
} from "../type/function-type";

export class UserController {
  private readonly userDomain: UserDomain;

  constructor({ userDomain }: {
    userDomain: UserDomain
  }) {
    this.userDomain = userDomain;
  }

  async register(request: RequestType<any>): ResponseType<200, UserDto> {
    const response = await this.userDomain.getUser(request.body as UserDto);

    return { status: 200, data: response };
  }
}

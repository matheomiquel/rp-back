import { IController } from "../interface";
import { UserPreValidation } from "../middleware/pre-validation/user/user";
import { UserController } from "../service";
import { HTTPMethods } from "../type/http-method";
import { TCreateRoute } from "./create-route";

export class UserRoute implements IController {
  private readonly createRoute: TCreateRoute;

  private readonly userController: UserController;

  constructor(
    { createRoute, userController }:
      { createRoute: TCreateRoute, userController: UserController }
  ) {
    this.createRoute = createRoute;
    this.userController = userController;
  }

  init() {
    this.createRoute.createHttpRoute({
      method: HTTPMethods.POST,
      path: "/user",
      preValidation: [UserPreValidation.createUser],
      preHandler: [],
      context: this.userController,
      handler: this.userController.register
    });
  }
}

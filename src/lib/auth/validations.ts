import Joi from "joi";

export class AuthValidations {
  static create() {
    return Joi.object({
      id: Joi.string().required(),
      username: Joi.string().required(),
      passwordHash: Joi.string().required(),
      name: Joi.string().required(),
    });
  }

  static login() {
    return Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
  }
}

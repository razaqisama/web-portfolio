import Joi from "joi";

export class UserValidation {
  static update() {
    return Joi.object({
      name: Joi.string().required(),
      birthDate: Joi.string().required(),
      profession: Joi.string(),
      passion: Joi.string(),
      vision: Joi.string(),
    });
  }
}

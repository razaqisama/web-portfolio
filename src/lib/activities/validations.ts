import Joi from "joi";

export class ActivityValidation {
  static create() {
    return Joi.object({
      id: Joi.string().required(),
      title: Joi.string().required(),
      date: Joi.string().required(),
      linkTo: Joi.string().allow(""),
    });
  }
}

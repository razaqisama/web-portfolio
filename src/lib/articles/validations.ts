import Joi from "joi";

export class ArticlesValidation {
  static create() {
    return Joi.object({
      id: Joi.string().required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
      content: Joi.string().required(),
      slug: Joi.string().required(),
      status: Joi.string().valid("draft", "published").required(),
      publishedAt: Joi.string().allow(""),
    });
  }
}

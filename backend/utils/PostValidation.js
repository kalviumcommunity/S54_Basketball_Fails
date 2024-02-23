const Joi = require("joi");

module.exports.validatePost = Joi.object({
  title: Joi.string().required(),
  tagline: Joi.string().required(),
  username: Joi.string().required(),
  image: Joi.string().required(),
  video: Joi.string().allow("").optional()
});
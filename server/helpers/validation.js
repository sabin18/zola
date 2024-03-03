import Joi from '@hapi/joi';

const validation = (req, res, schema, next) => {
  const { error } = schema.validate(req.body, req.params, { abortEarly: false });
  if (error) {
    const errorMessages = [];
    error.details.forEach(detail => {
      errorMessages.push(detail.message.split('"').join(''));
    });
    return res.json({
      status: 400,
      message: errorMessages
    });
  }
  return next();
};
// const validationArray = (req,res, schema, next) => {
//   const { error } = schema.validate(req.body.salesRecords, req.params, { abortEarly: false });
//   if (error) {
//     const errorMessages = [];
//     error.details.forEach(detail => {
//       errorMessages.push(detail.message.split('"').join(''));
//     });
//     return ErrorResponse(res,400,errorMessages);
//   }
//   return next();
// };
class Inputvalidation {

static validateMessage(req, res, next) {
  console.log("startDate===>",req.body.startDate)
  const schema = Joi.object({
    name: Joi.string().trim().min(3).max(50).message('Name should be at least 3 character and not more than 50 characters!').required(),
    email:Joi.string().email({ minDomainSegments: 2 }).message('email field should be a valid email address. e.g: johndoe@gmail.com.').required(),
    phone: Joi.number().integer().min(3).required(),
    message: Joi.string().trim().min(3).max(250).message('Message should be at least 3 character and not more than 50 characters!').required(),
    startDate:Joi.string().required(),
    endDate:Joi.string().required(),
  });
  validation(req, res, schema, next);
  
}

}

export default Inputvalidation
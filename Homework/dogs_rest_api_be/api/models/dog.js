/**
 * Student.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {

   attributes: {

     name: {
       type: 'string',
      //  required: true,
      //  uppercase: true
     },
     breed: {
       type: 'string',
      //  required: true,
      //  maxLength: 40
     },
     sex: {
       type: 'string',
      //  required: true,
      //  alpha: true
     },
     age: {
       type: 'string',
      //  required: true
     },
     height_in_inches: {
       type: 'integer',
      //  required: true,
      //  numeric: true
     },
     weight_in_pounds: {
       type: 'integer',
      //  required: true,
      //  numeric: true
     }
   }
 };

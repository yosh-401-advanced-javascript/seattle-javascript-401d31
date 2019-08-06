'use strict';

class Validator {

  constructor(schema) {
    this.schema = schema;
  }

  validate(data) {

    let valid = true;

    for (let fieldName in this.schema.fields) {

      let field = this.schema.fields[fieldName];

      // Am I required and set?
      let required = field.required
        ? !!data[fieldName]
        : true;

      // Am I the right type (if we even care)
      let type = field.type
        ? typeof data[fieldName] === field.type
        : true;

      // If anything is false ...
      if (!(required && type)) {
        valid = false;
      }

    }

    return valid;
  }
}

module.exports = Validator;

import { check, checkSchema, ParamSchema } from "express-validator";
import { PRODUCTS_MESSAGES, USERS_MESSAGES } from "~/constants/messages";
import { validate } from "~/utils/validation";

const nameSchema: ParamSchema = {
  isString: {
    errorMessage: PRODUCTS_MESSAGES.MUST_BE_STRING,
  },
  isLength: {
    options: {
      min: 1,
      max: 100,
    },
    errorMessage: PRODUCTS_MESSAGES.NAME_LENGTH,
  },
};

const descriptionSchema: ParamSchema = {
  isString: {
    errorMessage: PRODUCTS_MESSAGES.MUST_BE_STRING,
  },
  isLength: {
    options: {
      min: 1,
      max: 500,
    },
    errorMessage: PRODUCTS_MESSAGES.DESCRIPTION_LENGTH,
  },
};

export const addProductValidator = validate(
  checkSchema(
    {
      name: {
        ...nameSchema,
        notEmpty: {
          errorMessage: PRODUCTS_MESSAGES.NAME_IS_REQUIRED,
        },
      },
      price: {
        isNumeric: {
          errorMessage: "Price must be a number",
        },
        notEmpty: {
          errorMessage: "Price is required",
        },
      },
      description: {
        ...descriptionSchema,
        notEmpty: {
          errorMessage: PRODUCTS_MESSAGES.DESCRIPTION_IS_REQUIRED,
        },
      },
      collection_id: {
        isString: {
          errorMessage: PRODUCTS_MESSAGES.MUST_BE_STRING,
        },
        notEmpty: {
          errorMessage: "Collection id is required",
        },
        trim: true,
      },
      width: {
        isNumeric: {
          errorMessage: "Width must be a number",
        },
        notEmpty: {
          errorMessage: "Width is required",
        },
      },
      length: {
        isNumeric: {
          errorMessage: "Width must be a number",
        },
        notEmpty: {
          errorMessage: "Width is required",
        },
      },
      // color: {
      //   isString: {
      //     errorMessage: PRODUCTS_MESSAGES.MUST_BE_STRING,
      //   },
      //   notEmpty: {
      //     errorMessage: "Color is required",
      //   },
      // },
      detail: {
        isString: {
          errorMessage: PRODUCTS_MESSAGES.MUST_BE_STRING,
        },
        notEmpty: {
          errorMessage: "Detail is required",
        },
      },
      material_id: {
        isString: {
          errorMessage: PRODUCTS_MESSAGES.MUST_BE_STRING,
        },
      },
    },
    ["body"]
  )
);

export const addMaterialValidator = validate(
  checkSchema(
    {
      name: {
        ...nameSchema,
        notEmpty: {
          errorMessage: PRODUCTS_MESSAGES.NAME_IS_REQUIRED,
        },
      },
    },
    ["body"]
  )
);

export const updateProductValidator = validate(
  checkSchema(
    {
      name: {
        ...nameSchema,
        optional: true,
      },
      price: {
        isNumeric: {
          errorMessage: "Price must be a number",
        },
        optional: true,
      },
      description: {
        ...descriptionSchema,
        optional: true,
      },
      width: {
        isNumeric: {
          errorMessage: "Width must be a number",
        },
        optional: true,
      },
      length: {
        isNumeric: {
          errorMessage: "Width must be a number",
        },
        optional: true,
      },
      detail: {
        isString: {
          errorMessage: PRODUCTS_MESSAGES.MUST_BE_STRING,
        },
        optional: true,
      },
      material_id: {
        isString: {
          errorMessage: PRODUCTS_MESSAGES.MUST_BE_STRING,
        },
        optional: true,
      },
    },
    ["body"]
  )
);

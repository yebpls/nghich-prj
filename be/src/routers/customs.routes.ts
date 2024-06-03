import { Router } from "express";
import {
  addNewCustomController,
  deleteCustomController,
  getAllCustomController,
  updateNameCustomController,
} from "~/controllers/customs.controllers";
import { accessTokenValidator } from "~/middlewares/users.middlewares";
import { wrapRequestHandler } from "~/utils/handlers";

const customRouter = Router();

/**
 * Description: Get all custom
 * Path: /
 * Method: GET
 */
customRouter.get(
  "/",
  accessTokenValidator,
  wrapRequestHandler(getAllCustomController)
);

/**
 * Description: Add new custom
 * Path: /customs/
 * Method: POST
 * Header: { Authorization: Bearer <access_token> }
 */
customRouter.post(
  "/",
  accessTokenValidator,
  // addNewCustomValidator,
  wrapRequestHandler(addNewCustomController)
);

/**
 * Description: Update name for custom
 * Path: /customs/:custom_id
 * Method: PUT
 * Header: { Authorization: Bearer <access_token> }
 * Body: {name: string}
 */
customRouter.put(
  "/:custom_id",
  accessTokenValidator,
  // addNewCustomValidator,
  wrapRequestHandler(updateNameCustomController)
);

/**
 * Description: Delete custom
 * Path: /customs/:custom_id
 * Method: DELETE
 * Header: { Authorization: Bearer <access_token> }
 */
customRouter.delete(
  "/:custom_id",
  accessTokenValidator,
  // addNewCustomValidator,
  wrapRequestHandler(deleteCustomController)
);

export default customRouter;

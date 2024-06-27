import { Router } from "express";
import {
  acceptPublicCustomController,
  addNewCustomController,
  deleteCustomController,
  getAllCustomController,
  getAllCustomViewController,
  getAllPublicCustomController,
  privateCustomController,
  requestPublicCustomController,
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
 * Path: /customs/:color
 * Method: POST
 * Header: { Authorization: Bearer <access_token> }
 */
customRouter.post(
  "/:color",
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

/**
 * Description: Get all custom
 * Path: /all
 * Method: GET
 */
customRouter.get("/all", wrapRequestHandler(getAllCustomViewController));

/**
 * Description: Request public custom
 * Path: /request-public/:custom_id
 * Method: PUT
 * Header: { Authorization: Bearer <access_token> }
 */
customRouter.put(
  "/request-public/:custom_id",
  accessTokenValidator,
  wrapRequestHandler(requestPublicCustomController)
);

/**
 * Description: Accept public custom
 * Path: /accept-public/:custom_id
 * Method: PUT
 * Header: { Authorization: Bearer <access_token> }
 */
customRouter.put(
  "/accept-public/:custom_id",
  accessTokenValidator,
  wrapRequestHandler(acceptPublicCustomController)
);

/**
 * Description: Accept public custom
 * Path: /request-public/:custom_id
 * Method: PUT
 * Header: { Authorization: Bearer <access_token> }
 */
customRouter.put(
  "/private-custom/:custom_id",
  accessTokenValidator,
  wrapRequestHandler(privateCustomController)
);

/**
 * Description: Get All Public Custom
 * Path: /all-public
 * Method: GET
 */
customRouter.get(
  "/all-public",
  wrapRequestHandler(getAllPublicCustomController)
);

export default customRouter;

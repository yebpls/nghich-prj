import { Router } from "express";
import {
  addProductController,
  getAllProductsController,
  getProductDetailController,
} from "~/controllers/products.controllers";
import { addProductValidator } from "~/middlewares/products.middlewares";
import { accessTokenValidator } from "~/middlewares/users.middlewares";
import { wrapRequestHandler } from "~/utils/handlers";
const productsRouter = Router();

/**
 * Description: Add new product
 * Path: /product
 * Method: POST
 * Header: { Authorization: Bearer <access_token> }
 * Body: {address: string}
 */
productsRouter.post(
  "/product",
  accessTokenValidator,
  addProductValidator,
  wrapRequestHandler(addProductController)
);

/**
 * Description: Get all products
 * Route: [GET] /products
 */
productsRouter.get("/", wrapRequestHandler(getAllProductsController));

/**
 * Description: Get product detail by id
 * Route: [GET] /products/:product_id
 */
productsRouter.get(
  "/:product_id",
  wrapRequestHandler(getProductDetailController)
);

export default productsRouter;

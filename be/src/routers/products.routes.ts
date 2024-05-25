import { Router } from "express";
import { add, update } from "lodash";
import {
  addMaterialController,
  addProductController,
  deleteMaterialController,
  getAllMaterialsController,
  getAllProductsController,
  getMaterialByIdController,
  getProductByCollectionController,
  getProductDetailController,
  updateMaterialController,
} from "~/controllers/products.controllers";
import {
  addMaterialValidator,
  addProductValidator,
} from "~/middlewares/products.middlewares";
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

/**
 * Description: Get all materials
 * Route: [GET] /materials
 */
productsRouter.get(
  "/materials/materials",
  wrapRequestHandler(getAllMaterialsController)
);

/**
 * Description: Get product detail by id
 * Route: [GET] /material/:material_id
 */
productsRouter.get(
  "/material/:material_id",
  wrapRequestHandler(getMaterialByIdController)
);

/**
 * Description: Add new material
 * Path: /material
 * Method: POST
 * Header: { Authorization: Bearer <access_token> }
 * Body: {name: string}
 */
productsRouter.post(
  "/material",
  accessTokenValidator,
  addMaterialValidator,
  wrapRequestHandler(addMaterialController)
);

/**
 * Description: Update material
 * Route: [PUT] /material/:material_id
 * body: {name: string}
 */
productsRouter.put(
  "/material/:material_id",
  addMaterialValidator,
  wrapRequestHandler(updateMaterialController)
);

/**
 * Description: delete material
 * Route: [DELETE] /material/:material_id
 */
productsRouter.delete(
  "/material/:material_id",
  wrapRequestHandler(deleteMaterialController)
);

/**
 * Description: Get product by collectionId
 * Route: [GET] /products/collection/:collection_id
 */
productsRouter.get(
  "/collections/collection/:collection_id",
  wrapRequestHandler(getProductByCollectionController)
);

export default productsRouter;

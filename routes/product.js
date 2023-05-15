const express = require("express");
const router = express.Router();

const {
    create,
    productById,
    read,
    remove,
    update,
    list,
    listRelated,
    listCategories,
    listBySearch,
    photo
} = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");


console.log("At least product route par ho");

router.post("/create/:userId", requireSignin, isAuth, isAdmin, create);
router.delete(
    "/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    remove
);
router.put(
    "/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    update
);


router.get("/products/related/:productId", listRelated);
router.get("/products/categories", listCategories);
router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId", photo);
router.get("/products", list);
router.get("/productId/:productId", read);
router.param("userId", userById);
router.param("productId", productById);

module.exports = router;

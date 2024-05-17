const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const middleware = require("../middleware/jwt-middleware");

router.post("/login", userController.login);

router.post("/register", userController.registerUser);

router.get("/users", middleware.verifyJWT, userController.getUsers);

router.get("/users/:idUsers", middleware.verifyJWT, userController.getUserById);

router.delete(
  "/users/:idUsers",
  middleware.verifyJWT,
  userController.deleteUser
);

module.exports = router;

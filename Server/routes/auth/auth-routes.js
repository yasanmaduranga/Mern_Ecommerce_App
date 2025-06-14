const express = require("express");
const { registerUser, loginUser, logoutUser, authMiddleware, } = require("../../contollers/auth/auth-controller");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/check-auth", authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    user,
  });
});
router.post("/logout", logoutUser);

module.exports = router;
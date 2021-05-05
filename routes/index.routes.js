const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/login", (req, res, next) => res.render("signup.hbs"));

// router.post("/login"),(req, res, next) => {

// }

// router.post("/login", (req, res, next) => {
//   const userInfo = req.body;
//   User.create({ username, password })
//     .then((user) => {
//       console.log(user);
//       // 💥 la url del redirect es completa no como los paths del middleware
//       res.render("index");
//     })
//     .catch((error) => {
//       next(error);
//     });
// });

module.exports = router;

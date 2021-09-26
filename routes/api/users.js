const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const { body, check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../../models/User");
const auth = require("../../middleware/auth");
//@route GET api/users
//@desc test route
//@access public
router.post(
  "/",
  [
    check("firstName", "first name is required").not().isEmpty(),
    check("lastName", "last name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail().normalizeEmail(),
    // body("email").custom((value) => {
    //   return User.findOne({ value }).then((user) => {
    //     if (user) {
    //       return Promise.reject("E-mail already in use");
    //     }
    //   });
    // }),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstName, lastName, email, password } = req.body;
    try {
      // See if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      user = new User({
        firstName,
        lastName,
        email,
        avatar,
        password,
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      // Return jsonwebtoken

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

      // res.send("User Registered");
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);
// Get all profiles Public

router.get("/", async (req, res) => {
  try {
    const users = await User.find().populate("owner", ["firstName"]);
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//Delete Type
router.delete("/:user_id", auth, async (req, res) => {
  try {
    //remove type
    await User.findOneAndRemove({ _id: req.params.user_id });
    res.json({ msg: "User Deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
router.delete("/", auth, async (req, res) => {
  try {
    //remove type
    await User.deleteMany({});

    res.json({ msg: "all Users are Deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;

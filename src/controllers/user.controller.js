const userCtrl = {};
const passport = require("passport");
const User = require("../models/user");

userCtrl.renderSignUpForm = (req, res) => {
  res.render("users/signup");
};
userCtrl.signUp = async (req, res) => {
  console.log(req.body);
  const { name, email, password, confirm_password } = req.body;
  const errors = [];
  if (password != confirm_password) {
    errors.push({ text: "Passwords do not match" });
  }
  if (password.length < 4) {
    errors.push({ text: "Passwords must be at least 4 characters" });
  }
  if (errors.length > 0) {
    res.render("users/signup", { errors, name, email });
  } else {
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      req.flash("error_msg", "The email is already in use.");
      res.redirect("/users/signup");
    } else {
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.EncriptarPassword(password);
      await newUser.save();
      req.flash("success_msg", "You are registered");
      console.log(newUser);
      res.redirect("/users/signin");
    }
  }
};
userCtrl.renderSignInForm = (req, res) => {
  res.render("users/signin");
};
userCtrl.signIn = passport.authenticate("local", {
  failureRedirect: "/users/signin",
  successRedirect: "/notes/all",
  failureFlash: true,
});
userCtrl.logout = (req, res) => {
  res.send("logout");
};

module.exports = userCtrl;

const validator = require("validator");
const passport = require("passport");

const validateSignupForm = payload => {
  const errors = {};
  let isFormValid = true;
  let message = "";

  if (!payload 
      || typeof payload.email !== "string" 
      || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = "Please provide a correct email address.";
  }

  if (!payload 
      || typeof payload.password !== "string" 
      || !(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(payload.password.trim()))) {
    isFormValid = false;
    // Password criteria :
    // ^	          The password string will start this way
    // (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
    // (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
    // (?=.*[0-9])	The string must contain at least 1 numeric character
    // (?=.[!@#\$%\^&])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
    // (?=.{8,})	The string must be eight characters or longer
    errors.password = "Password must be at least 8 characters long and contain each of the following: lowercase letter, uppercase letter, numeric character and special character.";
  }

  if (!isFormValid) {
    message = "Check the form for errors.";
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

const validateLoginForm = payload => {
  const errors = {};
  let isFormValid = true;
  let message = "";

  if (!payload 
      || typeof payload.email !== "string" 
      || payload.email.trim().length === 0) {
    isFormValid = false;
    errors.email = "Please provide your email address.";
  }

  if (!payload 
      || typeof payload.password !== "string" 
      || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = "Please provide your password.";
  }

  if (!isFormValid) {
    message = "Check the form for errors.";
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

// Defining methods for the authController
module.exports = {
  signup: (req, res, next) => {
    const validationResult = validateSignupForm(req.body);

    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      });
    }

    return passport.authenticate("local-signup", (err, token, userData) => {
      if (err) {
        if (err.name === "MongoError" && err.code === 11000) {
          // the 11000 Mongo code is for a duplication email error
          // the 409 HTTP status code is for conflict error
          return res.status(409).json({
            success: false,
            message: "Check the form for errors.",
            errors: {
              email: "This email is already taken."
            }
          });
        }

        return res.status(400).json({
          success: false,
          message: "Could not process the form."
        });
      }

      return res.status(200).json({
        success: true,
        message: "You have successfully signed up! Now logging you in!",
        token,
        user: userData
      });
    })(req, res, next);
  },
  login: (req, res, next) => {
    const validationResult = validateLoginForm(req.body);
    
    if (!validationResult.success) {
      console.log(validationResult);
      return res.status(400).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      });
    }

    return passport.authenticate("local-login", (err, token, userData) => {
      if (err) {
        if (err.name === "IncorrectCredentialsError") {
          return res.status(400).json({
            success: false,
            message: err.message
          });
        }

        return res.status(400).json({
          success: false,
          message: "Could not process the form."
        });
      }

      return res.status(200).json({
        success: true,
        message: "You have successfully logged in!",
        token,
        user: userData
      });
    })(req, res, next);
  }
};

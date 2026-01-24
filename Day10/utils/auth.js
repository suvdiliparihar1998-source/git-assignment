const jwt = require(`jsonwebtoken`);

const config = require(`./config`);
const result = require(`./result`);

// authUser
function authUser(req, res, next) {
  // for ever incoming request this middleware will be called
  const allowedUrls = ["/users/signup", "/users/signin"];
  if (allowedUrls.includes(req.url)) {
    next();
  } else {
    // token passes through header
    const token = req.headers.token;
    if (!token) {
      res.send(result.createResult("Token is missing"));
    } else {
      try {
        // verify token
        const payload = jwt.verify(token, config.SECRET);
        req.headers.id = payload.id;
        req.headers.email = payload.email;
        next();
      } catch (err) {
        res.send(result.createResult("Token is invalid"));
      }
    }
  }
}

module.exports = { authUser };

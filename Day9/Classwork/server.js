const fs = require("fs");
const pdf = require("pdf-parse");

let dataBuffer = fs.readFileSync(
  "c:\\Users\\MSI\\Desktop\\MERN\\iit-08-mern\\Day-09-Lecture\\express_auth_documentation_crypto_js_signup_signin_params.pdf",
);

pdf(dataBuffer)
  .then(function (data) {
    console.log(data.text);
  })
  .catch(function (error) {
    console.error(error);
  });

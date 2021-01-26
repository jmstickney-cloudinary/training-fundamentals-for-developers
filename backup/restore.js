require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.api
  .restore(["giraffe_backup"])
  .then((restoreResult) => console.log(restoreResult))
  .catch((error) => console.error(error));

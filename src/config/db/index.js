const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://cjmax9x:P4ssp0rt0808@cluster0.6idxp0w.mongodb.net/Mydocument"
    );
  } catch (error) {
    console.log("failure");
  }
};

module.exports = { connect };

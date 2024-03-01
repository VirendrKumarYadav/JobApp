const mongoose = require("mongoose");

const jobSchema = {
  title: {
    type: "String",
  },
  id: {
    type: "String",
    unique: true,
  },

  description: {
    type: "String",
  },

  company: {
    type: "String",
  },

  location: {
    type: "String",
  },

  salary: {
    type: "String",
  },
  created_auther: {
    type: "String",
    Optional: true,
  },
};
const JobModal = mongoose.model("Jobs", jobSchema);
module.exports = JobModal;

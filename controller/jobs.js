const JobModel = require("../modal/jobs");

//---------------------POST -----------------------------
const createJobs = async(req, res) => {
  // To insert data in the database
  try {
    console.log(req.body);
    const newJob = new JobModel(req.body);
    const newlyInsertedJob = await newJob.save();
    res.json({
      sucess: true,
      created_id: newlyInsertedJob._id,
      massage: "Job profile is created Sucessfully",
    });
  } catch (err) {
      res.status(400).json({
        success: false,
        message: "Something went wrong,"+`::`+err.message,
      });
    }
};

//----------------------GET -----------------------------
const getJobs = async (req, res) => {
  try {
    const Jobs = await JobModal.find();
    res.json(Jobs);
    console.log(Jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//---------------------UPDATE ----------------------------
const updateJobs = async (req, res) => {
  try {
    const Jobs = await JobModal.updateMany({}, { $set: req.body });
    res.json(Jobs);
    console.log(Jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//------------------------UPDATE ONE ---------------------
const updateOneJobs = async (req, res) => {
  // console.log(req.query);
  try {
    const Jobs = await JobModal.updateOne(
      {
        id: {
          $eq: req.query.id,
        },
      },
      { $set: req.body }
    );
    res.json(Jobs);
    console.log(Jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createJobs,
  getJobs,
  updateJobs,
  updateOneJobs,
};

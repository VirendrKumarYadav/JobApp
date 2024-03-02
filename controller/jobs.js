const JobModal = require("../modal/jobs");

//---------------------POST -----------------------------
const createJobs = async(req, res) => {
  // To insert data in the database
  console.log(req.body);
   const newlyInsertedJob = await insertData.save();
  res.json({
    sucess: true,
    created_id: newlyInsertedJob,
    massage: "Job profile is created Sucessfully",
  });
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

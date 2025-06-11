const User = require('../models/User');
const Task = require('../models/Task');
const Topic = require('../models/Topic');
const Attendance = require('../models/Attendance');
const CompanyDrive = require('../models/CompanyDrive');
const Mentor = require('../models/Mentor');
const Codekata = require('../models/Codekata');

const runQueries = async () => {
  const start = new Date("2020-10-15");
  const end = new Date("2020-10-31");

  // 1. Topics and tasks in October
  const topics = await Topic.find({ date: { $gte: new Date("2020-10-01"), $lte: new Date("2020-10-31") } });
  console.log("Topics in October:", topics);

  const tasks = await Task.find({ date: { $gte: new Date("2020-10-01"), $lte: new Date("2020-10-31") } });
  console.log("Tasks in October:", tasks);

  // 2. Company drives between 15 and 31 Oct
  const drives = await CompanyDrive.find({ date: { $gte: start, $lte: end } });
  console.log("Company Drives (15-31 Oct):", drives);

  // 3. Company drives with students
  const drivesWithUsers = await CompanyDrive.find().populate('attended_user_ids', 'name email');
  console.log("Company Drives with students:", drivesWithUsers);

  // 4. Number of problems solved
  const userProblems = await User.find({}, 'name codekata_problems_solved');
  console.log("User Problems Solved:", userProblems);

  // 5. Mentors with >15 mentees
  const menteeCounts = await User.aggregate([
    { $group: { _id: "$mentor_id", count: { $sum: 1 } } },
    { $match: { count: { $gt: 15 } } }
  ]);
  const mentorIds = menteeCounts.map(m => m._id);
  const mentors = await Mentor.find({ _id: { $in: mentorIds } });
  console.log("Mentors with >15 mentees:", mentors);

  // 6. Users absent & task not submitted
  const absentUserIds = await Attendance.find({
    date: { $gte: start, $lte: end },
    present: false
  }).distinct('user_id');

  const usersWithUnsubmittedTasks = await Task.aggregate([
    {
      $match: {
        user_id: { $in: absentUserIds },
        submitted: false,
        date: { $gte: start, $lte: end }
      }
    },
    {
      $group: { _id: "$user_id" }
    },
    {
      $count: "users_with_absent_and_unsubmitted_tasks"
    }
  ]);
  console.log("Absent & task not submitted count:", usersWithUnsubmittedTasks);
};

module.exports = runQueries;

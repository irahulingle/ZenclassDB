const mongoose = require('mongoose');
require('dotenv').config();
const User = require('../models/User');
const Mentor = require('../models/Mentor');
const Task = require('../models/Task');
const Topic = require('../models/Topic');
const Attendance = require('../models/Attendance');
const CompanyDrive = require('../models/CompanyDrive');

const seed = async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  await User.deleteMany();
  await Mentor.deleteMany();
  await Task.deleteMany();
  await Topic.deleteMany();
  await Attendance.deleteMany();
  await CompanyDrive.deleteMany();

  const mentor = await Mentor.create({ name: "John Mentor", email: "john@zen.com" });

  const users = await User.insertMany([
    { name: "Alice", email: "alice@zen.com", batch: "B1", codekata_problems_solved: 60, mentor_id: mentor._id },
    { name: "Bob", email: "bob@zen.com", batch: "B1", codekata_problems_solved: 40, mentor_id: mentor._id },
  ]);

  const topic = await Topic.create({ topic: "MongoDB", date: new Date("2020-10-20") });

  await Task.insertMany([
    { topic_id: topic._id, user_id: users[0]._id, submitted: false, date: new Date("2020-10-20") },
    { topic_id: topic._id, user_id: users[1]._id, submitted: true, date: new Date("2020-10-20") },
  ]);

  await Attendance.insertMany([
    { user_id: users[0]._id, date: new Date("2020-10-20"), present: false },
    { user_id: users[1]._id, date: new Date("2020-10-20"), present: true },
  ]);

  await CompanyDrive.create({
    company: "Google",
    date: new Date("2020-10-22"),
    attended_user_ids: [users[0]._id]
  });

  console.log("🌱 Seeding complete");
  mongoose.connection.close();
};

seed();

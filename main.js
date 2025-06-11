const mongoose = require('mongoose');

// Import queries
const findTopicsAndTasksOctober = require('./queries/findTopicsAndTasksOctober');
const findCompanyDrivesOct15to31 = require('./queries/findCompanyDrivesOct15to31');
const findCompanyDrivesAndStudents = require('./queries/findCompanyDrivesAndStudents');
const findCodekataProblemsSolved = require('./queries/findCodekataProblemsSolved');
const findMentorsWithMoreThan15Mentees = require('./queries/findMentorsWithMoreThan15Mentees');
const findAbsentAndTaskNotSubmitted = require('./queries/findAbsentAndTaskNotSubmitted');

async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/zenclass', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("✅ Connected to MongoDB");

    const topicsAndTasks = await findTopicsAndTasksOctober();
    console.log("\n📚 Topics and Tasks taught in October:");
    console.log(topicsAndTasks);

    const companyDrives = await findCompanyDrivesOct15to31();
    console.log("\n🏢 Company drives between 15-Oct and 31-Oct:");
    console.log(companyDrives);

    const drivesAndStudents = await findCompanyDrivesAndStudents();
    console.log("\n🧑‍🎓 Company drives and students appeared:");
    console.log(drivesAndStudents);

    const codekataStats = await findCodekataProblemsSolved();
    console.log("\n💻 Codekata Problems Solved:");
    console.log(codekataStats);

    const mentors = await findMentorsWithMoreThan15Mentees();
    console.log("\n👨‍🏫 Mentors with more than 15 mentees:");
    console.log(mentors);

    const absentsAndNoTasks = await findAbsentAndTaskNotSubmitted();
    console.log("\n📅 Users absent and task not submitted between 15-Oct and 31-Oct:");
    console.log(absentsAndNoTasks);

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  }
}

main();

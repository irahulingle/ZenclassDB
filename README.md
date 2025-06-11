# Zen Class Program Management

Welcome to the **Zen Class Program Management**! This is a MongoDB-based system designed to streamline the management of users, tasks, attendance, company drives, and mentor-student relationships within the Zen Class program.

## About the Project
The **Zen Class Program Management** project is a vital component of the Zen Class program. It focuses on creating a comprehensive MongoDB database that manages student data, tracks codekata progress, and organizes company drives for placements. This system facilitates the monitoring of attendance, task submissions, and mentor-mentee interactions, ensuring a seamless experience for both students and educators.

## Features
- **Attendance Management**: Effortlessly add and update student attendance records.
- **Task Tracking**: Keep tabs on task submission statuses to ensure timely completion.
- **Company Drive Management**: Monitor company drives for placement opportunities.
- **Advanced Querying**: Filter students with powerful query options.
- **Mentor-Mentee Management**: Effectively manage relationships between mentors and their mentees.

## Usage
To get started with the Zen Class Program Management system, follow these steps:

1. **Open MongoDB Compass** and connect to your MongoDB instance.
2. **Import the provided collections**:
   - `users`
   - `attendance`
   - `codekata`
   - `tasks`
   - `company_drives`
   - `mentors`
3. To run queries, use the MongoDB shell:
   ```javascript
   db.users.find({ /* your query here */ })
   ```

const { MongoClient } = require("mongodb");

class UsersDB {
  constructor(ip = "103.215.223.249", dbName = "users") {
    this.uri = `mongodb://${ip}/${dbName}`;
    this.client = new MongoClient(this.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.dbName = dbName;
    this.usersCollection = null;
  }

  async connect() {
    try {
      await this.client.connect();
      this.db = this.client.db(this.dbName);
      this.usersCollection = this.db.collection("Users");
      console.log("Connected to the database");
    } catch (error) {
      console.error("Error connecting to the database:", error);
    }
  }

  // User management
  async addUser(user) {
    await this.usersCollection.insertOne(user);
  }

  async removeUser(username) {
    await this.usersCollection.deleteOne({ username });
  }

  async editUser(username, updates) {
    await this.usersCollection.updateOne({ username }, { $set: updates });
  }

  async authenticate(username, password) {
    const user = await this.usersCollection.findOne({ username, password });
    return !!user;
  }

  // Course management
  async addCourse(course) {
    // Implementation to add a course
  }

  async removeCourse(courseId) {
    // Implementation to remove a course
  }

  async addDoneSectionInCourse(username, courseId, sectionId) {
    // Implementation to add a done section in a course for a user
  }

  // Submission management
  async addSubmission(username, problemId, submissionId) {
    // Implementation to add a submission for a problem
  }

  // Getters and setters
  async getUser(username) {
    const user = await this.usersCollection.findOne({ username });
    return user;
  }

  async setPassword(username, newPassword) {
    await this.editUser(username, { password: newPassword });
  }

  async setEmail(username, newEmail) {
    await this.editUser(username, { email: newEmail });
  }

  // Add more getters and setters for other attributes

  async close() {
    await this.client.close();
  }
}

db = new UsersDB();
db.connect();

// Usage examples
db.addUser({
  username: "user1",
  password: "password1",
  email: "user1@example.com",
  privilege: "user",
  fullName: "User One",
  ownedCoursesIDs: [],
  problemsSolvedIDs: [],
  submissionIDs: [],
  sectionsDoneInEachCourse: {},
});

const isAuthenticated = db.authenticate("user1", "password1");
console.log("Authentication result:", isAuthenticated);

db.close();

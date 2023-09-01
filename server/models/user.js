const { Submission } = require("./submission");

class User {
  constructor(username, password, fullname, email, privilage = "user") {
    this.username = username;
    this.fullname = fullname;
    this.password = password;
    this.email = email;
    this.privilage = privilage;
    this.ownedCourses = [];
    this.submissions = [];
    this.problemsSolved = [];
    this.coursesSectionsCompleted = {};
    this.transactions = [];
  }
  readServerJSON(jsonData) {
    this.username = jsonData.username;
    this.fullname = jsonData.fullname;
    this.password = jsonData.password;
    this.email = jsonData.email;
    this.privilege = jsonData.privilege;
    this.ownedCourses = jsonData.ownedCourses;
    this.submissions = jsonData.submissions;
    this.problemsSolved = jsonData.problemsSolved;
    this.ownedCourses = jsonData.ownedCourses;
    this.coursesSectionsCompleted = jsonData.coursesSectionsCompleted;
    this.transactions = jsonData.transactions;
  }
  toServerJSON() {
    return {
      username: this.username,
      fullname: this.fullname,
      password: this.password,
      email: this.email,
      privilege: this.privilege,
      ownedCourses: this.ownedCourses,
      submissions: this.submissions,
      problemsSolved: this.problemsSolved,
      ownedCourses: this.ownedCourses,
      coursesSectionsCompleted: this.coursesSectionsCompleted,
      transactions: this.transactions,
    };
  }
  toClientJSON() {
    return {
      fullname: this.fullname,
      username: this.username,
      email: this.email,
      privilege: this.privilege,
      ownedCourses: this.ownedCourses,
      submissions: this.submissions,
      problemsSolved: this.problemsSolved,
      ownedCourses: this.ownedCourses,
      coursesSectionsCompleted: this.coursesSectionsCompleted,
      transactions: this.transactions,
    };
  }
  getUsername() {
    return this.getUsername;
  }
  getFullname() {
    return this.fullname;
  }
  getEmail() {
    return this.email;
  }
  getPrivilage() {
    return this.privilage;
  }
  getOwnedCourses() {
    return this.ownedCourses;
  }
  getSubmissions() {
    return this.submissions;
  }
  getProblemsSolved() {
    return this.problemsSolved;
  }
  getCoursesSectionsCompleted() {
    return this.coursesSectionsCompleted;
  }
  getTransactions() {
    return this.transactions;
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
  addCourse(course) {
    this.ownedCourses.push(course);
  }
  addSectionCompletedInCourse(course, section) {
    if (!this.coursesSectionsCompleted[course]) {
      this.coursesSectionsCompleted[course] = [];
    }
    this.coursesSectionsCompleted[course].push(section);
  }
  addSubmission(submission) {
    this.submissions.push(submission);
  }
  promoteToAdmin() {
    this.privilage = "admin";
  }
  promoteToCreator() {
    this.privilage = "creator";
  }
  demoteToUser() {
    this.user = "user";
  }
}

User.prototype.toString = function () {
  return this.fullname;
};

module.exports = { User };

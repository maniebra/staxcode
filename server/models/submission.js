class Submission {
  constructor(code, score, language, time) {
    this.code = code;
    this.score = score;
    this.language = language;
    this.time = time;
  }
  getCode() {
    return this.code;
  }
  getScore() {
    return this.score;
  }
  getLanguage() {
    return this.language;
  }
  getTime() {
    return this.time;
  }
}

module.exports = { Submission };

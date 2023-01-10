class Todo {
  constructor(name, deadline) {
    this.name = name;
    this.deadline = deadline;
  }

  static findAll() {
    return [];
  }
}

module.exports = Todo;

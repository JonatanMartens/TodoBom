export default class TodoList {
  constructor() {
    this.todos = [];
  }

  create(todo) {
    if (this.todos.includes(todo)) {
      throw new Error("Todo already exists!");
    }

    this.todos.push(todo);
  }

  update(oldTodo, newTodo) {
    const index = this.todos.findIndex((todo) => todo === oldTodo);
    this.todos[index] = newTodo;
  }

  delete(todo) {
    this.todos = this.todos.filter((potentialTodo) => potentialTodo !== todo);
  }
}

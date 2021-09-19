export default class TodoList {
  constructor() {
    this.todos = [];
    this.subscribers = [];
  }

  create(todo) {
    if (this.todos.includes(todo)) {
      throw new Error("Todo already exists!");
    }

    if (todo === "") {
      throw new Error("Todo cannot be empty!");
    }

    this.todos.push(todo);
    this.notifySubscribers();
  }

  update(oldTodo, newTodo) {
    const index = this.todos.findIndex((todo) => todo === oldTodo);
    this.todos[index] = newTodo;
    this.notifySubscribers();
  }

  delete(todo) {
    this.todos = this.todos.filter((potentialTodo) => potentialTodo !== todo);
    this.notifySubscribers();
  }

  subscribe(handler) {
    this.subscribers.push(handler);
  }

  unsubscribe(handlerToRemove) {
    this.subscribers = this.subscribers.filter(
      (handler) => handler !== handlerToRemove
    );
  }

  notifySubscribers() {
    this.subscribers.forEach((handler) => {
      try {
        handler(this.todos);
      } catch (error) {
        console.error(error);
      }
    });
  }
}

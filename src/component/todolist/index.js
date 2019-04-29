import { computed, observable } from "mobx";

export default class TodoList{
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(fit => !fit.finished).length;
    }
}
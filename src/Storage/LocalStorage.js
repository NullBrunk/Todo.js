export class Storage {
    
    constructor() {}

    /**
     * @param {Object} todo     The todo to store
     */
    set(todo) {
        let serialized = JSON.stringify(todo);

        localStorage.setItem(todo.id, serialized)
    }

    get(key) {
        let serialized = localStorage.getItem(key);

        return JSON.parse(serialized);
    }

    remove(key) {
        localStorage.removeItem(key);
    }

    loadTodos() {
        let todo_keys = Object.keys(localStorage);
        let todos = [];

        for(let key of todo_keys) {
            todos.push(this.get(key));
        }

        console.log(todos);
        return todos;
    }
}
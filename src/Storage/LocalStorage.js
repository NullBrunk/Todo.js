export class Storage {
    
    constructor() {}

    /**
     * @param {Object} task     The todo to store
     */
    set(task) {
        let serialized = JSON.stringify(task);

        localStorage.setItem(task.id, serialized)
    }

    get(key) {
        let serialized = localStorage.getItem(key);

        return JSON.parse(serialized);
    }

    remove(key) {
        localStorage.removeItem(key);
    }

    setMarked(key) {
        let task = this.get(key);
        task.checked = !task.checked;
        
        this.set(task);
    }

    loadTodos() {
        let todo_keys = Object.keys(localStorage);
        let todos = [];

        for(let key of todo_keys) {
            todos.push(this.get(key));
        }

        return todos;
    }
}
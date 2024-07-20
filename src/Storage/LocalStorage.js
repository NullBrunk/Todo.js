class Storage {
    
    constructor() {}

    /**
     * Add a task to the localStorage
     * 
     * @param {Object} task     The todo to store
     */
    set(task) {
        // Serialize the task before storing it
        let serialized = JSON.stringify(task);

        localStorage.setItem(task.id, serialized)
    }

    /**
     * Get a task from the localStorage
     * 
     * @param {String} key      The id ot the task to get
     *
     * @returns {Object}        The task
    */
    get(key) {
        // Get serialized task
        let serialized = localStorage.getItem(key);

        // Unserialize it and return it
        return JSON.parse(serialized);
    }

    /**
     * Remove a task from the localStorage
     * 
     * @param {String} key      The id of the task to remove
     * 
     * @returns {void}     
     */
    remove(key) {
        localStorage.removeItem(key);
    }

    /**
     * Toggle the task marked attribute in the localStorage
     * 
     * @param {String} key      The id of the task to toggle
     * 
     * @returns {void}     
     */
    toggleMarked(key) {
        // Get the task
        let task = this.get(key);
        
        // Toggle the checked attribute
        task.checked = !task.checked;
        
        // Store it
        this.set(task);
    }

    /**
     * Dump the localstorage & get all the tasks
     * 
     * @returns {Array}     An array of tasks
     */
    loadTodos() {
        let todo_keys = Object.keys(localStorage).reverse();
        let todos = [];

        for(let key of todo_keys) {
            todos.push(this.get(key));
        }

        return todos;
    }
}

const storage = new Storage();
export default storage;
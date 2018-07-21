const baseAddress = 'http://localhost:7071';
var app = new Vue({
    el: '#app',
    data: {
        todos: [
            { id: '1', TaskDescription: 'Performance Tuning', IsComplete: true },
            { id: '2', TaskDescription: 'Learn Vue', IsComplete: false },
            { id: '3', TaskDescription: 'Eat lunch', IsComplete: false },
        ],
        newTask: ""
    },
    methods: {
        createTodo: function() {
            this.todos.push({ id: `${this.todos.length + 1}`, 
                TaskDescription: this.newTask, IsComplete: false });
            this.newTask = '';
        },
        deleteTodo: function(todo) {
            var index = this.todos.indexOf(todo);
            if (index > -1) {
              this.todos.splice(index, 1);
            }
        },
        

    }
});
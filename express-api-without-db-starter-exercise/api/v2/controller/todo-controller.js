const TodoNotFoundError = require('../errors/todo-not-found-error');
const Todo = require('../model/todo')

idCounter = 1;
const todos = [{"id":1, "title":"Clean room", "description":"Remember to hoover and put clothes away", "tags": ["tag1" , "tag2" , "tag3"]}]

module.exports = {

    readAll:(req, res, next) => {
        res.status(200).json(todos);
    },

    readById: (req, res, next) => {
        const id = req.params.id;
        const todo = todos.find(todo => todo.id ==id);
        if (todo) {
            res.status(200).json(todo);
            return; 
        }
        next(new TodoNotFoundError(id));
    },

    create: (req, res, next) => {
        const todo = new Todo(idCounter++, req.body.todoname);
        todos.push(todo);
        res.status(200).json(todo)
    },

    update: (req, res, next) => {
        const id = req.params.id;
        const updates = req.body;
        const todo = todos.find(todo => todo.id == id);

        if (todo) {
            todo.todoname = updates.todoname;
            res.status(200).json(todo);
            return;    
         }
         next(new TodoNotFoundError(id));
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        const todo = todos.find(todo => todo.id == id);

        if (todo) {
            const index = todos.indexOf(todo);
            todos.splice(index,1);
            res.status(200).json(todo);
            return
        }
        next(new TodoNotFoundError(id));

    },

    addTag: (req, res, next) => {
        const id = req.params.id;
        const updates = req.body;
        const todo = todos.find(todo => todo.id == id);

        if (todo) {
            const index = todos.indexOf(todo);
            todo.tags.push(index,1);
            res.status(200).json(todo);
            return;    
         }
         next(new TodoNotFoundError(id));
    },

    removeTag: (req, res, next) => {
        const id = req.params.id;
        const updates = req.body;
        const todo = todos.find(todo => todo.id == id);

        if (todo) {
            todo.todoname = updates.todoname;
            todos.tagssplice(index,1);
            res.status(200).json(todo);
            return;    
         }
         next(new TodoNotFoundError(id));
    }
}


const TodoNotFoundError = require('../errors/todo-not-found-error');
const Todo = require('../model/todo')

idCounter = 3;
const todos = [{}, {}, {}]

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
    }
}


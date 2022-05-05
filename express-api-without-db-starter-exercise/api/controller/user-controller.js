const UserNotFoundError = require('../errors/user-not-found-error');
const User = require('../model/user')

idCounter = 3;
const users = [{"id":1, "name":"fred123"}, {}, {}]

module.exports = {

    readAll:(req, res, next) => {
        res.status(200).json(users);
    },

    readById: (req, res, next) => {
        const id = req.params.id;
        const user = users.find(user => user.id ==id);
        if (user) {
            res.status(200).json(user);
            return; 
        }
        next(new UserNotFoundError(id));
    },

    create: (req, res, next) => {
        const user = new User(idCounter++, req.body.username);
        users.push(user);
        res.status(200).json(user)
    },

    update: (req, res, next) => {
        const id = req.params.id;
        const updates = req.body;
        const user = users.find(user => user.id == id);

        if (user) {
            user.username = updates.username;
            res.status(200).json(user);
            return;    
         }
         next(new UserNotFoundError(id));
    },


    delete: (req, res, next) => {
        const id = req.params.id;
        const user = users.find(user => user.id == id);

        if (user) {
            const index = users.indexOf(user);
            users.splice(index,1);
            res.status(200).json(user);
            return
        }
        next(new UserNotFoundError(id));
    }
}


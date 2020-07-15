const { Task } = require('../models')

class TaskController {
    static async create(req, res, next) {
        const { title, description, user_id, category_id } = req.body
        const newTask = { title, description, user_id, category_id }
        try {
            await Task.create(newTask)
        } catch (error) {
            console.log(error)
        }

    }
}

module.exports = TaskController;
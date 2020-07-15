const { Task } = require('../models')

class TaskController {

    static async findAll(req,res,next){
        try {
            const allTask = await Task.findAll()
            res.status(200).json({allTask})
        } catch (error) {
            console.log(error)
        }
    }
    static async create(req, res, next) {
        const { title, description, user_id, category_id } = req.body
        const newTask = { title, description, user_id, category_id }
        try {
            await Task.create(newTask)
            res.status(201).json({msg:'Task created successfully.'})
        } catch (error) {
            console.log(error)
        }
    }

    static async delete (req,res,next){
        const {id} = req.params
        try {
            const foundTask = await Task.findByPk(id)
            if(!foundTask){
                throw ({status:404,msg:"Task not found."})
            }
            else{
                await Task.destroy({where:{id}})
                res.status(200).json({msg:'Task successfully deleted.'})
            }
        } catch (error) {
            console.log(error)
        }
    }

    static async edit (req,res,next){
        const {id} = req.params
        const { title, description, user_id, category_id } = req.body
        const updatedTask = { title, description, user_id, category_id }
        try {
            const foundTask = await Task.findByPk(id)
            if(!foundTask){
                throw ({status:404,msg:"Task not found."})
            }
            else{
                await Task.update(updatedTask,{where:{id}})
                res.status(200).json({msg:'Task successfully updated.'})
            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = TaskController;
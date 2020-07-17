const { Task,User } = require('../models')
const { verifyToken } = require('../helpers/jwt')

class TaskController {

    static async findAll(req,res,next){
        const {access_token} = req.headers
        const decoded = verifyToken(access_token)
        
        try {
            const allTask = await Task.findAll({include:[{model:User}],order:[['id','ASC']]})  
            res.status(200).json({allTask})
        } catch (error) {
            console.log(error)
        }
    }
    static async create(req, res, next) {
        const {access_token,category_id} = req.headers
        const decoded = verifyToken(access_token)
        const user_id = decoded.id
        const { title, description} = req.body
        const newTask = { title, description, user_id, category_id }
        try {
            const createdTask = await Task.create(newTask,{include:[{ model:User}]})
            res.status(201).json({msg:'Task created successfully.',createdTask})
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
                const deletedTask = await Task.destroy({where:{id}})
                res.status(200).json({msg:'Task successfully deleted.',deletedTask})
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
                const editedTask = await Task.update(updatedTask,{where:{id}})
                res.status(200).json({msg:'Task successfully updated.',editedTask})
            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = TaskController;
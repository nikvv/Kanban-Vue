const {Category} = require('../models')

class CategoryController{

    static async findAll(req,res,next){
        try {
            const allCategory = await Category.findAll()
            res.status(200).json({allCategory})
        } catch (error) {
            console.log(error)
        }
    }

    static async create(req, res, next) {
        const { title } = req.body
        const newCategory = { title }
        try {
            await Task.create(newCategory)
            res.status(201).json({msg:'Category created successfully.'})
        } catch (error) {
            console.log(error)
        }
    }

    static async delete (req,res,next){
        const {id} = req.params
        try {
            const foundCategory = await Category.findByPk(id)
            if(!foundCategory){
                throw ({status:404,msg:"Category not found."})
            }
            else{
                await Category.destroy({where:{id}})
                res.status(200).json({msg:'Category successfully deleted.'})
            }
        } catch (error) {
            console.log(error)
        }
    }

    static async edit (req,res,next){
        const {id} = req.params
        const { title } = req.body
        const updatedCategory = { title }
        try {
            const foundCategory = await Category.findByPk(id)
            if(!foundCategory){
                throw ({status:404,msg:"Category not found."})
            }
            else{
                await Category.update(updatedCategory,{where:{id}})
                res.status(200).json({msg:'Category successfully updated.'})
            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = CategoryController;
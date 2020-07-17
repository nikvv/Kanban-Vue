const {Category,Task} = require('../models')


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
        const { name } = req.body
        const newCategory = { name }
        try {
            const createdCategory = await Category.create(newCategory)
            res.status(201).json({msg:'Category created successfully.',createdCategory})
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
                const allCategoryTask = await Task.findAll({where:{category_id:id}})
                // let promises = []
                allCategoryTask.forEach(async function(task){
                    await Task.destroy({where:{id:task.id}})
                    // promises.push(destroyedTask)
                })
                const destroyedCategory = await Category.destroy({where:{id}})

                res.status(200).json({msg:'Category successfully deleted.',destroyedCategory})
            }
        } catch (error) {
            console.log(error)
        }
    }

    static async edit (req,res,next){
        const {id} = req.params
        const { name } = req.body
        const updatedCategory = { name }
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
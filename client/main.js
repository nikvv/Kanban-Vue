var app = new Vue({
    el: '#app',
    data: {
        base_url:'http://localhost:3000',
        taskList :[],
        categoryList :[],
        addTitle:'',
        addDescription:''
    },
    created() {

        axios({
            method: 'get',
            url: `${this.base_url}/categories`,
       
        })
        .then(({data}) =>{
            console.log(data)
            this.categoryList = data.allCategory
            console.log(this.categoryList)
        })
        .catch(err=>{
            console.log(err)
        })
        
        axios({
            method: 'get',
            url: `${this.base_url}/tasks`,
            headers:{
                access_token:localStorage.access_token,
            }
            
        })
        .then(({data})=>{
            console.log(data.allTask)
            this.taskList = data.allTask
        })
    },
    methods: {
        addNewTask: function (category_id) {
            axios({
                method: 'post',
                url: `${this.base_url}/tasks`,
                data:{
                    title: this.addTitle,
                    description: this.addDescription
                },
                headers:{
                    access_token:localStorage.access_token,
                    category_id
                }
            })
            .done(data =>{
                console.log(data)
            })
            .catch(err=>{
                console.log(err)
            })

        },
        deleteTask(task_id){
            axios({
                method:"delete",
                url: `${this.base_url}/tasks/${task_id}`,
                headers:{
                    access_token:localStorage.access_token,
                }
            })
            .done(data=>{
                console.log(data)
            })
        }
    }
})
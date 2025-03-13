const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());


const { todoSchema, updateSchema, id } = require("./zod");
const { todos } = require("./db");

app.post('/todo',async  (req,res)=>{
    const response = await todoSchema.safeParse(req.body);
    if(!response.success){
        res.json({
            msg : "Check inputs"
        })
        return;
    }

    await todos.create({
        title : req.body.title,
        description : req.body.description,
        completed : false
    })


    console.log(response);

    res.json({
        msg : "todo created"
    })
});


app.get('/todos',async (req,res)=>{
    const allTodos = await todos.find({});

    res.json({
        allTodos
    })
});


app.put('/completed',async (req,res)=>{
    const response = id.safeParse(req.body.id);
    if(!response.success){
        res.json({
            msg : "invalid inputs"
        })
        return;
    }

    await todos.updateOne({
        _id : req.body.id
    },{
        completed : true
    })

    res.json({
        msg : "Updated todo"
    })
});

app.listen(3000, ()=>{
    console.log(`listening on ${3000}`)
});
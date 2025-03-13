const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://bijjahimanshu05:Explore-MongoDB@cluster0.g0j9e.mongodb.net/todo1")

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todos = mongoose.model("todos", todoSchema);

module.exports = {
    todos
}

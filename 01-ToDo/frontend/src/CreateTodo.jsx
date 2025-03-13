import { useState } from "react"

async function addTodo(title, description, GetTodos){
    await fetch("http://localhost:3000/todo", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            title : title,
            description : description
        })

    });

    GetTodos();

    // alert("Added todos")
    

}

export function CreateTodo({GetTodos}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input  onChange={(e) =>{
            setTitle(e.target.value);
        }} type="text" placeholder="Title"></input> <br />
        <input onChange={(e)=>{
            setDescription(e.target.value);
        }} type="text" placeholder="Description"></input> <br />
        <button onClick={ () => addTodo(title, description, GetTodos) }>Add ToDo</button> <br />
    </div>
}
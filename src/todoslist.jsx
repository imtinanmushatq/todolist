import React from "react";

const ToDoLists = (props) =>{

    return(
        <>
        <div className="todo-Style">
        <i className="fa fa-times-circle-o" aria-hidden="true"></i> 
             <li>{props.Text}</li>
        </div>
        
        </>
        
    )

   
}
export default ToDoLists;
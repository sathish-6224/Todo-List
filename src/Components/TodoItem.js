import React from 'react';
 const TodoItem = (props) => {
    return (
        <div>
           <li>
               {props.text}
               <button class="btn-delete" onClick={()=>props.removeitem(props.id)}>Delete</button>
               </li>
               
        </div>
    )
}
export default TodoItem;
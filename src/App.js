import React ,{useState} from 'react';
import Todo  from'./Components/Todo';
import TodoItem from './Components/TodoItem';
function App() {

  const[items,setItems]=useState([]);
   const additems=(inputtext)=>{
    setItems((preitems)=>
    {
      return[...preitems,inputtext]
    });
  };
  const removeitem=(id)=>
  {
setItems((preitems)=>{
  return preitems.filter((item,index)=>{
    return index !==id;
  });
});
  };
  return (
    <div className="container">
      <div className="heading">
    <h1>TODO-LIST</h1>
    </div>
    <Todo addItems={additems}/>
    <div>
      <ul>
        {items.map((item,index)=>{
        return <TodoItem 
        key={index} 
        text={item} 
        removeitem={removeitem} 
        id={index}/>
       
})}
      </ul>

    </div>
    
    </div>
  );
}

export default App;

import React ,{useState} from 'react';
const Todo = (props) => {
    const[inputtext,setInputtext]=useState('');
    function Handleinput(e)
    {
        setInputtext(e.target.value)
    }
    return (
        
            <div className ="form">
                <input type=" text" onChange={Handleinput} value={inputtext}/>
                    <button class='btn-add'onClick={()=>{
                        props.addItems(inputtext);
                        setInputtext('');
                    }}>
                        <span>Add</span>
                    </button>
        </div>
    )
}
export default Todo;

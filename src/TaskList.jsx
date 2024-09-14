import { useEffect, useState } from 'react';
import './TaskList.css'
import { useNavigate } from 'react-router-dom';

export default function TaskList() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const existingTask = JSON.parse(localStorage.getItem('task')) || [];
        setItems(existingTask);
    }, [])

    function handleClick() {
        navigate('/addTask');
    }

    function handleDelete(itemID)
    {
        const updatedTask=items.filter(item=>item.id!==itemID);
        setItems(updatedTask);
        localStorage.setItem('task',JSON.stringify(updatedTask));
    }

    return (
        <div>
            <h1>To Do List</h1>
            <div className='itemList'>
                {items.map((item) => <div key={item.id} className='ItemsListCSS'>
                    <h4>{item.name}</h4>
                    <h4>{item.prior}</h4>
                    <h4>{item.date}</h4>
                    <button className='DeleteTasks' onClick={()=>handleDelete(item.id)}>Delete</button>
                </div>)}
                <button onClick={() => { handleClick() }} className="addTaskButton">+</button>
            </div>

        </div>
    )
}
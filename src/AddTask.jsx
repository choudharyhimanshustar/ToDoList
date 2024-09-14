import './AddTask.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
export default function AddTask() {
    const navigate = useNavigate();
    const [taskName, setTaskName] = useState('');
    const [prior, setPrior] = useState('');
    const [dueDate, setDate] = useState();
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-based
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    function handleSubmit() {

        const newTask = {
            id: Date.now(),
            name: taskName,
            prior,
            date: dueDate
        }
        if (!taskName) {
            alert("Task Name is Required");
            return;
        }

        const existingTask = JSON.parse(localStorage.getItem('task')) || [];
        const updatedTask = [...existingTask, newTask];
        localStorage.setItem('task', JSON.stringify(updatedTask));
        navigate('/');
    }
    return (
        <div>
            <h1>Add Task</h1>
            <div className="AddTask">

                <div>
                    <h1>
                        Task Name
                    </h1>
                    <input type='text' value={taskName} placeholder='Add Task Name' className='TaskNameCSS'
                        onChange={(e) => setTaskName(e.target.value)} />
                </div>
                <div >
                    <h1>
                        Priority
                    </h1>
                    <div className='PriorityInputCSS'>
                        <input type="checkbox" placeholder='Add Task Name' onClick={() => setPrior("Low Priority")} />


                        <input type="checkbox" placeholder='Add Task Name' onClick={() => setPrior("High Priority")} />
                    </div>

                    <div className='PrioritySubHead'>
                        <h6>Low</h6>
                        <h6>High</h6>
                    </div>

                </div>

                <div>
                    <h1>
                        Due Date
                    </h1>
                    <input type="date" value={dueDate} min={getTodayDate()} onChange={(e) => setDate(e.target.value)} />
                </div>
                <button onClick={() => handleSubmit()} className='SubmitButton'>Submit</button>


            </div>
        </div>

    )
}
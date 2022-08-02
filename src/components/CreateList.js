import { useState } from "react";
import { FaCheckCircle } from 'react-icons/fa'

const CreateList = () => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { task };

        fetch('http://localhost:8000/list', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask)
        }).then(() => {
            setTask("")
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="New Task"
                required
                value={task}
                onChange={(e) => setTask(e.target.value)} />
            <button className="fabutton"><FaCheckCircle className="button-add icons" /></button>
        </form>, newTask
        
    );
}

// console.log(newTask)

export default CreateList;
import { useState } from "react";
import { FaCheckCircle } from 'react-icons/fa'

const CreateList = () => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const list = {task};
        
         fetch('http://localhost:8000/list',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(list)
         })
         .then(()=> {
            console.log(list);
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
            <button><FaCheckCircle className="button-add icons" /></button>
        </form>
    );
}

export default CreateList;
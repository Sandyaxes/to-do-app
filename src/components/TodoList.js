import { useState } from "react";
import { FaTrashAlt, FaRegCircle, FaCheckCircle } from 'react-icons/fa'

const TodoList = ({ list }) => {

    const [data, setData] = useState(list);
    const [completed, setCompleted] = useState(false);

    const notDone = <FaRegCircle className="icons" onClick={() => setCompleted(!completed)} />
    const done = <FaCheckCircle className="icons" onClick={() => setCompleted(!completed)} />

    const handleDelete = (id) => {

        const newList = data.filter(item => item.id !== id);
        fetch(`http://localhost:8000/list/${id}`, {
            method: 'DELETE'
        })

        setData(newList);
    }

    return (
        <div className="list">
            {data.map((item) => (
                <div className="items-preview" key={item.id}>
                    {list && (<article>
                        {completed ? done : notDone}
                        <p className="task">{item.task}</p>
                        <FaTrashAlt className="icons" onClick={() => handleDelete(item.id)} />
                    </article>)}

                </div>
            ))}
        </div>
    );
}

export default TodoList;
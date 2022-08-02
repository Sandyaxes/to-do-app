import { useState } from "react";
import { FaTrashAlt, FaRegCircle } from 'react-icons/fa'

const TodoList = ({ list }) => {
    const [data, setData] = useState(list);

    const completeTask = (id) => {
        deleteData(id, `http://localhost:8000/list/${id}`, 'http://localhost:8000/completed')
    }

    const handleDelete = (id) => {
        deleteData(id, `http://localhost:8000/list/${id}`, 'http://localhost:8000/archived')
    }

    const deleteData = (id, deleteUrl, archiveUrl) => {
        const newList = data.filter(item => item.id !== id);
        const newTask = data.filter(item => item.id === id);

        fetch(deleteUrl, {
            method: 'DELETE'
        }).then(
            fetch(archiveUrl, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ task: newTask[0].task })
            })
        )

        setData(newList);
    }

    return (
        <div className="list">
            {data.map((item) => (
                <div className="items-preview" key={item.id}>
                    {list && (<article>
                        <div className="task">
                            {<FaRegCircle className="icons" onClick={() => completeTask(item.id)} />}
                            <p id="task-text">{item.task}</p>
                        </div>
                        <FaTrashAlt className="icons" onClick={() => handleDelete(item.id)} />
                    </article>)}
                </div>
            ))}
        </div>
    );
}

export default TodoList;
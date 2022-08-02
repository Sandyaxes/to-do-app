import { useState } from "react";
import { FaTrashAlt, FaCheckCircle } from 'react-icons/fa'


const CompletedList = ({ list }) => {
    const [data, setData] = useState(list);

    const handleDelete = (id) => {
        const newList = data.filter(item => item.id !== id);
        const deletedTask = data.filter(item => item.id === id);

        fetch(`http://localhost:8000/completed/${id}`, {
            method: 'DELETE'
        }).then(
            fetch(`http://localhost:8000/archived`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ task: deletedTask[0].task })
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
                            {<FaCheckCircle className="icons" />}
                            <p className="completed-task">{item.task}</p>
                        </div>
                        <FaTrashAlt className="icons" onClick={() => handleDelete(item.id)} />
                    </article>)}
                </div>
            ))}
        </div>
    );
}

export default CompletedList;
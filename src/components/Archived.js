import {useState } from "react";
import { FaTrashAlt, FaUndo } from 'react-icons/fa'


const ArchivedList = ({ list }) => {
    const [data, setData] = useState(list);

    const handleDelete = (id) => {
        const newList = data.filter(item => item.id !== id);
        fetch(`http://localhost:8000/archived/${id}`, {
            method: 'DELETE'
        })

        setData(newList);
    }

    const restoreTask = (id) => {
        const newList = data.filter(item => item.id !== id);
        const deletedTask = data.filter(item => item.id === id);

        fetch(`http://localhost:8000/archived/${id}`, {
            method: 'DELETE'
        }).then(
            fetch(`http://localhost:8000/list`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ task: deletedTask[0].task })
            }))

        setData(newList);
    }

    return (
        <div className="list">
            {data.map((item) => (
                <div className="items-preview" key={item.id}>
                    {list && (<article className='archived'>
                        <div className="task">
                            <p className="archived-task">{item.task}</p>
                        </div>
                        {<FaUndo className="icons archived" onClick={() => restoreTask(item.id)} />}
                        <FaTrashAlt className="icons archived" onClick={() => handleDelete(item.id)} />
                    </article>)}
                </div>
            ))}
        </div>
    );
}

export default ArchivedList;
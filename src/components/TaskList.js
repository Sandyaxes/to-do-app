import TodoList from "./TodoList";
import CreateList from "./CreateList";
import useFetch from "./useFetch";

const TaskList = () => {
    const url = 'http://localhost:8000/list/'
    const { data: list, error } = useFetch(url);

    return ( 
        <div className="home">
            <h2 className="title">Task List</h2>
            {error && <div className="error">{error}</div>}
            {list && <TodoList list={list} />}
            <CreateList />
        </div>
    );
}

export default TaskList;
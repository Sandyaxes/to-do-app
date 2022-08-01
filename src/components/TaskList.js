import TodoList from "./TodoList";
import CreateList from "./CreateList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: list, error } = useFetch('http://localhost:8000/list');

    return ( 
        <div className="home">
            {error && <div className="error">{error}</div>}
            {list && <TodoList list={list} />}
            <CreateList />
        </div>
    );
}

export default Home;
import CreateList from "./CreateList";
import CompletedList from "./CompletedList";
import useFetch from "./useFetch";

const CompletedTasks = () => {
     
     const { data: list, error } = useFetch('http://localhost:8000/completed/');
     
     return (
          <div className="home">
               <h2 className="title">Completed</h2>
               {error && <div className="error">{error}</div>}
               {list && <CompletedList list={list}/>}
               <CreateList />
          </div>
     );
}

export default CompletedTasks;
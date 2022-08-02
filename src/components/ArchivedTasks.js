import CreateList from "./CreateList";
import Archived from "./Archived";
import useFetch from "./useFetch";

const ArchivedTasks = () => {
    const { data: list, error } = useFetch('http://localhost:8000/archived/');
    
    return ( 
        <div className="archived-tasks">
            <h2 className="title">Archived</h2>
            {error && <div className="error">{error}</div>}
               {list && <Archived list={list}/>}
               <CreateList />
        </div>
     );
}
 
export default ArchivedTasks;
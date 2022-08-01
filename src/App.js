import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";
import ArchivedTasks from "./components/ArchivedTasks"
import CompletedTasks from "./components/CompletedTask"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
          <TaskList />
          </Route>
          <Route path="/CompletedTasks">
          <CompletedTasks />
          </Route>
          <Route path="/ArchivedTasks">
          <ArchivedTasks />
          </Route>
        </Switch>
      </div>
    </Router>  
  );
}

export default App;

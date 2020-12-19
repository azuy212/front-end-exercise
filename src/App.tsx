import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import ListTasks from './pages/ListTasks';
import CreateTask from './pages/CreateTask';
import BulkDelete from './pages/BulkDelete';
import './App.css';
import { AppContextProvider } from './AppContext';

function App() {
  return (
    <AppContextProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to='/create-task'>Create Task</NavLink>
              </li>
              <li>
                <NavLink to='/list-tasks'>List Tasks</NavLink>
              </li>
              <li>
                <NavLink to='/bulk-delete'>Bulk Delete</NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path='/list-tasks'>
              <ListTasks />
            </Route>
            <Route path='/create-task'>
              <CreateTask />
            </Route>
            <Route path='/bulk-delete'>
              <BulkDelete />
            </Route>
            <Route path='/'>
              <Redirect to='/list-tasks' />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppContextProvider>
  );
}

export default App;

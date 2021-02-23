import React from 'react';
import './App.css';
import Todo from './Components/Todo';
// import NewTask from './Components/newtask/newtask';
import Task from './Components/Task/task';

// import Button from 'react-bootstrap/Button';

// or less ideally
// import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
     <Todo />
     <Task />
    </div>
  );
}

export default App;

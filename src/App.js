import React from 'react';
import './App.css';
import Todo from './Components/Todo';
import { CssBaseline } from '@material-ui/core';
import Task from './Components/Task/task';
import Trairer from './Components/newtask/trairer';
import { Paper } from '@material-ui/core';



function App() {
  return (
    <>
      <div className="App">
        <Todo />
        <Paper> <Task /> </Paper>
        <Paper><Trairer /></Paper>
        <CssBaseline />
      </div>
    </>
  );
}

export default App;

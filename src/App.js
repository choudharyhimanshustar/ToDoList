import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AddTask from './AddTask'
import TaskList from './TaskList';
function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
        <Route path='/' element={<TaskList/>}/>
        <Route path='/addTask' element={<AddTask/>}/>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;

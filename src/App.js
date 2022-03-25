import './App.css';
import {  Routes, Route } from "react-router-dom";
import Home from './components/HomePage/Home.js'
import Todos from './components/Todo/Todos';
import Todo from './components/Todo/Todo';

function App() {
  return (

      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Todos" element={<Todos />} >
              <Route path=":id" element={<Todo />} />
            </Route>
        </Routes>

  );
}

export default App;

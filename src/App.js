import './App.css';
import {  Routes, Route } from "react-router-dom";
import Home from './components/HomePage/Home.js'
import EventApp from './components/EventMaker/EventApp';
import Todo from './components/Todo/Todo';


function App() {
  return (

      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Event" element={<EventApp />} >
              <Route path=":id" element={<Todo />} />
            </Route>
        </Routes>

  );
}

export default App;

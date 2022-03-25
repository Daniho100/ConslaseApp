import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/HomePage/Home.js'
import Todos from './components/Todo/Todos';
import Todo from './components/Todo/Todo';

function App() {
  return (

    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assessment" element={<Todos />} >
              <Route path="/assessment/:id" element={<Todo />} />
            </Route>
        </Routes>
    </BrowserRouter>

  );
}

export default App;

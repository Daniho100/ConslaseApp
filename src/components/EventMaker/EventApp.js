import './Events.css';
import Event from './Event';
import EventForm from './EventForm'
import EventList from './EventList'
import React, {useState} from 'react';

function EventApp() {
  // const initialState = JSON.parse(localStorage.getItem("todos")) || []
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

    return (
    <div className='kontainers'>    
    <div className='app-wrapper'>
    <div>
    <Event />
    </div>
    <div className='container'>
<EventForm 
input={input}
setInput={setInput}
todos={todos}
setTodos={setTodos}
editTodo={editTodo}
setEditTodo={setEditTodo}
/>
</div>
<div className='container'>
  <EventList
   todos={todos}
   setTodos={setTodos}
   setEditTodo={setEditTodo} />
     </div>
     </div>
     </div>
  );
}

export default EventApp;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';

const Todo = () => {
  const { id } = useParams();

  const [todoDetails, setTodoDetails] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const responseTodo = res.data;
        setTodoDetails(responseTodo);
      });
  }, );

  const { id: todoId, userId, title, completed } = todoDetails || {};
  return (
    <div>
      
      {todoDetails ? (
        <div>
          <p> {`Todo id: ${todoId}`} </p>
          <h3> {`Todo userId: ${userId}`} </h3>
          <h2> {`Todo title: ${title}`} </h2>
          <p> {`Todo completed: ${completed}`} </p>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Todo;
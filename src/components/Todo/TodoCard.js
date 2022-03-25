import React from "react";
import { useNavigate } from 'react-router-dom';

const TodoCard = (props) => {
  const { todo } = props;
  const { id, completed, title } = todo;
  let navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "grey",
        margin: "10px",
        padding: "5px",
        width: "100%",
        height: '80px',
        borderRadius: '5px',
        color: '#f8f8f8'

      }}
      onClick={() => navigate.push(`/assessment/${id}`)}
    >
      
      <h5> {title} </h5>
      <p> {`Completed: ${completed}`} </p>
    </div>
  );
};

export default TodoCard;
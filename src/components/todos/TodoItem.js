import React from 'react';
import { Table} from 'react-bootstrap';
import { BsFillTrashFill } from "react-icons/bs";


function TodoItem({ todo, dispatch }) {
  return (
    <div className="container-lg" >
      
      <Table className="position-relative" striped bordered hover >
        <thead>
          <tr>
            <th>Status</th>
            <th>Task</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" onChange={() => dispatch({ type: 'flip', payload: { id: todo.id } })} /></td>
            <td><span style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>{todo.text} </span></td>
            <td><button onClick={() => dispatch({ type: 'delete', payload: { id: todo.id } })}><BsFillTrashFill /></button>
            </td>
          </tr>
        </tbody>
      </Table>
    
    </div>

  );
}

export default TodoItem;
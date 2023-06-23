import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';



function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <div className='container'>
        <h1>Ingresa la Lista: </h1>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <div className='boton1'>
        <Button onClick={() => setTodos([...todos, inputValue])}>Agregar</Button>
        </div>
      </div>
          <Card>
          <Card.Body>
            <Card.Text>
            <ul>
            {todos.map((todo, index) => (
              <li key={todo}>
                {todo}
                <div className='boton1'>
                <Button onClick={() => setTodos(todos.filter((_, i) => i !== index))}>Delete</Button>
                </div>
              </li>
            ))}
          </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        
    </div>
  );
}
export default TodoList;
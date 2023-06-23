import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className='container'>
   
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Contador: {contador}</Card.Title>
          <Button onClick={() => setContador(contador + 1)}>Aumentar</Button>
      <Button onClick={() => setContador(contador - 1)}>Disminuir</Button>
        </Card.Body>
      </Card>
      </div>
  );
}

export default Contador;

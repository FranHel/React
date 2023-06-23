import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function App() {
  const [text, setText] = useState('');

  const contadorVocales = () => {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of text.toLowerCase()) {
      if (vocales.includes(char)) {
        count++;
      }
    }
    alert(`El texto ingresado tiene ${count} vocales.`);
  };

  return (
    <div className='container'>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Ingresar texto</Card.Title>
        <Card.Text>
        <input type="text" onChange={(event) => setText(event.target.value)} />
        <Button className='Button' onClick={contadorVocales}>Contar vocales</Button>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    
  );
}

export default App;
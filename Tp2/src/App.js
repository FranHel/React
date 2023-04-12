import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const texto = (e) => {
    setText(e.target.value);
  };

  const alerta   = () => {
    alert(text);
  };

  return (
    <div>
      <p>Ingresar texto:</p>
      <input type="text" value={text} onChange={texto} />
      <button onClick={alerta}>Mostrar Alert</button>
    </div>
  );
}

export default App;

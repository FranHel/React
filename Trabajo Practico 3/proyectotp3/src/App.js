import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <form onSubmit={presion}>
        <p>Ingrese un texto:
          <input type="text" name="texto" id="valor" />
        </p>
        <p>
          <input type="submit" value="Mostrar" />
        </p>
      </form>
    </div>
  );
}

function presion(e) {
  e.preventDefault();
  let contador = 0;
  let texto = document.getElementById("valor").value;

  for (let x = 0; x < texto.length; x++) {
    if (texto.charAt(x) == "a" || texto.charAt(x) == "e" || texto.charAt(x) == "i" || texto.charAt(x) == "o" || texto.charAt(x) == "u" || texto.charAt(x) == "á" || texto.charAt(x) == "é" || texto.charAt(x) == "í" || texto.charAt(x) == "ó" || texto.charAt(x) == "ú" || texto.charAt(x) == "A" || texto.charAt(x) == "E" || texto.charAt(x) == "I" || texto.charAt(x) == "O" || texto.charAt(x) == "U" || texto.charAt(x) == "Á" || texto.charAt(x) == "É" || texto.charAt(x) == "Í" || texto.charAt(x) == "Ó" || texto.charAt(x) == "Ú") {
      contador++
    }
  }
  alert("El texto ingresado tiene " + contador + " vocales");

}

export default App;


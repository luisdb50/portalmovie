import './App.css';
import Container from './prueba/Container';

let texto= "Deseo una pc gamer con case msi vampiric, fuente de poder certificada azza 650w, targeta madre h370m, " + 
           "procesador intel i5 9400, memoria DDR4 8gb, disco SSD 240gb y targeta de video GTX 1650 4gb"

function App() {
  return (
    <div className="App">
      <Container text={texto} />
    </div>
  );
}

export default App;

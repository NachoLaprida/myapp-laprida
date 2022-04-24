/* import logo from './logo.svg'; */
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Button from './components/Button';
function handleClick(numero) {
  console.log('click' + numero)
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Hola Mundo'/>
      <Button texto='esto es un boton' color='red'/>
      <Button texto='esto es un boton2' color='green'/>
      <Button texto='esto es un boton3' color='blue'/>
      <Button  color='brown'>
        <p>Esto es nacho</p>
      </Button>
      <Button color='grey'>
        <p>Esto es un children</p>
      </Button>
      
      <header className="App-header">
        
        
        <div className='card'>
          <div className="card-body">
            <h4 className='card-title'>My Title</h4>
            <p className='card-text text-danger'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet cum, laudantium ex dolorum labore ad. Sunt provident possimus, molestias modi, sed velit adipisci nisi voluptatibus eaque laboriosam molestiae cum accusamus.</p>
          </div>
        </div>
        <button onClick={() => handleClick(4)}>click me!</button>

      </header>
    </div>
  );
}

export default App;

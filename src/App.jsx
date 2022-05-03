/* import logo from './logo.svg'; */
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
/* import Button from './components/Button';
function handleClick(numero) {
  console.log('click' + numero)
} */

function App() {
  return (
    <>
      <NavBar />
      
      {/* <Button texto='esto es un boton' color='red'/>
      <Button texto='esto es un boton2' color='green'/>
      <Button texto='esto es un boton3' color='blue'/>
      <Button  color='brown'>
        <p>Esto es nacho</p>
      </Button>
      <Button color='grey'>
        <p>Esto es un children</p>
      </Button> */}
      
      <header className="App-header">
        <>
          <ItemListContainer />
          <ItemDetailContainer />
        </>
        
      </header>
    </>
  );
}

export default App;

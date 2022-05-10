/* import logo from './logo.svg'; */
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import { Routes, Route} from 'react-router-dom'
import Cart from './pages/Cart';
/* import Button from './components/Button';
function handleClick(numero) {
  console.log('click' + numero)
} */

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes> 
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart />}/>
        {/* <Button texto='esto es un boton' color='red'/>
        <Button texto='esto es un boton2' color='green'/>
        <Button texto='esto es un boton3' color='blue'/>
        <Button  color='brown'>
          <p>Esto es nacho</p>
        </Button>
        <Button color='grey'>
          <p>Esto es un children</p>
        </Button> */} 
      </Routes>

    </div>
  );
}

export default App;

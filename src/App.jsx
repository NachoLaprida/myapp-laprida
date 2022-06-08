/* import logo from './logo.svg'; */
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import { Routes, Route} from 'react-router-dom'
import Cart from './pages/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
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
        <Route path='/checkout' element={<Checkout />}/> 
      </Routes>
      <Footer />

    </div>
  );
}

export default App;

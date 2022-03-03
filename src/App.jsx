import './App.css';
import  NavBar  from './components/NavBar'
import { Welcome } from './components/Welcome';
import Cart from "./components/Cart"
import { ItemListContainer } from './components/ItemListContainer';



function App() {
  return (
    <div className='App'>
      <ItemListContainer/>
    </div>
  );
}

export default App;

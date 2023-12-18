import './App.css';
import ListaTarea from './component/ListaTarea';
import Logo from './img/dos.png';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          src={Logo}
          className='logo'
        />
      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>

        <ListaTarea />
      </div>
    </div>
  );
}

export default App;

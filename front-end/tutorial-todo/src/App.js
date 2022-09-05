import logo from './logo.svg';
import './App.css';
//import {AiOutlineEdit} from 'react-icons';

const arrayTodos = [
  { name:"limparCasa", status:false}, 
  { name:"Jhon", status:false },
  { name:"Pedro", status:false }
];

const Todos = ({ todos }) => {
  return <div className="todos">
      {todos.map(todo => {
        return (
          <div className="todo">
            <p>{todo.name}</p>
            <button className="button">Editar</button>
            <button>Delete</button>
          </div>
        )
      })}
    </div>
  };

function App() {
  return (
    <div className="App">
      <header className="container">
        <div className="header">
          <h1>Titulo</h1>
        </div>
        <Todos todos={arrayTodos}></Todos>
      </header>
    </div>
  );
}

export default App;

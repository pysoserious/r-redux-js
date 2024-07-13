import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo'
import Todos from './components/Todo';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <Todos/>
    </div>
  );
}

export default App;

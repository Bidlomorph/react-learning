// import './index.css';
import TodoList from "./todo/TodoList";

function App() {
  const todos = [
    {id: 0, completed: false, title: 'Buy bread'},
    {id: 1, completed: false, title: 'Buy eggs'},
    {id: 2, completed: false, title: 'Buy milk'}

  ]
  return (
    <div className="container">
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;

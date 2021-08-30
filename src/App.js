// import './index.css';
import TodoList from "./todo/TodoList";

function App() {
  let todos = [
    {id: 0, completed: false, title: 'Buy bread'},
    {id: 1, completed: false, title: 'Buy eggs'},
    {id: 2, completed: false, title: 'Buy milk'}
  ]
  function toggleTodo(id) {
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
  }

  return (
    <div className="container">
      <TodoList todos={todos} onToggle={toggleTodo}/>
    </div>
  );
}

export default App;

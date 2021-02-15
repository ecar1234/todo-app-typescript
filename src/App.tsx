import React, { useState } from 'react';
import TodoList from 'TodoList';
import AddTodoFrom from 'AddTodoFrom';



const initialTodos: Array<Todo> = []
  

const App: React.FC = () => {

const [todos, setTodos] = useState(initialTodos);

const toggleTodo: ToggleTodo = (selectedTodo) => {
  const newTodos = todos.map(todo => {
    if (todo === selectedTodo){
      return {
        ...todo, 
        complete: !todo.complete
      };
    }
    return todo;
  });
  setTodos(newTodos);
}

const addTodo: AddTodo = newTodo => {
  newTodo.trim() !== "" &&
  setTodos([...todos, {text: newTodo, complete: false}]);
}

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoFrom addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;
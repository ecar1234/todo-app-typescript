type Todo = {
  text: string | null;
  complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;
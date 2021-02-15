import React, { ChangeEvent, FormEvent, useState } from 'react';

interface AddTodoFormProps {
  addTodo: AddTodo;
}

const AddTodoFrom:React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo)
    setNewTodo("")
  }

  return (
    <form>
      <input type="text" value={newTodo} onChange={onChange} />
      <button type="submit" onClick={handleSubmit} >Add Todo</button>
    </form>
  );
};

export default AddTodoFrom;
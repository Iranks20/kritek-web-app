import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, deleteTodoAsync } from '../features/todosSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.items);
  const status = useSelector((state) => state.todos.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodoAsync(id));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.title}</span>
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

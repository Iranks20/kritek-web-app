import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getAllTodos = () => api.get('/todos');
export const addNewTodo = (todo) => api.post('/todos', todo);
export const updateTodo = (id, todo) => api.put(`/todos/${id}`, todo);
export const deleteTodo = (id) => api.delete(`/todos/${id}`);

export default api;

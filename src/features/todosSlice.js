import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllTodos, addNewTodo, updateTodo, deleteTodo } from '../api';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await getAllTodos();
  return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (todo) => {
  const response = await addNewTodo(todo);
  return response.data;
});

export const updateTodoAsync = createAsyncThunk('todos/updateTodo', async ({ id, todo }) => {
  const response = await updateTodo(id, todo);
  return response.data;
});

export const deleteTodoAsync = createAsyncThunk('todos/deleteTodo', async (id) => {
  await deleteTodo(id);
  return id;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateTodoAsync.fulfilled, (state, action) => {
        const { id, title, completed } = action.payload;
        const existingTodo = state.items.find((todo) => todo.id === id);
        if (existingTodo) {
          existingTodo.title = title;
          existingTodo.completed = completed;
        }
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        state.items = state.items.filter((todo) => todo.id !== action.payload);
      });
  },
});

export default todosSlice.reducer;

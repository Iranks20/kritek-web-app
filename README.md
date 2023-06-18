
# React Redux CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application built with ReactJS, Redux Toolkit, and JSON Server.

## Project Setup

1. Clone the repository or download the source code.

2. Install the necessary dependencies by running the following command in the project root directory:

   ```bash
   npm install
   ```

3. Start the JSON Server for the backend by running the following command in a separate terminal window:

   ```bash
   json-server --watch db.json --port 3001
   ```

4. Start the React development server by running the following command in the project root directory:

   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to see the application in action.

## Project Structure

- `src/api.js`: Contains functions to interact with the JSON Server API.

- `src/features/todosSlice.js`: Defines the Redux slice for todos, including actions and reducers.

- `src/components/TodoList.js`: Renders the list of todos and handles delete functionality.

- `src/components/AddTodoForm.js`: Renders the form to add new todos.

- `src/App.js`: Main component that renders the TodoList and AddTodoForm components.

- `src/index.js`: Entry point of the application where the Redux store is configured.

## Features

- Display a list of todos fetched from the JSON Server backend.

- Add new todos by submitting the AddTodoForm.

- Delete todos by clicking the delete button in the TodoList.

- Updates to the todos are synchronized with the JSON Server backend.

## Dependencies

The project uses the following dependencies:

- `redux`: State management library for JavaScript applications.

- `react-redux`: Official React bindings for Redux.

- `@reduxjs/toolkit`: Redux Toolkit library for efficient Redux development.

- `axios`: Promise-based HTTP client for making API requests.

- `json-server`: A full-fledged JSON API server for development purposes.

## Customize

You can customize the project by modifying the components, styles, and functionalities according to your requirements. Feel free to explore and enhance the application as needed.




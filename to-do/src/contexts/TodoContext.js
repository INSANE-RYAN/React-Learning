import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Build a To-Do App", completed: false },
    ],

    addTodo: (text) => {},
    updatedTodo: (id, updatedTodo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},


});

export const useTodo = () => {
    return useContext(TodoContext);
}


export const TodoProvider = TodoContext.Provider;
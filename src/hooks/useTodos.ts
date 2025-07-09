import { useCallback } from "react";
import type { Todo } from "../interfaces/Todo";
import { useTodoStore } from "../stores/useTodoStore";
import useLocalStorage from "./useLocalStorage";

const useTodos = () => {
    const todos = useTodoStore((state) => state.todos);
    const setTodos = useTodoStore((state) => state.action.setTodos);
    const { setItem } = useLocalStorage();

    const addTodo = useCallback(
        (todo: string) => {
            const id =
                todos.reduce((prev, acc) => Math.max(prev, acc.id), 0) + 1;
            const newTodo: Todo = { id, todo, completed: false };
            const newTodos: Todo[] = [newTodo, ...todos];
            setTodos(newTodos);
            setItem("todo", JSON.stringify(newTodos));
        },
        [todos]
    );

    const removeTodo = useCallback(
        (id: number) => {
            const newTodos: Todo[] = todos.filter((todo) => todo.id !== id);
            setTodos(newTodos);
            setItem("todo", JSON.stringify(newTodos));
        },
        [todos]
    );

    const toggleTodo = useCallback(
        (id: number) => {
            const newTodos: Todo[] = todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
            setTodos(newTodos);
            setItem("todo", JSON.stringify(newTodos));
        },
        [todos]
    );

    const modifyTodo = useCallback(
        (id: number, text: string) => {
            const newTodos: Todo[] = todos.map((todo) =>
                todo.id === id ? { ...todo, todo: text } : todo
            );
            setTodos(newTodos);
            setItem("todo", JSON.stringify(newTodos));
        },
        [todos]
    );

    return { todos, addTodo, removeTodo, toggleTodo, modifyTodo };
};

export default useTodos;

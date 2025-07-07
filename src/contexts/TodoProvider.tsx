import { type ReactNode } from "react";
import { TodoContext } from "./TodoContext";
import type { Todo } from "../interfaces/Todo";
import useLocalStorage from "../hooks/useLocalStorage";
import { useTodoStore } from "../stores/useTodoStore";
import { INIT_TODOS } from "../consts";

const TodoProvider = ({ children }: { children: ReactNode }) => {
    const { getItem } = useLocalStorage();
    const todos: Todo[] = getItem("todo", INIT_TODOS);
    const setTodos = useTodoStore((state) => state.action.setTodos);
    setTodos(todos);
    return (
        <TodoContext.Provider value={todos}>{children}</TodoContext.Provider>
    );
};

export default TodoProvider;

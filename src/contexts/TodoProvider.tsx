import { useState, type ReactNode } from "react";
import { TodoContext } from "./TodoContext";
import type { Todo } from "../interfaces/Todo";
import useLocalStorage from "../hooks/useLocalStorage";
import { INIT_TODOS } from "../consts";

const TodoProvider = ({ children }: { children: ReactNode }) => {
    const { getItem } = useLocalStorage();
    const [todos, _] = useState<Todo[]>(() => getItem("todo", INIT_TODOS));
    return (
        <TodoContext.Provider value={todos}>{children}</TodoContext.Provider>
    );
};

export default TodoProvider;

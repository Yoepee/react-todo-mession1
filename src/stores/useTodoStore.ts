import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";
import type { Todo } from "../interfaces/Todo";

const initTodos: Todo[] = [];

interface TodoAction {
    action: {
        clearState: () => void;
        setTodos: (todos: Todo[]) => void;
    };
}

interface TodoStore {
    todos: Todo[];
}

const initialState: TodoStore = {
    todos: initTodos,
};

export const useTodoStore = create(
    devtools(
        combine(
            initialState,
            (set): TodoAction => ({
                action: {
                    clearState: () => set(() => initialState),
                    setTodos: (todos) => set(() => ({ todos })),
                },
            })
        )
    )
);

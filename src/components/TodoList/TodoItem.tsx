import { useRef } from "react";
import { useBoolean } from "../../hooks/useBoolean";
import useTodos from "../../hooks/useTodos";
import type { Todo } from "../../interfaces/Todo";

const TodoItem = ({ todo }: { todo: Todo }) => {
    const {
        value: isModifyMode,
        toggle: toggleModifyMode,
        setFalse: closeModifyMode,
    } = useBoolean();
    const { toggleTodo, removeTodo, modifyTodo } = useTodos();

    const inputRef = useRef<HTMLInputElement>(null);
    const handleToggle = () => {
        if (!inputRef.current) return;
        const input: HTMLInputElement = inputRef.current;
        input.value = todo.todo;
        toggleModifyMode();
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!inputRef.current) return;
        const input: HTMLInputElement = inputRef.current;
        modifyTodo(todo.id, input.value);
        closeModifyMode();
    };

    return (
        <li>
            <input
                type="checkbox"
                readOnly
                checked={todo.completed}
                onClick={() => toggleTodo(todo.id)}
            />
            <span className="relative" onClick={() => toggleTodo(todo.id)}>
                {todo.todo}
                <form
                    className="absolute top-[100%] left-0 bg-white z-10"
                    style={{ display: isModifyMode ? "flex" : "none" }}
                    onSubmit={handleSubmit}
                    onClick={(e) => e.stopPropagation()}
                >
                    <input ref={inputRef} />
                    <button>저장</button>
                </form>
            </span>
            <button onClick={() => handleToggle()}>수정</button>
            <button onClick={() => removeTodo(todo.id)}>삭제</button>
        </li>
    );
};

export default TodoItem;

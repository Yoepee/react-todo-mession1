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
        <li className="bg-white rounded-lg shadow flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    readOnly
                    checked={todo.completed}
                    onClick={() => toggleTodo(todo.id)}
                    className="w-5 h-5 text-indigo-600"
                />
                <span
                    className={`relative text-gray-800 cursor-pointer ${
                        todo.completed ? "line-through text-gray-400" : ""
                    }`}
                    onClick={() => toggleTodo(todo.id)}
                >
                    {todo.todo}

                    {/* 수정 폼 */}
                    <form
                        className={`absolute top-full left-0 mt-1 flex items-center gap-2 bg-white p-2 border rounded shadow z-10 ${
                            isModifyMode ? "flex" : "hidden"
                        }`}
                        onSubmit={handleSubmit}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <input
                            ref={inputRef}
                            className="border px-2 py-1 rounded"
                        />
                        <button
                            type="submit"
                            className="text-sm px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                        >
                            저장
                        </button>
                    </form>
                </span>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={() => handleToggle()}
                    className="text-sm px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                >
                    수정
                </button>
                <button
                    onClick={() => removeTodo(todo.id)}
                    className="text-sm px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    삭제
                </button>
            </div>
        </li>
    );
};

export default TodoItem;

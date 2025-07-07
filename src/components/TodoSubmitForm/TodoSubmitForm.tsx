import { useRef } from "react";
import useTodos from "../../hooks/useTodos";

const TodoSubmitForm = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { addTodo } = useTodos();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!inputRef.current) return;
        const input: HTMLInputElement = inputRef.current;
        addTodo(input.value);
        input.value = "";
        input.focus();
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-6">
            <input
                ref={inputRef}
                name="todo"
                placeholder="Todo를 입력해주세요."
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                등록
            </button>
        </form>
    );
};

export default TodoSubmitForm;

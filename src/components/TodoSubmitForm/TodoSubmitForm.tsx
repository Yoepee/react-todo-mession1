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
        <form onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                name="todo"
                placeholder="Todo를 입력해주세요."
            />
            <button>등록</button>
        </form>
    );
};

export default TodoSubmitForm;

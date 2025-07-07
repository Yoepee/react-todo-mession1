import TodoSubmitForm from "../components/TodoSubmitForm/TodoSubmitForm";
import TodoList from "../components/TodoList/TodoList";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useTodoStore } from "../stores/useTodoStore";

const TodoPage = () => {
    const todos = useContext(TodoContext);
    const setTodos = useTodoStore((state) => state.action.setTodos);
    setTodos(todos);
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
                    ✨ 오늘의 할 일 ✨
                </h1>
                <TodoSubmitForm />
                <TodoList />
            </div>
        </div>
    );
};

export default TodoPage;

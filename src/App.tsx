import { useContext } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoSubmitForm from "./components/TodoSubmitForm/TodoSubmitForm";
import { useTodoStore } from "./stores/useTodoStore";
import { TodoContext } from "./contexts/TodoContext";

function App() {
    const todos = useContext(TodoContext);
    const setTodos = useTodoStore((state) => state.action.setTodos);
    setTodos(todos);
    return (
        <>
            <TodoSubmitForm />
            <TodoList />
        </>
    );
}

export default App;

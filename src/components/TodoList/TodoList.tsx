import { useTodoStore } from "../../stores/useTodoStore";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = useTodoStore((state) => state.todos);

    return (
        <ul className="space-y-2">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;

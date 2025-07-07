import { createContext } from "react";
import { type Todo } from "../interfaces/Todo";

export const TodoContext = createContext<Todo[]>([]);

import {
  createContext,
  createElement,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type Todo = { id: string; title: string };

type TodosContextValue = {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
};

const TodosContext = createContext<TodosContextValue | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Context" },
  ]);

  const addTodo = (title: string) =>
    setTodos([...todos, { id: Date.now().toString(), title }]);

  const updateTodo = (id: string, title: string) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, title } : t)));

  const deleteTodo = (id: string) =>
    setTodos(todos.filter((t) => t.id !== id));

  // .ts file (no JSX), so the provider is created with createElement
  return createElement(
    TodosContext.Provider,
    { value: { todos, addTodo, updateTodo, deleteTodo } },
    children,
  );
}

export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) {
    throw new Error("useTodosContext must be used inside TodosProvider");
  }
  return value;
}

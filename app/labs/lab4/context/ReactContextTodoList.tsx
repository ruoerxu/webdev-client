import { useState } from "react";
import { useTodosContext, type Todo } from "./todosContext";

function TodoItem({ todo }: { todo: Todo }) {
  const { updateTodo, deleteTodo } = useTodosContext();
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const save = () => {
    if (title.trim()) updateTodo(todo.id, title.trim());
    setEditing(false);
  };

  return (
    <li
      id={`wd-context-todo-${todo.id}`}
      className="flex items-center gap-2 border-b border-neutral-200 py-2"
    >
      {editing ? (
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && save()}
          className="flex-1 rounded border border-neutral-300 px-2 py-1"
        />
      ) : (
        <span className="flex-1">{todo.title}</span>
      )}
      {editing ? (
        <button
          type="button"
          onClick={save}
          className="rounded bg-green-600 px-3 py-1 text-sm font-medium text-white"
        >
          Save
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setEditing(true)}
          className="rounded bg-yellow-500 px-3 py-1 text-sm font-medium text-white"
        >
          Edit
        </button>
      )}
      <button
        type="button"
        onClick={() => deleteTodo(todo.id)}
        className="rounded bg-red-600 px-3 py-1 text-sm font-medium text-white"
      >
        Delete
      </button>
    </li>
  );
}

export default function ReactContextTodoList() {
  const { todos, addTodo } = useTodosContext();
  const [newTitle, setNewTitle] = useState("");

  const add = () => {
    if (!newTitle.trim()) return;
    addTodo(newTitle.trim());
    setNewTitle("");
  };

  return (
    <div id="wd-react-context-todo-list" className="max-w-xl">
      <h3>Todo List (Context)</h3>
      <div className="mb-2 flex gap-2">
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder="New todo"
          id="wd-context-todo-input"
          className="flex-1 rounded border border-neutral-300 px-2 py-1"
        />
        <button
          type="button"
          onClick={add}
          id="wd-context-todo-add"
          className="rounded bg-blue-600 px-3 py-1 text-sm font-medium text-white"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

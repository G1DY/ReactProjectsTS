import { useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const Todos: React.FC = () => {
  const [todo, setTodo] = useState<Todo[]>([]);

  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: todo.length + 1,
      task,
      completed: false,
    };
    setTodo((prevTodo) => [...prevTodo, newTodo]);
  };
  return (
    <div>
      <h2>Todo List</h2>
      <button onClick={() => addTodo("new todo")}>AddTodo</button>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            {todo.task} {todo.completed ? "completed" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todos;

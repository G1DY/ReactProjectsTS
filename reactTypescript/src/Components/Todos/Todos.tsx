interface Todo {
  id: number;
  task: string;
  completed: string;
}

const Todos: React.FC = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  return <div></div>;
};
export default Todos;

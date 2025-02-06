interface user {
  name: string;
  age: number;
  isStudent: boolean;
}

const User: React.FC<user> = ({ name, age, isStudent }) => {
  return (
    <article>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>IsStudent: {isStudent}</h1>
    </article>
  );
};
export default User;

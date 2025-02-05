import Button from "./Components/Button";

const App = () => {
  return (
    <Button
      label="click"
      onClick={() => console.log("clicked")}
      disabled={false}
    />
  );
};
export default App;

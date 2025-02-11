import { FormEvent, useRef, useState } from "react";

type FormDetails = {
  name: string;
  email: string;
  password: string;
};
const Form1 = () => {
  const [submitteddata, setSubmittedData] = useState<FormDetails>({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmittedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" ref={name} />
        <input type="email" placeholder="Enter your email" ref={email} />
        <input
          type="password"
          placeholder="Enter your password"
          ref={password}
        />
        <button type="submit">Submit</button>
        <section>
          <h1>Name: {submitteddata.name}</h1>
          <h1>Email: {submitteddata.email}</h1>
          <h1>Password: {submitteddata.password}</h1>
        </section>
      </form>
      ;
    </>
  );
};
export default Form1;

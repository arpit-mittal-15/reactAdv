import { FormEvent, useRef, useState } from "react";

const Form = () => {

  type formData = {
    name: string;
    email: string;
    password: string;
  };
  
  const [submittedData, setSubmittedData] = useState<formData>({
    name: "",
    email: "",
    password: "",
  });
  
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;
  
    setSubmittedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    })
  }


  return <form onSubmit={handleSubmit}>
    <input type="text" placeholder="enter your name" ref={name} />
    <input type="text" placeholder="enter your email" ref={email} />
    <input type="text" placeholder="enter your password" ref={password} />
    <button type="submit">Submit</button>

    <section>
      <h1>Name: {submittedData.name}</h1>
      <h1>email: {submittedData.email}</h1>
      <h1>password: {submittedData.password}</h1>
    </section>
  </form>;
};

export default Form;

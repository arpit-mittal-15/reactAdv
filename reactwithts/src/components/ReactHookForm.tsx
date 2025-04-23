import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const ReactHookForm = () => {
  // register: to register input values
  // handlesubmit: to handle onsubmit
  // errors: contains validation errors for the form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        {...register("name", { required: "Name is required" })}
      />

      {errors.name && <p>{errors.name.message}</p>}

      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        {...register("email", { required: "Email is required" })}
      />

      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="password">Password:</label>
      <input
        type="text"
        id="password"
        {...register("password", { required: "Password is required" })}
      />

      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ReactHookForm;

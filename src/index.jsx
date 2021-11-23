import * as React from "react";
import * as ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

const App = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { touched }
  } = useForm({
    defaultValues: {
      firstName: "Bill",
      lastName: "luo",
      amount: ""
    }
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  console.log("touched", touched);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input type="text" {...register("firstName")} />
      <label>Last Name</label>
      <input type="text" {...register("lastName")} />
      <label>Number of Corndog's</label>
      <input type="number" {...register("amount", { min: 1, max: 99 })} />
      <button
        type="button"
        onClick={() => {
          setValue("amount", 100, { shouldDirty: true });
        }}
      >
        change amount
      </button>
      <input type="submit" />
    </form>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

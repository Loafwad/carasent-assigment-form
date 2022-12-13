import { useState } from "react";
import Layout from "./components/Layout/Layout";
import Button from "./components/Misc/Button";
import InputField from "./components/Misc/InputField";
import RadioField from "./components/Misc/RadioField";
import Select from "./components/Misc/SelectField";
import { useForm } from "./hooks/useForm";

function App() {
  const { register, handleSubmit, reset, values } = useForm();

  const [submitted, setSubmitted] = useState(false);

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleSubmit(e);
    setSubmitted(true);
  }

  if (submitted)
    return (
      <main>
        <Layout>
          <div className="flex flex-col space-y-12 ">
            <section className="flex flex-col space-y-4">
              <h1 className="text-4xl text-center">Thank you for submitting the form!</h1>
              <p className="text-lg">Here is what you submitted:</p>
            </section>
            <section>
              {Object.keys(values).map((key) => (
                <p key={key}>
                  {key}: {values[key]}
                </p>
              ))}
            </section>
            <Button label="Ok" callback={() => setSubmitted(false)} />
          </div>
        </Layout>
      </main>
    );

  return (
    <main>
      <Layout>
        <form
          id="form"
          className="w-full space-y-6 p-12 rounded-md shadow-md text-white bg-dark_blue h-full"
          onSubmit={onSubmitHandler}
          onReset={reset}
        >
          <InputField
            type="firstName"
            label="First Name"
            placeholder="Enter your name"
            {...register("firstName", { value: true, message: "This field is required" })}
          />
          <InputField
            type="lastName"
            {...register("lastName", { value: false, message: "" })}
            label="Last Name"
            placeholder="Enter your name"
          />
          <InputField
            type="mail"
            label="Email"
            placeholder="Enter your email"
            {...register("mail", {
              value: true,
              pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Please enter a valid email",
            })}
          />
          <Select
            type="select"
            label="Select an option"
            placeholder="Pick one"
            {...register("select", { value: false, message: "" })}
            options={["Option 1", "Option 2", "Option 3"]}
          />
          <RadioField
            label="Choose an item"
            type="radio"
            {...register("radio", { value: false, message: "" })}
            options={["Item 1", "Item 2", "Item 3"]}
          />
          <section className="w-full flex space-x-6">
            <Button type="submit" label="Send" />
            <Button type="reset" label="Reset" primary />
          </section>
        </form>
      </Layout>
    </main>
  );
}

export default App;
